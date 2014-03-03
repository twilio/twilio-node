var twilio = require('../lib'),
    express = require('express'),
    request = require('request'),
    http = require('http'),
    crypto = require('crypto'),
    f = require('util').format;

var twimlString = '<?xml version="1.0" encoding="UTF-8"?><Response><Message>hi</Message></Response>',
    params = { 
        To:'+16515556677', 
        From:'+16515556699',
        Body:'hello áçčëñtš 😃'
    },
    fakeToken = 'abcdefghijklmnopqrstuvwxyz1234567890';

describe('Testing Express request validation', function() {
    // create a local express app
    var app = require('express')();

    // Use url-encoded body parser
    app.use(express.urlencoded());

    // create a simple TwiML-serving web app that will validate a request
    // was originated by Twilio
    var requestValidated = false,
        twiml = new twilio.TwimlResponse().message('hi');

    app.post('/sms', function(request, response) {
        // Use manually
        if (twilio.validateExpressRequest(request, fakeToken)) {
            requestValidated = true;
            response.type('text/xml');
            response.send(twiml.toString());
        } else {
            response.send(403,'You are not Twilio >:/');
        }
    });

    // Create a second URL that will test the behavior of the validation
    // middleware and TwiML-aware response monkey patch
    app.post('/middleware', twilio.webhook(fakeToken), function(request, response) {
        response.send(twiml);
    });

    // Just decorate the 
    app.post('/noauth', twilio.webhook(fakeToken, {
        validate:false
    }), function(request, response) {
        response.send(twiml);
    });

    //start server
    var server = http.createServer(app);
    server.listen(3000);

    // test ngrok-exposed URL
    var testUrl = 'http://localhost:3000';
    it('should give a 403 from a direct POST', function(done) {
        request({
            method:'POST',
            url:testUrl+'/sms'
        }, function(err, response, body) {
            expect(response.statusCode).toBe(403);
            done();
        });
    });

    it('should act okay if the request is signed the Twilio way', function(done) {
        // Manually create a Twilio signature
        var signUrl = testUrl+'/sms';
        var testSig = 'FUjfbzy5aqpVEYoCcThCAKmctVo=';

        // Hit our webhook with a "Twilio signed" request
        request({
            method:'POST',
            url:testUrl+'/sms',
            headers: {
                'X-Twilio-Signature':testSig
            },
            form: params
        }, function(err, response) {
            expect(err).toBeFalsy();
            expect(response.body).toBe(twimlString);
            done();
        });

    });

    it('should render twiml with no auth', function(done) {
        request({
            method:'POST',
            url:testUrl+'/noauth'
        }, function(err, response, body) {
            expect(response.body).toBe(twimlString);
            done();
        });
    });

    it('should give a 403 from a direct POST', function(done) {
        request({
            method:'POST',
            url:testUrl+'/middleware'
        }, function(err, response, body) {
            expect(response.statusCode).toBe(403);
            done();
        });
    });

    it('should validate with middleware', function(done) {
        // Manually create a Twilio signature
        var signUrl = testUrl+'/middleware';
        var testSig = 'Eh17e3p7Yu48aMIa+yHk++1+L5s=';

        // Hit our webhook with a "Twilio signed" request
        request({
            method:'POST',
            url:testUrl+'/middleware',
            headers: {
                'X-Twilio-Signature':testSig
            },
            form: params
        }, function(err, response) {
            expect(err).toBeFalsy();
            expect(response.body).toBe(twimlString);
            server.close();
            done();
        });

    });
});
var config = require('../config'),
    twilio = require('../index');

describe('The Twilio REST Client constructor', function () {
    //mess with the constructor options
    it('should allow for advanced configuration', function () {
        var fakeSid = 'ACXXX',
            fakeAuth = '12345',
            fakeHost = 'google.com',
            fakeApi = '1999-02-12';

        var specialClient = new twilio.RestClient(fakeSid, fakeAuth, {
            host:fakeHost,
            apiVersion:fakeApi
        });

        //Check URL construction with custom config
        expect(specialClient.getBaseUrl()).toBe('https://' + fakeSid + ':' + fakeAuth + '@' + fakeHost + '/' + fakeApi);
    });

    it('should use environment variables, if defined, for the constructor', function() {
        var oldSid = process.env.TWILIO_ACCOUNT_SID,
            oldAuthToken = process.env.TWILIO_AUTH_TOKEN;

        process.env.TWILIO_ACCOUNT_SID = 'foo';
        process.env.TWILIO_AUTH_TOKEN = 'bar';

        var c = twilio();

        expect(c.accountSid).toBe('foo');
        expect(c.authToken).toBe('bar');

        delete process.env.TWILIO_ACCOUNT_SID;
        delete process.env.TWILIO_AUTH_TOKEN;

        expect(twilio).toThrow();

        process.env.TWILIO_ACCOUNT_SID = oldSid;
        process.env.TWILIO_AUTH_TOKEN = oldAuthToken;
    });

    //create a client with a valid account SID and authToken for live testing
    var client = new twilio.RestClient(config.accountSid, config.authToken);

    it('should assemble the correct HTTP Basic auth URL string for default API', function () {
        expect(client.getBaseUrl()).toBe('https://' + config.accountSid + ':' + config.authToken + '@' + 'api.twilio.com/2010-04-01');
    });

    it('should be able to make an authenticated request against the Twilio backend', function (done) {
        client.request({
            url:'/Accounts',
            method:'GET'
        }, function (err, data, response) {
            expect(err).toBeNull();
            expect(data.accounts.length).toBeGreaterThan(0);
            expect(data.accounts[0].status).toBeDefined();
            done();
        });
    });

    it('should initialize a new RestClient with a single line', function(done) {
        var oneLiner = require('../index')(config.accountSid, config.authToken);
        expect(oneLiner.getBaseUrl()).toBe('https://' + config.accountSid + ':' + config.authToken + '@' + 'api.twilio.com/2010-04-01');
        oneLiner.accounts(config.accountSid).get(function(err, data) {
            expect(data.sid).toBe(config.accountSid);
            done();
        });
    });

    it('should fail with an unauthorized error if the auth token is wrong and has space', function(done) {
        var c = twilio(config.accountSid, 'foo bar');

        c.accounts.get(function(err, data) {
            expect(err).toBeTruthy();
            expect(err.status).toBe(401);
            done();
        });
    });
});
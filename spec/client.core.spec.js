var twilio = require('../index');
var http = require('http');
var moduleinfo = require('../package.json');

describe('The Twilio Rest Client', function () {
    describe('constructor', function () {
        //mess with the constructor options
        it('should allow for advanced configuration', function () {
            var fakeSid = 'AC123',
                fakeAuth = '123',
                fakeHost = 'google.com',
                fakeApi = '1999-02-12';

            var specialClient = new twilio.RestClient(fakeSid, fakeAuth, {
                host: fakeHost,
                apiVersion: fakeApi
            });

            //Check URL construction with custom config
            expect(specialClient.getBaseUrl()).toBe('https://' + fakeSid + ':'
                    + fakeAuth + '@' + fakeHost + '/' + fakeApi); });

        xit('should fail gracefully if the host is unreachable', function (done) {
            var specialClient = new twilio.RestClient(config.accountSid, config.authToken, {
                host: 'unreachable.twilio.com'
            });

            specialClient.request({
                url: '/Accounts',
                method: 'GET'
            }, function (err, data, response) {
                expect(err).toBeDefined();
                done();
            });
        });

        it('should use environment variables, if defined, for the constructor', function () {
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

        var client = new twilio.RestClient('AC123', '123'),
            expectedUrl = 'https://AC123:123@api.twilio.com/2010-04-01';

        it('should assemble the correct URL string for default API', function () {
            expect(client.getBaseUrl()).toBe(expectedUrl);
        });

        it('should initialize a new RestClient with a single line', function () {
            var oneLiner = require('../index')('AC123', '123');
            expect(oneLiner.getBaseUrl()).toBe(expectedUrl);
        });

        xit('should fail with an unauthorized error if the auth token is wrong and has space', function (done) {
            var c = twilio(config.accountSid, 'foo bar');

            c.accounts.get(function (err, data) {
                expect(err).toBeTruthy();
                expect(err.status).toBe(401);
                done();
            });
        });
    });

    describe('request', function() {
        var slowClient = new twilio.RestClient('AC123', '123', {
            host: 'localhost:9999',
            timeout: 2000 // timeout after 2 seconds
        });
        slowClient.getBaseUrl = function() {
            return 'http://localhost:9999';
        };

        var startServerWithoutTimeout = function(timeout, callback) {
            var server = http.createServer(function(request, response) {
                setTimeout(function() {
                    response.end(JSON.stringify({
                        response: 'This request has finished sleeping for '
                            + timeout + ' seconds.'
                    }));
                }, timeout * 1000);
            });
            server.listen('9999', function() {
                callback(server);
            });
        };

        it('should allow for timeout configuration and handle responses faster than the timeout', function (done) {
            startServerWithoutTimeout(1, function(server) {
                spyOn(slowClient, 'request').and.callThrough();

                var promise = slowClient.request({
                    url: '/blah',
                    method: 'GET'
                }, function (err, data, response) {
                    expect(data.response).toBe('This request has finished sleeping for 1 seconds.');
                    server.close(done);
                });

                expect(slowClient.request).toHaveBeenCalledWith({
                    url: 'http://localhost:9999/blah.json',
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Accept-Charset': 'utf-8',
                        'User-Agent': 'twilio-node/' + moduleinfo.version
                    },
                    timeout: 2000
                }, any(Function));
            });
        });

        it('should allow for timeout configuration and handle responses slower than the timeout', function (done) {
            startServerWithoutTimeout(3, function(server) {
                spyOn(slowClient, 'request').and.callThrough();

                slowClient.request({
                    url: '/blah',
                    method: 'GET'
                }, function (err, data, response) {
                    expect(err.status).toBe('ETIMEDOUT');
                    server.close(done);
                });

                expect(slowClient.request).toHaveBeenCalledWith({
                    url: 'http://localhost:9999/blah.json',
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Accept-Charset': 'utf-8',
                        'User-Agent': 'twilio-node/' + moduleinfo.version
                    },
                    timeout: 2000
                }, any(Function));
            });
        });
    });
});

var twilio = require('../index'),
    request = require('request'),
    moduleinfo = require('../package.json');;

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
        // Use fake response server to simulate a slow response time
        // See http://www.seanshadmand.com/2012/06/21/fake-response-server-slow-response-time-generator/
        var fake_response_host = 'fake-response.appspot.com';

        var slowClient = new twilio.RestClient('AC123', '123', {
            host: fake_response_host,
            timeout: 2000 // timeout after 2 seconds
        });

        // The fake response url only works when we don't send auth tokens, account id, etc -- otherwise it 404's
        slowClient.getBaseUrl = function () {
            return 'http://' + fake_response_host;
        };

        it('should allow for timeout configuration and handle responses faster than the timeout', function (done) {
            spyOn(slowClient, 'request').andCallThrough();

            slowClient.request({
                url: '?sleep=1&', // sleep for 1 second
                method: 'GET'
            }, function (err, data, response) {
                expect(data.response).toBe('This request has finsihed sleeping for 1 seconds.');
                done();
            });

            expect(slowClient.request).toHaveBeenCalledWith({
                url: 'http://fake-response.appspot.com?sleep=1&.json',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Accept-Charset': 'utf-8',
                    'User-Agent': 'twilio-node/' + moduleinfo.version
                },
                timeout: 2000
            }, any(Function));
        });

        it('should allow for timeout configuration and handle responses slower than the timeout', function (done) {
            spyOn(slowClient, 'request').andCallThrough();

            slowClient.request({
                url: '?sleep=3&', // sleep for 3 seconds
                method: 'GET'
            }, function (err, data, response) {
                expect(err.status).toBe('ETIMEDOUT');
                done();
            });

            expect(slowClient.request).toHaveBeenCalledWith({
                url: 'http://fake-response.appspot.com?sleep=3&.json',
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

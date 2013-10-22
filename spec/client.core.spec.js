var twilio = require('../index');

describe('The Twilio REST Client constructor', function () {
    //mess with the constructor options
    it('should allow for advanced configuration', function () {
        var fakeSid = 'AC123',
            fakeAuth = '123',
            fakeHost = 'google.com',
            fakeApi = '1999-02-12';

        var specialClient = new twilio.RestClient(fakeSid, fakeAuth, {
            host:fakeHost,
            apiVersion:fakeApi
        });

        //Check URL construction with custom config
        expect(specialClient.getBaseUrl()).toBe('https://' + fakeSid + ':' + fakeAuth + '@' + fakeHost + '/' + fakeApi);
    });

    xit('should fail gracefully if the host is unreachable', function (done) {
        var specialClient = new twilio.RestClient(config.accountSid, config.authToken, {
            host:'unreachable.twilio.com'
        });

        specialClient.request({
            url:'/Accounts',
            method:'GET'
        }, function (err, data, response) {
            expect(err).toBeDefined();
            done();
        });
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

    var client = new twilio.RestClient('AC123', '123'),
        expectedUrl = 'https://AC123:123@api.twilio.com/2010-04-01';

    it('should assemble the correct HTTP Basic auth URL string for default API', function () {
        expect(client.getBaseUrl()).toBe(expectedUrl);
    });

    it('should initialize a new RestClient with a single line', function() {
        var oneLiner = require('../index')('AC123', '123');
        expect(oneLiner.getBaseUrl()).toBe(expectedUrl);
    });

    xit('should fail with an unauthorized error if the auth token is wrong and has space', function(done) {
        var c = twilio(config.accountSid, 'foo bar');

        c.accounts.get(function(err, data) {
            expect(err).toBeTruthy();
            expect(err.status).toBe(401);
            done();
        });
    });
});
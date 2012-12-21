var config = require('../config'),
    twilio = require('../index');

describe('The Twilio REST Client SMS resource', function () {
    //create a client with a valid account SID and authToken for live testing
    var client = new twilio.RestClient(config.accountSid, config.authToken);

    var instanceSid;

    it('sends an SMS message using a Twilio number', function(done) {
        client.sendSms({
            To:config.to,
            from:config.from,
            body:'the current time in milliseconds is '+new Date().getTime()
        }, function(err, data) {
            expect(data.from).toBe(config.from);
            expect(data.sid).toBeDefined();
            instanceSid = data.sid;
            done();
        });
    });

    it('gets details about a specific SMS message sent', function(done) {
        client.getSms(instanceSid, function(err, data) {
            expect(data.sid).toBe(instanceSid);
            done();
        });
    });

    it('gets a list of all SMS Messages, with query parameters', function(done) {
        client.listSms({
            From:config.from
        }, function(err, data) {
            expect(data.sms_messages.length).toBeGreaterThan(0);
            expect(data.sms_messages[0].from).toBe(config.from);
            done();
        });
    });
});
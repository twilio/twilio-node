var config = require('../config'),
    twilio = require('../index');

describe('The Twilio REST Client OutgoingCallerIds resource', function () {
    //create a client with a valid account SID and authToken for live testing
    var client = new twilio.RestClient(config.accountSid, config.authToken);

    //caller ID sid to use after the first GET test
    var instanceSid, instancePN;

    //Same as "POST"
    it('creates a caller ID verification request', function(done) {
        client.accounts.outgoingCallerIds.create({
            phoneNumber:'+16518675309'
        }, function(err,data) {
            expect(data.phone_number).toBe('+16518675309');
            expect(data.validation_code).toBeDefined();
            done();
        });
    });

    //requires a verified caller ID in an account
    it('gets a list of verified caller IDs', function(done) {
        client.accounts.outgoingCallerIds.list(function(err, data) {
            expect(data.outgoing_caller_ids.length).toBeGreaterThan(0);
            instanceSid = data.outgoing_caller_ids[0].sid;
            expect(instanceSid).toMatch(/^PN.*/);
            done();
        });
    });

    it('gets details about a specific phone number SID', function(done) {
        client.accounts.outgoingCallerIds(instanceSid).get(function(err, data) {
            expect(data.sid).toBe(instanceSid);
            done();
        });
    });

    it('updates details about the caller ID', function(done) {
        client.accounts.outgoingCallerIds(instanceSid).update({
            friendlyName:'Something Friendly!'
        }, function(err, data) {
            expect(data.friendly_name).toBe('Something Friendly!');
            done();
        });
    });

    //disable unless specificially testing this functionality
    xit('deletes a verified phone number', function(done) {
        client.accounts.outgoingCallerIds(instanceSid).delete(function(err, data, httpResponse) {
            expect(httpResponse.statusCode).toBe(204);
            done();
        });
    });
});
var config = require('../config'),
    twilio = require('../index');

describe('The Twilio REST Connect Apps resource', function () {
    //create a client with a valid account SID and authToken for live testing
    var client = new twilio.RestClient(config.accountSid, config.authToken);

    var instanceSid;

    it('gets a list of all connect apps', function(done) {
        client.accounts.connectApps.list(function(err, data) {
            expect(data.connect_apps.length).toBeGreaterThan(0);
            instanceSid = data.connect_apps[0].sid;
            done();
        });
    });

    it('updates information about a connect app by SID', function(done) {
        var newName = 'Friendly'+new Date().getTime();
        client.accounts.connectApps(instanceSid).update({
            friendlyName:newName
        }, function(err, data) {
            expect(data.friendly_name).toBe(newName);
            expect(data.sid).toBe(instanceSid);
            done();
        });
    });

    it('gets details about a specific account by sid - just for fun, use master account SID explicitly', function(done) {
        client.accounts(config.accountSid).connectApps(instanceSid).get(function(err, data) {
            expect(data.sid).toBe(instanceSid);
            done();
        });
    });

});
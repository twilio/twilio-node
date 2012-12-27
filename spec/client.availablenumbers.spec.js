var config = require('../config'),
    twilio = require('../index');

describe('The Twilio REST Client AvailablePhoneNumbers resource', function () {
    //create a client with a valid account SID and authToken for live testing
    var client = new twilio.RestClient(config.accountSid, config.authToken);

    it('gets a list of available phone numbers for a given country, with no filter', function (done) {
        client.accounts.availablePhoneNumbers('GB').local.get(function (err, data) {
            expect(data.available_phone_numbers[0].phone_number).toMatch(/^\+44.*/);
            done();
        });
    });

    it('gets a list of available phone numbers for a given country, with an area code filter', function (done) {
        client.accounts.availablePhoneNumbers('US').local.list({
            areaCode:651
        }, function (err, data) {
            expect(data.available_phone_numbers[0].phone_number).toMatch(/^\+1651.*/);
            done();
        });
    });

    it('gets a list of available TOLL FREE phone numbers for a given country, with no filter', function (done) {
        client.accounts.availablePhoneNumbers('US').tollFree.get(function (err, data) {
            expect(data.available_phone_numbers[0].phone_number).toMatch(/^\+18.*/);
            done();
        });
    });

    it('gets a list of available TOLL FREE phone numbers for a given country, with a filter', function (done) {
        client.accounts.availablePhoneNumbers('US').tollFree.get({
            Contains:'866******9'
        }, function (err, data) {
            expect(data.available_phone_numbers[0].phone_number).toMatch(/^\+1866.*9$/);
            done();
        });
    });

});
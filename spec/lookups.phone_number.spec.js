var twilio = require('../index');

describe('The Twilio Lookups PhoneNumber resource', function () {
    var client = new twilio.LookupsClient('AC123', '123');

    beforeEach(function () {
        spyOn(client, 'request');
    });

    it('fetches a phone number', function() {
        client.phoneNumbers('4153902337').get()
        expect(client.request).toHaveBeenCalled();
        expect(client.request).toHaveBeenCalledWith({
            url: '/PhoneNumbers/4153902337',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('fetches a phone number with country code and type', function() {
        client.phoneNumbers('4153902337').get({countryCode: 'US', type: 'carrier'});
        expect(client.request).toHaveBeenCalled();
        expect(client.request).toHaveBeenCalledWith({
            url: '/PhoneNumbers/4153902337',
            method: 'GET',
            qs: {
                CountryCode: 'US',
                Type: 'carrier'
            }
        }, undefined);
    });
});

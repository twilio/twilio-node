var twilio = require('../index');

describe('The Twilio Pricing Client', function() {
    var client = new twilio.PricingClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('gets a list of voice countries', function() {
        client.voice.countries.list();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Voice/Countries',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('gets a voice country by iso code', function() {
        client.voice.countries('US').get();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Voice/Countries/US',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('gets voice number pricing by number', function() {
        client.voice.numbers('+14155551234').get();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Voice/Numbers/+14155551234',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('gets phone number countries', function() {
        client.phoneNumbers.countries.list();
        expect(client.request).toHaveBeenCalledWith({
            url:'/PhoneNumbers/Countries',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('gets phone number pricing for a country', function() {
        client.phoneNumbers.countries('GB').get();
        expect(client.request).toHaveBeenCalledWith({
            url:'/PhoneNumbers/Countries/GB',
            method:'GET',
            qs:{}
        }, undefined);
    });
});

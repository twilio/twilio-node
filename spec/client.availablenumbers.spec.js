var twilio = require('../index');

describe('The Twilio REST Client AvailablePhoneNumbers resource', function() {
    var client = new twilio.RestClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('gets a list of available phone numbers for a given country, with no filter', function() {
        client.accounts.availablePhoneNumbers('GB').local.get();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/AvailablePhoneNumbers/GB/Local',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('gets a list of available phone numbers for a given country, with an area code filter', function() {
        client.accounts.availablePhoneNumbers('US').local.search({
            areaCode:612
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/AvailablePhoneNumbers/US/Local',
            method:'GET',
            qs:{
                AreaCode:612
            }
        }, undefined);
    });

    it('gets a list of available TOLL FREE phone numbers for a given country, with no filter', function() {
        client.accounts.availablePhoneNumbers('US').tollFree.get();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/AvailablePhoneNumbers/US/TollFree',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('gets a list of available TOLL FREE phone numbers for a given country, with a filter', function() {
        client.accounts.availablePhoneNumbers('US').tollFree.get({
            contains:'866******9'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/AvailablePhoneNumbers/US/TollFree',
            method:'GET',
            qs:{
                Contains:'866******9'
            }
        }, undefined);
    });

    it('gets a list of MOBILE phone numbers for a given country, with no filter', function() {
        client.accounts.availablePhoneNumbers('GB').mobile.get();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/AvailablePhoneNumbers/GB/Mobile',
            method:'GET',
            qs:{}
        }, undefined);
    });
});

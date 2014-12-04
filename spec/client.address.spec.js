var twilio = require('../index');

describe('The Twilio REST Address resource', function () {
    var client = new twilio.RestClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('lists addresses', function() {
        client.addresses.list({
            friendlyName:'testAddress'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Addresses',
            method:'GET',
            qs:{
                FriendlyName:'testAddress'
            }
        }, undefined);
    });

    it('gets dependent phone numbers', function() {
        client.addresses('AD123').dependentPhoneNumbers.list();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Addresses/AD123/DependentPhoneNumbers',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('gets addresses with params', function() {
        client.addresses.list({
            'IsoCountry':'CA'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Addresses',
            method:'GET',
            qs:{
                'IsoCountry':'CA'
            }
        }, undefined);
    });

    it('creates an address', function() {
        client.addresses.create({
            friendlyName: 'testAddress',
            customerName: 'Homer Simpson',
            street: '645 Harrison St',
            city: 'San Francisco',
            region: 'CA',
            postalCode: '94107',
            isoCountry: 'US'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Addresses',
            method:'POST',
            form:{
                FriendlyName: 'testAddress',
                CustomerName: 'Homer Simpson',
                Street: '645 Harrison St',
                City: 'San Francisco',
                Region: 'CA',
                PostalCode: '94107',
                IsoCountry: 'US'
            }
        }, undefined);
    });
});

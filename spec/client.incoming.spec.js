var twilio = require('../index');

describe('The Twilio REST Client IncomingPhoneNumbers resource', function () {
    var client = new twilio.RestClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('gets a list of already purchased incoming phone numbers', function() {
        client.accounts.incomingPhoneNumbers.list();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/IncomingPhoneNumbers',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('gets details about a specific number, by sid', function() {
        client.incomingPhoneNumbers('PN123').get();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/IncomingPhoneNumbers/PN123',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('updates information about a number with a given sid', function(){
        client.accounts.incomingPhoneNumbers('PN123').update({
            voiceUrl:'foo',
            SmsUrl:'bar'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/IncomingPhoneNumbers/PN123',
            method:'PUT',
            form:{
                VoiceUrl:'foo',
                SmsUrl:'bar'
            }
        }, undefined);
    });

    //requires at least one toll free number in the test account
    it('gets a list of Toll Free numbers for the given account', function() {
        client.incomingPhoneNumbers.tollFree.get();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/IncomingPhoneNumbers/TollFree',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('gets a list of local numbers for the given account', function() {
        client.incomingPhoneNumbers.local.get();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/IncomingPhoneNumbers/Local',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('deletes a purchased phone number', function() {
        client.incomingPhoneNumbers('PN123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/IncomingPhoneNumbers/PN123',
            method:'DELETE',
            form:{}
        }, undefined);
    });

    it('allows for the purchase of new phone numbers using the subresource', function() {
        client.incomingPhoneNumbers.local.create({
            VoiceUrl:'foo',
            phoneNumber:'bar'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/IncomingPhoneNumbers/Local',
            method:'POST',
            form:{
                VoiceUrl:'foo',
                PhoneNumber:'bar'
            }
        }, undefined);
    });
});
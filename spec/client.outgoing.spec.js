var twilio = require('../index');

describe('The Twilio REST Client OutgoingCallerIds resource', function () {
    var client = new twilio.RestClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    //Same as "POST"
    it('creates a caller ID verification request', function() {
        client.outgoingCallerIds.create({
            phoneNumber:'+16518675309'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/OutgoingCallerIds',
            method: 'POST',
            form: {
                PhoneNumber:'+16518675309'
            }
        }, undefined);
    });

    //requires a verified caller ID in an account
    it('gets a list of verified caller IDs', function() {
        client.accounts.outgoingCallerIds.list();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/OutgoingCallerIds',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('gets details about a specific phone number SID', function() {
        client.accounts.outgoingCallerIds('PN123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/OutgoingCallerIds/PN123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('updates details about the caller ID', function() {
        client.accounts.outgoingCallerIds('PN123').update({
            friendlyName:'Something Friendly!'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/OutgoingCallerIds/PN123',
            method: 'PUT',
            form: {
                FriendlyName:'Something Friendly!'
            }
        }, undefined);
    });

    it('deletes a verified phone number', function() {
        client.accounts.outgoingCallerIds('PN123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/OutgoingCallerIds/PN123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });
});
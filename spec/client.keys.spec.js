var twilio = require('../index');

describe('The Twilio REST Client Keys resource', function() {
    var client = new twilio.RestClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('creates a new key, configured with a friendly name', function() {
        client.keys.create({
            friendlyName: 'Testing Key'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Keys',
            method: 'POST',
            form: {
                FriendlyName: 'Testing Key'
            }
        }, undefined);
    });

    it('gets a list of keys', function() {
        client.keys.list();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Keys',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('gets information about a key with a specific sid', function() {
        client.keys('SK123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Keys/SK123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('updates details about an existing key', function() {
        client.keys('SK123').update({
            friendlyName: 'New name'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Keys/SK123',
            method: 'POST',
            form: {
                FriendlyName: 'New name'
            }
        }, undefined);
    });

    it('deletes a key', function() {
        client.keys('SK123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Keys/SK123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });
});

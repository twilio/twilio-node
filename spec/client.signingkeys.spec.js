var twilio = require('../index');

describe('The Twilio REST Client SigningKeys resource', function () {
    var client = new twilio.RestClient('AC123', '123');

    beforeEach(function () {
        spyOn(client, 'request');
    });

    it('creates a new signing key, configured with a friendly name', function () {
        client.signingKeys.create({
            friendlyName: 'Testing Key'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/SigningKeys',
            method: 'POST',
            form: {
                FriendlyName: 'Testing Key'
            }
        }, undefined);
    });

    it('gets information about a signing key with a specific sid', function () {
        client.signingKeys('SK123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/SigningKeys/SK123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('updates details about an existing singing key', function () {
        client.signingKeys('SK123').update({
            friendlyName: 'New name'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/SigningKeys/SK123',
            method: 'POST',
            form: {
                FriendlyName: 'New name'
            }
        }, undefined);
    });

    it('deletes a signing key', function () {
        client.signingKeys('SK123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/SigningKeys/SK123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });
});

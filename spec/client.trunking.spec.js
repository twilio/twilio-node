var twilio = require('../index');

describe('The Twilio Trunking Client', function() {
    var client = new twilio.TrunkingClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    // Trunks
    it('gets a list of trunks', function() {
        client.trunks.list();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('create a trunk', function() {
        client.trunks.create({
            FriendlyName: 'friendly'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks',
            method: 'POST',
            form: {
                FriendlyName: 'friendly'
            }
        }, undefined);
    });

    it('get a single trunk', function() {
        client.trunks('TR123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('update a trunk', function() {
        client.trunks('TR123').update({
            FriendlyName: 'updated'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123',
            method: 'POST',
            form: {
                FriendlyName: 'updated'
            }
        }, undefined);
    });

    it('delete a trunk', function() {
        client.trunks('TR123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

    // Origination Urls
    it('get a list of origination urls', function() {
        client.trunks('TR123').originationUrls.list();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/OriginationUrls',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('create an origination url', function() {
        client.trunks('TR123').originationUrls.create({
            Weight: 1,
            Priority: 1,
            Enabled: true,
            FriendlyName: 'friendly',
            SipUrl: 'sip://sip.trunk'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/OriginationUrls',
            method: 'POST',
            form: {
                Weight: 1,
                Priority: 1,
                Enabled: true,
                FriendlyName: 'friendly',
                SipUrl: 'sip://sip.trunk'     
            }
        }, undefined);
    });

    it('get an origination url', function() {
        client.trunks('TR123').originationUrls('OU123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/OriginationUrls/OU123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('update an origination url', function() {
        client.trunks('TR123').originationUrls('OU123').update({
            FriendlyName: 'updated'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/OriginationUrls/OU123',
            method: 'POST',
            form: {
                FriendlyName: 'updated'
            }
        }, undefined);
    });

    it('delete an origination url', function() {
        client.trunks('TR123').originationUrls('OU123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/OriginationUrls/OU123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

    // IP Access Control Lists
    it('get a list of ip acls', function() {
        client.trunks('TR123').ipAccessControlLists.list();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/IpAccessControlLists',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('create a mapping', function() {
        client.trunks('TR123').ipAccessControlLists.create({
            IpAccessControlListSid: 'IP123'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/IpAccessControlLists',
            method: 'POST',
            form: {
                IpAccessControlListSid: 'IP123'
            }
        }, undefined);
    });

    it('get a ip acl', function() {
        client.trunks('TR123').ipAccessControlLists('IP123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/IpAccessControlLists/IP123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('delete a mapping', function() {
        client.trunks('TR123').ipAccessControlLists('IP123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/IpAccessControlLists/IP123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

    // Credential Lists
    it('get a list of credential lists', function() {
        client.trunks('TR123').credentialLists.list();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/CredentialLists',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('create a mapping', function() {
        client.trunks('TR123').credentialLists.create({
            CredentialListSid: 'CL123'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/CredentialLists',
            method: 'POST',
            form: {
                CredentialListSid: 'CL123'
            }
        }, undefined);
    });

    it('get a credential list', function() {
        client.trunks('TR123').credentialLists('CL123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/CredentialLists/CL123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('delete a mapping', function() {
        client.trunks('TR123').credentialLists('CL123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/CredentialLists/CL123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

    // Phone Numbers
    it('get a list of phone numbers', function() {
        client.trunks('TR123').phoneNumbers.list();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/PhoneNumbers',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('create a mapping', function() {
        client.trunks('TR123').phoneNumbers.create({
            PhoneNumberSid: 'PN123'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/PhoneNumbers',
            method: 'POST',
            form: {
                PhoneNumberSid: 'PN123'
            }
        }, undefined);
    });

    it('get a phone number', function() {
        client.trunks('TR123').phoneNumbers('PN123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/PhoneNumbers/PN123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('delete a mapping', function() {
        client.trunks('TR123').phoneNumbers('PN123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Trunks/TR123/PhoneNumbers/PN123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

});
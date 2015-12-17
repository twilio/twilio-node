var twilio = require('../index');

describe('The Twilio IP Messaging client', function() {

    var client = new twilio.IpMessagingClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    // Services
    it('get a list of Services', function() {
        client.services.list();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('create a Service', function() {
        client.services.create({
            FriendlyName: 'service'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services',
            method: 'POST',
            form: {
                FriendlyName: 'service'
            }
        }, undefined);
    });

    it('get a Service', function() {
        client.services('IS123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('update a Service', function() {
        client.services('IS123').update({
            FriendlyName: 'updated'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123',
            method: 'POST',
            form: {
                FriendlyName: 'updated'
            }
        }, undefined);
    });

    it('delete a Service', function() {
        client.services('IS123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

    // Channels
    it('get a list of Channels', function() {
        client.services('IS123').channels.list();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Channels',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('create a Channel', function() {
        client.services('IS123').channels.create({
            FriendlyName: 'channel'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Channels',
            method: 'POST',
            form: {
                FriendlyName: 'channel'
            }
        }, undefined);
    });

    it('get a Channel', function() {
        client.services('IS123').channels('CH123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Channels/CH123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('update a Channel', function() {
        client.services('IS123').channels('CH123').update({
            FriendlyName: 'updated'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Channels/CH123',
            method: 'POST',
            form: {
                FriendlyName: 'updated'
            }
        }, undefined);
    });

    it('delete a Channel', function() {
        client.services('IS123').channels('CH123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Channels/CH123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

    // Messages
    it('get a list of Messages', function() {
        client.services('IS123').channels('CH123').messages.list();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Channels/CH123/Messages',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('create a Message', function() {
        client.services('IS123').channels('CH123').messages.create({
            Body: 'message'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Channels/CH123/Messages',
            method: 'POST',
            form: {
                Body: 'message'
            }
        }, undefined);
    });

    it('get a Message', function() {
        client.services('IS123').channels('CH123').messages('IM123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Channels/CH123/Messages/IM123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    // Members
    it('get a list of Members', function() {
        client.services('IS123').channels('CH123').members.list();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Channels/CH123/Members',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('create a Member', function() {
        client.services('IS123').channels('CH123').members.create({
            Identity: 'carl@twilio.com'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Channels/CH123/Members',
            method: 'POST',
            form: {
                Identity: 'carl@twilio.com'
            }
        }, undefined);
    });

    it('get a Member', function() {
        client.services('IS123').channels('CH123').members('MB123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Channels/CH123/Members/MB123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('delete a Member', function() {
        client.services('IS123').channels('CH123').members('MB123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Channels/CH123/Members/MB123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

    // Users
    it('get a list of Users', function() {
        client.services('IS123').users.list();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Users',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('create a User', function() {
        client.services('IS123').users.create({
            Identity: 'carl@twilio.com'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Users',
            method: 'POST',
            form: {
                Identity: 'carl@twilio.com'
            }
        }, undefined);
    });

    it('get a User', function() {
        client.services('IS123').users('US123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Users/US123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('update a User', function() {
        client.services('IS123').users('US123').update({
            Identity: 'carl@twilio.com'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Users/US123',
            method: 'POST',
            form: {
                Identity: 'carl@twilio.com'
            }
        }, undefined);
    });

    it('delete a User', function() {
        client.services('IS123').users('US123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Users/US123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

    // Roles
    it('get a list of Roles', function() {
        client.services('IS123').roles.list();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Roles',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('get a Role', function() {
        client.services('IS123').roles('RL123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Services/IS123/Roles/RL123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    // Credentials
    it('get a list of Credentials', function() {
        client.credentials.list();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Credentials',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('create a Credential', function() {
        client.credentials.create({
            Type: 'apn'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Credentials',
            method: 'POST',
            form: {
                Type: 'apn'
            }
        }, undefined);
    });

    it('get a Credential', function() {
        client.credentials('CR123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Credentials/CR123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('update a Credential', function() {
        client.credentials('CR123').update({
            Type: 'apn'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Credentials/CR123',
            method: 'POST',
            form: {
                Type: 'apn'
            }
        }, undefined);
    });

    it('delete a Credential', function() {
        client.credentials('CR123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Credentials/CR123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });
});
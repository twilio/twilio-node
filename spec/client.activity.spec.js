var twilio = require('../index');

describe('The Twilio TaskRouter Activity resource', function () {
    var client = new twilio.TaskRouterClient('AC123', '123', 'WS123');

    beforeEach(function () {
        spyOn(client, 'request');
    });

    it('creates activity', function () {
        client.workspaces('WS123').activities.create({
            friendlyName: 'Test Activity',
            available: true
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Activities',
            method: 'POST',
            form: {
                FriendlyName: 'Test Activity',
                Available: true
            }
        }, undefined);
    });

    it('deletes activity', function () {
        client.workspaces('WS123').activities('WA123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Activities/WA123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

    it('gets activity', function () {
        client.workspaces('WS123').activities('WA123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Activities/WA123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('lists activities', function () {
        client.workspaces('WS123').activities.list({
            friendlyName: 'Test Activity'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Activities',
            method: 'GET',
            qs: {
                FriendlyName: 'Test Activity'
            }
        }, undefined);
    });

    it('updates activity', function () {
        client.workspaces('WS123').activities('WA123').update({
            friendlyName: 'Test Activity'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Activities/WA123',
            method: 'POST',
            form: {
                FriendlyName: 'Test Activity'
            }
        }, undefined);
    });
});

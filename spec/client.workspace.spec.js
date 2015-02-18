var twilio = require('../index');

describe('The Twilio TaskRouter Workspace resource', function () {
    var client = new twilio.TaskRouterClient('AC123', '123', 'WS123');

    beforeEach(function () {
        spyOn(client, 'request');
    });

    it('creates workspace', function () {
        client.workspaces.create({
            friendlyName: 'Test Workspace'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces',
            method: 'POST',
            form: {
                FriendlyName: 'Test Workspace'
            }
        }, undefined);
    });

    it('deletes workspace', function () {
        client.workspaces('WS123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

    it('gets workspace statistics', function() {
        client.workspaces('WS123').statistics.get({
            minute: 20
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Statistics',
            method: 'GET',
            qs: {
                Minute: 20
            }
        }, undefined);
    });

    it('gets workspace', function () {
        client.workspaces('WS123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('lists workspaces', function () {
        client.workspaces.list({
            friendlyName: 'Test Workspace'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces',
            method: 'GET',
            qs: {
                FriendlyName: 'Test Workspace'
            }
        }, undefined);
    });

    it('updates workspace', function () {
        client.workspaces('WS123').update({
            friendlyName: 'Test Workspace'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123',
            method: 'POST',
            form: {
                FriendlyName: 'Test Workspace'
            }
        }, undefined);
    });
});

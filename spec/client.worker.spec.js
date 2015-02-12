var twilio = require('../index');

describe('The Twilio TaskRouter Worker resource', function () {
    var client = new twilio.TaskRouterClient('AC123', '123', 'WS123');

    beforeEach(function () {
        spyOn(client, 'request');
    });

    it('creates worker', function () {
        client.workspaces('WS123').workers.create({
            friendlyName: 'Test Worker'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Workers',
            method: 'POST',
            form: {
                FriendlyName: 'Test Worker'
            }
        }, undefined);
    });

    it('deletes worker', function () {
        client.workspaces('WS123').workers('WR123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Workers/WR123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

    it('gets worker', function () {
        client.workspaces('WS123').workers('WR123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Workers/WR123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('gets worker statistics', function () {
        client.workspaces('WS123').workers('WR123').statistics.get({
            minute: 20
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Workers/WR123/Statistics',
            method: 'GET',
            qs: {
                Minute: 20
            }
        }, undefined);
    });

    it('gets workers statistics', function () {
        client.workspaces('WS123').workers.statistics.list({
            minute: 20
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Workers/Statistics',
            method: 'GET',
            qs: {
                Minute: 20
            }
        }, undefined);
    });

    it('lists workers', function () {
        client.workspaces('WS123').workers.list({
            friendlyName: 'Test Worker'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Workers',
            method: 'GET',
            qs: {
                FriendlyName: 'Test Worker'
            }
        }, undefined);
    });

    it('updates worker', function () {
        client.workspaces('WS123').workers('WR123').update({
            friendlyName: 'Test Worker'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Workers/WR123',
            method: 'POST',
            form: {
                FriendlyName: 'Test Worker'
            }
        }, undefined);
    });
});

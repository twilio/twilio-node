var twilio = require('../index');

describe('The Twilio TaskRouter Task Queue resource', function () {
    var client = new twilio.TaskRouterClient('AC123', '123', 'WS123');

    beforeEach(function () {
        spyOn(client, 'request');
    });

    it('creates task queue', function () {
        client.workspaces('WS123').taskQueues.create({
            friendlyName: 'Test Task Queue',
            assignmentActivitySid: 'WA123',
            reservationActivitySid: 'WA123'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/TaskQueues',
            method: 'POST',
            form: {
                FriendlyName: 'Test Task Queue',
                AssignmentActivitySid: 'WA123',
                ReservationActivitySid: 'WA123'
            }
        }, undefined);
    });

    it('deletes task queue', function () {
        client.workspaces('WS123').taskQueues('WQ123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/TaskQueues/WQ123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

    it('gets task queue', function () {
        client.workspaces('WS123').taskQueues('WQ123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/TaskQueues/WQ123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('gets task queue statistics', function () {
        client.workspaces('WS123').taskQueues('WQ123').statistics.get({
            minute: 20
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/TaskQueues/WQ123/Statistics',
            method: 'GET',
            qs: {
                Minute: 20
            }
        }, undefined);
    });

    it('gets task queues statistics', function () {
        client.workspaces('WS123').taskQueues.statistics.list({
            minute: 20
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/TaskQueues/Statistics',
            method: 'GET',
            qs: {
                Minute: 20
            }
        }, undefined);
    });

    it('lists taskQueues', function () {
        client.workspaces('WS123').taskQueues.list({
            friendlyName: 'Test Task Queue'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/TaskQueues',
            method: 'GET',
            qs: {
                FriendlyName: 'Test Task Queue'
            }
        }, undefined);
    });

    it('updates task queue', function () {
        client.workspaces('WS123').taskQueues('WQ123').update({
            friendlyName: 'Test Task Queue'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/TaskQueues/WQ123',
            method: 'POST',
            form: {
                FriendlyName: 'Test Task Queue'
            }
        }, undefined);
    });
});

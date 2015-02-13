var twilio = require('../index');

describe('The Twilio TaskRouter Workflow resource', function () {
    var client = new twilio.TaskRouterClient('AC123', '123', 'WS123');

    beforeEach(function () {
        spyOn(client, 'request');
    });

    it('creates workflow', function () {
        client.workspaces('WS123').workflows.create({
            friendlyName: 'Test Workflow',
            configuration: 'configuration',
            assignmentCallbackUrl: 'http://www.example.com'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Workflows',
            method: 'POST',
            form: {
                FriendlyName: 'Test Workflow',
                Configuration: 'configuration',
                AssignmentCallbackUrl: 'http://www.example.com'
            }
        }, undefined);
    });

    it('deletes workflow', function () {
        client.workspaces('WS123').workflows('WF123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Workflows/WF123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

    it('gets workflow statistics', function() {
        client.workspaces('WS123').workflows('WF123').statistics.get({
            minute: 20
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Workflows/WF123/Statistics',
            method: 'GET',
            qs: {
                Minute: 20
            }
        }, undefined);
    });

    it('gets workflow', function () {
        client.workspaces('WS123').workflows('WF123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Workflows/WF123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('lists workflows', function () {
        client.workspaces('WS123').workflows.list({
            friendlyName: 'Test Workflow'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Workflows',
            method: 'GET',
            qs: {
                FriendlyName: 'Test Workflow'
            }
        }, undefined);
    });

    it('updates workflow', function () {
        client.workspaces('WS123').workflows('WF123').update({
            friendlyName: 'Test Workflow',
            configuration: 'configuration',
            assignmentCallbackUrl: 'http://www.example.com'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Workflows/WF123',
            method: 'POST',
            form: {
                FriendlyName: 'Test Workflow',
                Configuration: 'configuration',
                AssignmentCallbackUrl: 'http://www.example.com'
            }
        }, undefined);
    });
});

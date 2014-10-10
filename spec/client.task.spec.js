var twilio = require('../index');

describe('The Twilio WDS Task resource', function () {
    var client = new twilio.WdsClient('AC123', '123', 'WS123');

    beforeEach(function () {
        spyOn(client, 'request');
    });

    it('creates task', function () {
        client.workspaces('WS123').tasks.create({
            attributes: 'Test Attribute',
            workflowSid: 'WF123'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Workspaces/WS123/Tasks',
            method: 'POST',
            form: {
                Attributes: 'Test Attribute',
                WorkflowSid: 'WF123'
            }
        }, undefined);
    });

    it('deletes task', function () {
        client.workspaces('WS123').tasks('WT123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Workspaces/WS123/Tasks/WT123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

    it('gets task', function () {
        client.workspaces('WS123').tasks('WT123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Workspaces/WS123/Tasks/WT123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('lists tasks', function () {
        client.workspaces('WS123').tasks.list({
            workflowSid: 'WF123'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Workspaces/WS123/Tasks',
            method: 'GET',
            qs: {
                WorkflowSid: 'WF123'
            }
        }, undefined);
    });

    it('updates task', function () {
        client.workspaces('WS123').tasks('WT123').update({
            attributes: 'Test Attribute'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Workspaces/WS123/Tasks/WT123',
            method: 'POST',
            form: {
                Attributes: 'Test Attribute'
            }
        }, undefined);
    });
});

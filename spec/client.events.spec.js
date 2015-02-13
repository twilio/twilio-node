var twilio = require('../index');

describe('The Twilio TaskRouter Event resource', function () {
    var client = new twilio.TaskRouterClient('AC123', '123', 'WS123');

    beforeEach(function () {
        spyOn(client, 'request');
    });

    it('gets event', function () {
        client.workspaces('WS123').events('EV123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Events/EV123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('lists workers', function () {
        client.workspaces('WS123').events.list({
            minutes: 15
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Events',
            method: 'GET',
            qs: {
                Minutes: 15
            }
        }, undefined);
    });
});

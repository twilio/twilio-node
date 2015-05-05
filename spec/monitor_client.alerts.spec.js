var twilio = require('../index');

describe('The Twilio Monitor alert resource', function () {
    var client = new twilio.MonitorClient('AC123', '123');

    beforeEach(function () {
        spyOn(client, 'request');
    });

    it('gets alert', function () {
        client.alerts('NO123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Alerts/NO123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('lists alerts', function () {
        client.alerts.list({
            actorSid: 'ACaaa'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Alerts',
            method: 'GET',
            qs: {
                ActorSid: 'ACaaa'
            }
        }, undefined);
    });
});

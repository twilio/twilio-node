var twilio = require('../index');

describe('The Twilio Monitor Event resource', function () {
    var client = new twilio.MonitorClient('AC123', '123');

    beforeEach(function () {
        spyOn(client, 'request');
    });

    it('gets event', function () {
        client.events('AE123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Events/AE123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('lists events', function () {
        client.events.list({
            actorSid: 'ACaaa'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Events',
            method: 'GET',
            qs: {
                ActorSid: 'ACaaa'
            }
        }, undefined);
    });
});

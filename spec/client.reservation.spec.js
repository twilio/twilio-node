var twilio = require('../index');

describe('The Twilio TaskRouter Reservation resource', function () {
    var client = new twilio.TaskRouterClient('AC123', '123', 'WS123');

    beforeEach(function () {
        spyOn(client, 'request');
    });

    it('gets reservation', function () {
        client.workspaces('WS123').tasks('WT123').reservations('WR123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Tasks/WT123/Reservations/WR123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('lists reservations', function () {
        client.workspaces('WS123').tasks('WT123').reservations.list({
            status: 'pending'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Tasks/WT123/Reservations',
            method: 'GET',
            qs: {
                Status: 'pending'
            }
        }, undefined);
    });

    it('updates reservation', function () {
        client.workspaces('WS123').tasks('WT123').reservations('WR123').update({
            reservationStatus: 'pending'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Workspaces/WS123/Tasks/WT123/Reservations/WR123',
            method: 'POST',
            form: {
                ReservationStatus: 'pending'
            }
        }, undefined);
    });
});

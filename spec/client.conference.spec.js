var twilio = require('../index');

describe('The Twilio REST Conference resource', function () {
    var client = new twilio.RestClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('lists conference calls', function() {
        client.conferences.list({
            friendlyName:'testConference'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Conferences',
            method:'GET',
            qs:{
                FriendlyName:'testConference'
            }
        }, undefined);
    });

    it('gets conference participants', function() {
        client.conferences('CF123').participants.list();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Conferences/CF123/Participants',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('gets conferences with params', function() {
        client.conferences.list({
            'DateCreated>':'2013-07-01'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Conferences',
            method:'GET',
            qs:{
                'DateCreated>':'2013-07-01'
            }
        }, undefined);
    });
});
var twilio = require('../index');

describe('The Twilio REST Connect Apps resource', function () {
    var client = new twilio.RestClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('gets a list of all connect apps', function() {
        client.connectApps.list();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/ConnectApps',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('updates information about a connect app by SID', function() {
        client.connectApps('AP123').update({
            friendlyName:'frank'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/ConnectApps/AP123',
            method:'POST',
            form:{
                FriendlyName:'frank'
            }
        }, undefined);
    });

    it('gets details about a specific account by sid', function() {
        client.accounts('AC456').connectApps('AP123').get();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC456/ConnectApps/AP123',
            method:'GET',
            qs:{}
        }, undefined);
    });

});
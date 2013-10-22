var twilio = require('../index');

describe('The Twilio REST Client Applications resource', function () {
    var client = new twilio.RestClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    var app = {
        FriendlyName:'Testing 123',
        VoiceUrl:'http://awesome.com/voice',
        SmsUrl:'http://awesome.com/sms'
    };

    it('creates a new application, configured with voice and SMS urls', function() {
        client.applications.create(app);
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Applications',
            method:'POST',
            form:app
        }, undefined);
    });

    it('gets information about an app with a specific sid', function() {
        client.applications('AP123').get();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Applications/AP123',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('lists all apps with the friendly name', function() {
        client.applications.list({
            friendlyName:app.FriendlyName
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Applications',
            method:'GET',
            qs:{
                FriendlyName:app.FriendlyName
            }
        }, undefined);
    });

    it('updates details about an existing app', function() {
        client.applications('AP123').update({
            voiceUrl:'http://lame.com/lameo'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Applications/AP123',
            method:'POST',
            form:{
                VoiceUrl:'http://lame.com/lameo'
            }
        }, undefined);
    });

    it('deletes a created app', function() {
        client.applications('AP123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Applications/AP123',
            method:'DELETE',
            form:{}
        }, undefined);
    });

});

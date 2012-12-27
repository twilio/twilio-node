var config = require('../config'),
    twilio = require('../index');

describe('The Twilio REST Client Applications resource', function () {
    //create a client with a valid account SID and authToken for live testing
    var client = new twilio.RestClient(config.accountSid, config.authToken);

    var instanceSid, app = {
        FriendlyName:'Testing '+new Date().getTime(),
        VoiceUrl:'http://awesome.com/voice',
        SmsUrl:'http://awesome.com/sms'
    };

    it('creates a new application, configured with voice and SMS urls', function(done) {
        client.applications.create(app, function(err, data) {
            expect(data.voice_url).toBe(app.VoiceUrl);
            instanceSid = data.sid;
            done();
        });
    });

    it('gets information about an app with a specific sid', function(done) {
        client.applications(instanceSid).get(function(err,data) {
            expect(data.sid).toBe(instanceSid);
            done();
        });
    });

    it('lists all apps with the friendly name we created (should be one)', function(done) {
        client.applications.list({
            friendlyName:app.FriendlyName
        }, function(err, data) {
            expect(data.applications.length).toBe(1);
            expect(data.applications[0].sid).toBe(instanceSid);
            done();
        });
    });

    it('updates details about an existing app', function(done) {
        client.applications(instanceSid).update({
            voiceUrl:'http://lame.com/lameo'
        }, function(err, data) {
            expect(data.voice_url).toBe('http://lame.com/lameo');
            done();
        });
    });

    it('deletes a created app', function(done) {
        client.applications(instanceSid).delete(function(err, data) {
            expect(err).toBeFalsy();
            if (!err) {
                client.accounts.applications(instanceSid).get(function(err2, data2, httpResponse) {
                    expect(err2).toBeTruthy();
                    expect(err2.status).toBe(404);
                    done();
                });
            }
            else {
                done();
            }
        });
    });

});
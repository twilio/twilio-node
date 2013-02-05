var config = require('../config'),
    twilio = require('../index');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

describe('The Twilio REST Conference resource', function () {
    //create a client with a valid account SID and authToken for live testing
    var client = new twilio.RestClient(config.accountSid, config.authToken);

    var instanceSid;

    it('creates and administers a conference call', function(done) {
        client.makeCall({
            to:'2012126633',
            from:config.from,
            url:'http://twiml.aws.af.cm/conferences/create'
        }, function() {
            client.makeCall({
                to:config.to,
                from:config.from,
                url:'http://twiml.aws.af.cm/conferences/create'
            }, function(err, data) {

                if (!err) {
                    function checkStatus() {
                        //get a list of all active conferences
                        client.conferences.list({
                            friendlyName:'testConference'
                        }, function(conferenceError, conferenceData) {
                            if (conferenceData.conferences.length > 0) {
                                var conf = conferenceData.conferences[0];
                                expect(conf.friendly_name).toBe('testConference');
                                done();
                            }
                            else {
                                setTimeout(checkStatus, 250);
                            }
                        });
                    }

                    checkStatus();
                }
                else {
                    expect('call to be successfully completed').toBeFalse();
                    done();
                }
            });
        });
    });
});
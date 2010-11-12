var Client = require('../lib/twilio').Client,
    Creds = require('./config').Credentials;

var t = new Client(Creds.sid, Creds.authToken, Creds.hostname),
    p = t.getIncomingPhoneNumber('+18888238895');

p.setup(function() {
    p.on('incomingCall', function(reqParams, resp) {
        console.log('Got call');
    });
});

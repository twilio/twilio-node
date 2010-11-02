var Client = require('../lib').Client,
    credentials = require('./config').Credentials;

function debug(msg) {
    console.log(msg + '\n');
}

function ok(msg) {
    debug('OK: ' + msg);
}

function error(msg) {
    debug('!: ' + msg);
}

function runTest(func, 

var c = new Client(credentials.sid, credentials.authToken, {hostname: credentials.hostname});

//c.getAccountInfo(r('Get account credentials'));
c.getSMSList(null, r('Get message list'));

/*
c.sendSMS({
    From: credentials.outgoingId,
    To: credentials.testToNumber,
    Body: 'SMS Test! Woo!'
}, r('Send SMS'));
*/

// Get a new phone number object
var phone = c.getPhoneNumber('+18674451795');

// Update the phone number
phone.update({FriendlyName: 'Yellowknife Number'});

// Handle incoming calls
phone.on('IncomingCall', function(req, res) {
});

phone.on('IncomingSms', function(req, res) {

});

phone.sendSms(to, body);
phone.makeCall(from, to);


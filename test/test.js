var Client = require('../lib').Client,
    credentials = require('./config').Credentials;

function debug(msg) {
    console.log(msg + '\n');
}
var c = new Client(credentials.sid, credentials.authToken);

function r(type) {
    return function(response) {
        debug(type + ': ' + JSON.stringify(response));
    };
}

//c.getAccountInfo(r('Get account credentials'));
c.getSMSList(null, r('Get message list'));

/*
c.sendSMS({
    From: credentials.outgoingId,
    To: credentials.testToNumber,
    Body: 'SMS Test! Woo!'
}, r('Send SMS'));
*/

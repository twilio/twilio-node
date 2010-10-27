var Client = require('../lib').Client,
    credentials = require('./config').Credentials;

function debug(msg) {
    console.log(msg + '\n');
}
var c = new Client(credentials.sid, credentials.authToken);

c.getAccountInfo(function(response) {
    debug('Successfully got account credentials');
    debug('Dump: ' + JSON.stringify(response));
});

c.setAccountInfo({FriendlyName: 'Foobar!'}, function(response) {
    debug('Successfully set account FriendlyName');
    debug('Response dump: ' + JSON.stringify(response));
});

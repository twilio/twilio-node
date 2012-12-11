/* 
 NOTE: For now, these are for demo purposes, they won't actually run as written.
 Working test are found in the ../spec directory
 */

var twilio = require('../lib'),
    config = require('../config');

//create a REST client
var client = new twilio.RestClient(config.accountSid, config.authToken);

//Send an SMS message from a Twilio number
client.sms({
    To:'+16512225555',
    From:'+16123337777',
    Body:'Texty text text!'
}, function (err, data) {
    if (!err) {
        console.log('Success!');
        console.log(data);
    }
});

//Call a number
client.call({
    To:'+16511233211',
    From:'+14502229999',
    Url:'http://myhost.com/generate_twiml'
}, function (err, data) {
    if (!err) {
        console.log('Success!');
        console.log(data);
    }
});
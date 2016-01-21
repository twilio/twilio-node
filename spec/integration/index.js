var _ = require('lodash');
var Twilio = require('../../lib').Twilio;
var Holodeck = require('./holodeck');

var accountSid = 'AC' + _.join(_.fill(new Array(32), 'a'), '');
var authToken = 'AUTHTOKEN';

var holodeck = new Holodeck();
var client = new Twilio(accountSid, authToken, holodeck);

module.exports = {
  holodeck: holodeck,
  client: client
};

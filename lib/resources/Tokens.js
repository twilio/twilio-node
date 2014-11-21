/**
 @module resources/Tokens
 The Twilio "Tokens" Resource.
 */
var generate = require('./generate');

module.exports = function (client, accountSid) {
    var baseResourceUrl = '/Accounts/' + accountSid + '/Tokens';
    Tokens = {};

    Tokens.create = generate(client, 'POST', baseResourceUrl);

    return Tokens;
}

'use strict';

var Holodeck = require('../../integration/holodeck');
var Response = require('../../../lib/http/response');
var Twilio = require('../../../lib');

var client;
var holodeck;

describe('IncomingPhoneNumber', function () {
  /* Before Hooks */
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });

  /* Tests */
  it('should call done in the opts object when done',
    function (done) {
      var body = {
        'end': 0,
        'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers.json?FriendlyName=friendly_name&Beta=true&PhoneNumber=%2B19876543210&PageSize=50&Page=0',
        'incoming_phone_numbers': [{}],
        'next_page_uri': null,
        'page': 0,
        'page_size': 50,
        'previous_page_uri': null,
        'start': 0,
        'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers.json?FriendlyName=friendly_name&Beta=true&PhoneNumber=%2B19876543210&PageSize=50&Page=0'
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
        .incomingPhoneNumbers.each({ done }, () => null);
    }
  );
  it('should call done when limit in the opts object is reached',
    function (done) {
      var body = {
        'end': 0,
        'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers.json?FriendlyName=friendly_name&Beta=true&PhoneNumber=%2B19876543210&PageSize=1&Page=0',
        'incoming_phone_numbers': [{}],
        'next_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers.json?FriendlyName=friendly_name&Beta=true&PhoneNumber=%2B19876543210&PageSize=1&Page=1',
        'page': 0,
        'page_size': 1,
        'previous_page_uri': null,
        'start': 0,
        'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers.json?FriendlyName=friendly_name&Beta=true&PhoneNumber=%2B19876543210&PageSize=1&Page=0'
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
        .incomingPhoneNumbers.each({ limit: 1, done }, () => null);
    }
  );
});

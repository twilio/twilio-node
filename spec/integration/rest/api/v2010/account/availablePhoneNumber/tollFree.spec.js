'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../../holodeck');
var Request = require('../../../../../../../lib/http/Request');
var Response = require('../../../../../../../lib/http/Response');
var Twilio = require('../../../../../../../lib').Twilio;


var client;
var holodeck;

describe('TollFree', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('AC' + _.join(_.fill(new Array(32), 'a'), ''), 'AUTHTOKEN', holodeck);
  });
  it('should generate valid list request', function() {
    holodeck.mock(new Response(500, ''));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .availablePhoneNumbers('US')
                                  .tollFree.list();
    promise = promise.then(function() {
      throw new Error('failed');
    }, function(error) {
      expect(error.constructor).toBe(Error.prototype.constructor);
    });

    promise.done();

    var solution = {
      accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      countryCode: 'US'
    };
    var url = _.template(
      'https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/AvailablePhoneNumbers/<%= countryCode %>/TollFree.json'
    )(solution);

    holodeck.assertHasRequest(new Request({
      method: 'GET',
      url: url
    }));
  });
  it('should generate valid read_full response', function() {
    var body = JSON.stringify({
        'available_phone_numbers': [
            {
                'address_requirements': 'none',
                'beta': false,
                'capabilities': {
                    'MMS': true,
                    'SMS': true,
                    'voice': true
                },
                'friendly_name': '(800) 100-0052',
                'iso_country': 'US',
                'lata': null,
                'latitude': null,
                'longitude': null,
                'phone_number': '+18001000052',
                'postal_code': null,
                'rate_center': null,
                'region': null
            }
        ],
        'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AvailablePhoneNumbers/US/TollFree.json?PageSize=1'
    });
    holodeck.mock(new Response(200, body));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .availablePhoneNumbers('US')
                                  .tollFree.list();
    promise = promise.then(function(response) {
      expect(response).toBeDefined();
    }, function() {
      throw new Error('failed');
    });

    promise.done();
  });
  it('should generate valid read_empty response', function() {
    var body = JSON.stringify({
        'available_phone_numbers': [],
        'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AvailablePhoneNumbers/US/TollFree.json?PageSize=1'
    });
    holodeck.mock(new Response(200, body));

    var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                  .availablePhoneNumbers('US')
                                  .tollFree.list();
    promise = promise.then(function(response) {
      expect(response).toBeDefined();
    }, function() {
      throw new Error('failed');
    });

    promise.done();
  });
});


'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('Number', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.pricing.v1.voice
                                     .numbers('+987654321').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        number: '+987654321'
      };
      var url = _.template('https://pricing.twilio.com/v1/Voice/Numbers/<%= number %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'country': 'United States',
          'inbound_call_price': {
              'base_price': null,
              'current_price': null,
              'number_type': null
          },
          'iso_country': 'US',
          'number': '+987654321',
          'outbound_call_price': {
              'base_price': '0.015',
              'current_price': '0.015'
          },
          'price_unit': 'USD',
          'url': 'https://pricing.twilio.com/v1/Voice/Numbers/+987654321'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v1.voice
                                     .numbers('+987654321').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});


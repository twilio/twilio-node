'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var RestException = require('../../../../../../lib/base/RestException');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('Country', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.pricing.v1.messaging
                                     .countries.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://pricing.twilio.com/v1/Messaging/Countries';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'countries': [],
          'meta': {
              'first_page_url': 'https://pricing.twilio.com/v1/Messaging/Countries?Page=0&PageSize=50',
              'key': 'countries',
              'next_page_url': null,
              'page': 0,
              'page_size': 0,
              'previous_page_url': null,
              'url': 'https://pricing.twilio.com/v1/Messaging/Countries'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v1.messaging
                                     .countries.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'countries': [
              {
                  'country': 'country',
                  'iso_country': 'US',
                  'url': 'http://www.example.com'
              }
          ],
          'meta': {
              'first_page_url': 'https://pricing.twilio.com/v1/Messaging/Countries?Page=0&PageSize=50',
              'key': 'countries',
              'next_page_url': null,
              'page': 0,
              'page_size': 1,
              'previous_page_url': null,
              'url': 'https://pricing.twilio.com/v1/Messaging/Countries'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v1.messaging
                                     .countries.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.pricing.v1.messaging
                                     .countries('US').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        isoCountry: 'US'
      };
      var url = _.template('https://pricing.twilio.com/v1/Messaging/Countries/<%= isoCountry %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'country': 'country',
          'inbound_sms_prices': [
              {
                  'base_price': 0.05,
                  'current_price': 0.05,
                  'number_type': 'mobile'
              }
          ],
          'iso_country': 'US',
          'outbound_sms_prices': [
              {
                  'carrier': 'att',
                  'mcc': 'foo',
                  'mnc': 'bar',
                  'prices': [
                      {
                          'base_price': 0.05,
                          'current_price': 0.05,
                          'number_type': 'mobile'
                      }
                  ]
              }
          ],
          'price_unit': 'USD',
          'url': 'http://www.example.com'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v1.messaging
                                     .countries('US').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});


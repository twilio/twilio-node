'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
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
      holodeck.mock(new Response(500, ''));

      var promise = client.pricing.v1.phoneNumbers
                                     .countries.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var url = 'https://pricing.twilio.com/v1/PhoneNumbers/Countries';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'countries': [
              {
                  'country': 'Austria',
                  'iso_country': 'AT',
                  'url': 'https://pricing.twilio.com/v1/PhoneNumbers/Countries/AT'
              }
          ],
          'meta': {
              'first_page_url': 'https://pricing.twilio.com/v1/PhoneNumbers/Countries?PageSize=1&Page=0',
              'key': 'countries',
              'next_page_url': null,
              'page': 0,
              'page_size': 1,
              'previous_page_url': null,
              'url': 'https://pricing.twilio.com/v1/PhoneNumbers/Countries?PageSize=1&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v1.phoneNumbers
                                     .countries.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'countries': [],
          'meta': {
              'first_page_url': 'https://pricing.twilio.com/v1/PhoneNumbers/Countries?PageSize=1&Page=0',
              'key': 'countries',
              'next_page_url': null,
              'page': 0,
              'page_size': 1,
              'previous_page_url': null,
              'url': 'https://pricing.twilio.com/v1/PhoneNumbers/Countries?PageSize=1&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v1.phoneNumbers
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
      holodeck.mock(new Response(500, ''));

      var promise = client.pricing.v1.phoneNumbers
                                     .countries('US').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        isoCountry: 'US'
      };
      var url = _.template('https://pricing.twilio.com/v1/PhoneNumbers/Countries/<%= isoCountry %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'country': 'Estonia',
          'iso_country': 'EE',
          'phone_number_prices': [
              {
                  'base_price': 3.0,
                  'current_price': 3.0,
                  'type': 'mobile'
              },
              {
                  'base_price': 1.0,
                  'current_price': 1.0,
                  'type': 'national'
              }
          ],
          'price_unit': 'usd',
          'url': 'https://pricing.twilio.com/v1/PhoneNumbers/Countries/US'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v1.phoneNumbers
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


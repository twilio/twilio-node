'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('RatePlan', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://preview.twilio.com/wireless/RatePlans?PageSize=50&Page=0',
              'key': 'rate_plans',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/wireless/RatePlans?PageSize=50&Page=0'
          },
          'rate_plans': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'data_enabled': true,
                  'data_limit': 1000,
                  'data_metering': 'pooled',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'friendly_name': 'friendly_name',
                  'messaging_enabled': true,
                  'voice_enabled': true,
                  'national_roaming_enabled': true,
                  'international_roaming': [
                      'data',
                      'messaging',
                      'voice'
                  ],
                  'sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://preview.twilio.com/wireless/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.preview.wireless.ratePlans.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://preview.twilio.com/wireless/RatePlans?PageSize=50&Page=0',
              'key': 'rate_plans',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/wireless/RatePlans?PageSize=50&Page=0'
          },
          'rate_plans': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'data_enabled': true,
                  'data_limit': 1000,
                  'data_metering': 'pooled',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'friendly_name': 'friendly_name',
                  'messaging_enabled': true,
                  'voice_enabled': true,
                  'national_roaming_enabled': true,
                  'international_roaming': [
                      'data',
                      'messaging',
                      'voice'
                  ],
                  'sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://preview.twilio.com/wireless/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.preview.wireless.ratePlans.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://preview.twilio.com/wireless/RatePlans',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://preview.twilio.com/wireless/RatePlans?PageSize=50&Page=0',
              'key': 'rate_plans',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/wireless/RatePlans?PageSize=50&Page=0'
          },
          'rate_plans': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'data_enabled': true,
                  'data_limit': 1000,
                  'data_metering': 'pooled',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'friendly_name': 'friendly_name',
                  'messaging_enabled': true,
                  'voice_enabled': true,
                  'national_roaming_enabled': true,
                  'international_roaming': [
                      'data',
                      'messaging',
                      'voice'
                  ],
                  'sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://preview.twilio.com/wireless/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.preview.wireless.ratePlans.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.wireless.ratePlans.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://preview.twilio.com/wireless/RatePlans';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://preview.twilio.com/wireless/RatePlans?PageSize=50&Page=0',
              'key': 'rate_plans',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/wireless/RatePlans?PageSize=50&Page=0'
          },
          'rate_plans': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.wireless.ratePlans.list();
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
          'meta': {
              'first_page_url': 'https://preview.twilio.com/wireless/RatePlans?PageSize=50&Page=0',
              'key': 'rate_plans',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/wireless/RatePlans?PageSize=50&Page=0'
          },
          'rate_plans': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'data_enabled': true,
                  'data_limit': 1000,
                  'data_metering': 'pooled',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'friendly_name': 'friendly_name',
                  'messaging_enabled': true,
                  'voice_enabled': true,
                  'national_roaming_enabled': true,
                  'international_roaming': [
                      'data',
                      'messaging',
                      'voice'
                  ],
                  'sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'url': 'https://preview.twilio.com/wireless/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.wireless.ratePlans.list();
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

      var promise = client.preview.wireless.ratePlans('WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {sid: 'WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var url = _.template('https://preview.twilio.com/wireless/RatePlans/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'data_enabled': true,
          'data_limit': 1000,
          'data_metering': 'pooled',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'friendly_name': 'friendly_name',
          'messaging_enabled': true,
          'voice_enabled': true,
          'national_roaming_enabled': true,
          'international_roaming': [
              'data',
              'messaging',
              'voice'
          ],
          'sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://preview.twilio.com/wireless/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.wireless.ratePlans('WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.wireless.ratePlans.create();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://preview.twilio.com/wireless/RatePlans';

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'data_enabled': true,
          'data_limit': 1000,
          'data_metering': 'pooled',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'friendly_name': 'friendly_name',
          'messaging_enabled': true,
          'voice_enabled': true,
          'national_roaming_enabled': true,
          'international_roaming': [
              'data',
              'messaging',
              'voice'
          ],
          'sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://preview.twilio.com/wireless/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var promise = client.preview.wireless.ratePlans.create();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid update request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.wireless.ratePlans('WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {sid: 'WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var url = _.template('https://preview.twilio.com/wireless/RatePlans/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'data_enabled': true,
          'data_limit': 1000,
          'data_metering': 'pooled',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'friendly_name': 'friendly_name',
          'messaging_enabled': true,
          'voice_enabled': true,
          'national_roaming_enabled': true,
          'international_roaming': [
              'data',
              'messaging',
              'voice'
          ],
          'sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://preview.twilio.com/wireless/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.wireless.ratePlans('WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.wireless.ratePlans('WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {sid: 'WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var url = _.template('https://preview.twilio.com/wireless/RatePlans/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.preview.wireless.ratePlans('WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

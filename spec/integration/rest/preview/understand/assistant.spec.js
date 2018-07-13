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

describe('Assistant', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {sid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var url = _.template('https://preview.twilio.com/understand/Assistants/<%= sid %>')(solution);

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
          'date_created': '2017-07-04T08:34:00Z',
          'date_updated': '2017-07-04T08:34:00Z',
          'friendly_name': 'so so friendly',
          'latest_model_build_sid': null,
          'log_queries': true,
          'sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'ttl': 3600,
          'unique_name': 'so-so-unique',
          'links': {
              'field_types': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes',
              'intents': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents',
              'model_builds': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds',
              'queries': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries'
          },
          'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'response_url': 'https://example.com/response_url',
          'callback_url': 'https://example.com/callback_url',
          'callback_events': 'model_build_completed model_build_failed'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'assistants': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2017-07-04T08:34:00Z',
                  'date_updated': '2017-07-04T08:34:00Z',
                  'friendly_name': 'so so friendly',
                  'latest_model_build_sid': null,
                  'log_queries': true,
                  'sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'ttl': 3600,
                  'unique_name': 'so-so-unique',
                  'links': {
                      'field_types': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes',
                      'intents': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents',
                      'model_builds': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds',
                      'queries': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries'
                  },
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'response_url': 'https://example.com/response_url',
                  'callback_url': 'https://example.com/callback_url',
                  'callback_events': 'model_build_completed model_build_failed'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants?PageSize=50&Page=0',
              'key': 'assistants',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.understand.assistants.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'assistants': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2017-07-04T08:34:00Z',
                  'date_updated': '2017-07-04T08:34:00Z',
                  'friendly_name': 'so so friendly',
                  'latest_model_build_sid': null,
                  'log_queries': true,
                  'sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'ttl': 3600,
                  'unique_name': 'so-so-unique',
                  'links': {
                      'field_types': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes',
                      'intents': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents',
                      'model_builds': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds',
                      'queries': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries'
                  },
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'response_url': 'https://example.com/response_url',
                  'callback_url': 'https://example.com/callback_url',
                  'callback_events': 'model_build_completed model_build_failed'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants?PageSize=50&Page=0',
              'key': 'assistants',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.understand.assistants.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://preview.twilio.com/understand/Assistants',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'assistants': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2017-07-04T08:34:00Z',
                  'date_updated': '2017-07-04T08:34:00Z',
                  'friendly_name': 'so so friendly',
                  'latest_model_build_sid': null,
                  'log_queries': true,
                  'sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'ttl': 3600,
                  'unique_name': 'so-so-unique',
                  'links': {
                      'field_types': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes',
                      'intents': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents',
                      'model_builds': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds',
                      'queries': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries'
                  },
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'response_url': 'https://example.com/response_url',
                  'callback_url': 'https://example.com/callback_url',
                  'callback_events': 'model_build_completed model_build_failed'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants?PageSize=50&Page=0',
              'key': 'assistants',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.understand.assistants.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.understand.assistants.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://preview.twilio.com/understand/Assistants';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'assistants': [],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants?PageSize=50&Page=0',
              'key': 'assistants',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants.list();
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
          'assistants': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2017-07-04T08:34:00Z',
                  'date_updated': '2017-07-04T08:34:00Z',
                  'friendly_name': 'so so friendly',
                  'latest_model_build_sid': null,
                  'log_queries': true,
                  'sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'ttl': 3600,
                  'unique_name': 'so-so-unique',
                  'links': {
                      'field_types': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes',
                      'intents': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents',
                      'model_builds': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds',
                      'queries': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries'
                  },
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'response_url': 'https://example.com/response_url',
                  'callback_url': 'https://example.com/callback_url',
                  'callback_events': 'model_build_completed model_build_failed'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants?PageSize=50&Page=0',
              'key': 'assistants',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants.list();
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

      var promise = client.preview.understand.assistants.create();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://preview.twilio.com/understand/Assistants';

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
          'date_created': '2017-07-04T08:34:00Z',
          'date_updated': '2017-07-04T08:34:00Z',
          'friendly_name': 'so so friendly',
          'latest_model_build_sid': null,
          'log_queries': true,
          'sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'ttl': 3600,
          'unique_name': 'so-so-unique',
          'links': {
              'field_types': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes',
              'intents': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents',
              'model_builds': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds',
              'queries': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries'
          },
          'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'response_url': 'https://example.com/response_url',
          'callback_url': 'https://example.com/callback_url',
          'callback_events': 'model_build_completed model_build_failed'
      });

      holodeck.mock(new Response(201, body));

      var promise = client.preview.understand.assistants.create();
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

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {sid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var url = _.template('https://preview.twilio.com/understand/Assistants/<%= sid %>')(solution);

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
          'date_created': '2017-07-04T08:34:00Z',
          'date_updated': '2017-07-04T08:34:00Z',
          'friendly_name': 'so so friendly',
          'latest_model_build_sid': null,
          'log_queries': true,
          'sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'ttl': 3600,
          'unique_name': 'so-so-unique',
          'links': {
              'field_types': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/FieldTypes',
              'intents': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents',
              'model_builds': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ModelBuilds',
              'queries': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Queries'
          },
          'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'response_url': 'https://example.com/response_url',
          'callback_url': 'https://example.com/callback_url',
          'callback_events': 'model_build_completed model_build_failed'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
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

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {sid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var url = _.template('https://preview.twilio.com/understand/Assistants/<%= sid %>')(solution);

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

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

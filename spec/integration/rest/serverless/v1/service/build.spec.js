'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Build', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .builds.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://serverless.twilio.com/v1/Services/${serviceSid}/Builds`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'builds': [],
          'meta': {
              'first_page_url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Builds?PageSize=50&Page=0',
              'key': 'builds',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Builds?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .builds.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .builds('ZBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'ZBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://serverless.twilio.com/v1/Services/${serviceSid}/Builds/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'ZB00000000000000000000000000000000',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ZS00000000000000000000000000000000',
          'asset_versions': [
              {
                  'sid': 'ZN00000000000000000000000000000000',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ZS00000000000000000000000000000000',
                  'asset_sid': 'ZH00000000000000000000000000000000',
                  'date_created': '2018-11-10T20:00:00Z',
                  'path': 'asset-path',
                  'visibility': 'PUBLIC'
              }
          ],
          'function_versions': [
              {
                  'sid': 'ZN00000000000000000000000000000001',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ZS00000000000000000000000000000000',
                  'function_sid': 'ZH00000000000000000000000000000001',
                  'date_created': '2018-11-10T20:00:00Z',
                  'path': 'function-path',
                  'visibility': 'PUBLIC'
              }
          ],
          'dependencies': [
              {
                  'name': 'twilio',
                  'version': '3.6.3'
              }
          ],
          'status': 'deploying',
          'date_created': '2018-11-10T20:00:00Z',
          'date_updated': '2018-11-10T20:00:00Z',
          'url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Builds/ZB00000000000000000000000000000000'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .builds('ZBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .builds.create();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://serverless.twilio.com/v1/Services/${serviceSid}/Builds`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'ZB00000000000000000000000000000000',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ZS00000000000000000000000000000000',
          'asset_versions': [
              {
                  'sid': 'ZN00000000000000000000000000000000',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ZS00000000000000000000000000000000',
                  'asset_sid': 'ZH00000000000000000000000000000000',
                  'date_created': '2018-11-10T20:00:00Z',
                  'path': 'asset-path',
                  'visibility': 'PUBLIC'
              }
          ],
          'function_versions': [
              {
                  'sid': 'ZN00000000000000000000000000000001',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ZS00000000000000000000000000000000',
                  'function_sid': 'ZH00000000000000000000000000000001',
                  'date_created': '2018-11-10T20:00:00Z',
                  'path': 'function-path',
                  'visibility': 'PUBLIC'
              }
          ],
          'dependencies': [
              {
                  'name': 'twilio',
                  'version': '3.6.3'
              }
          ],
          'status': 'building',
          'date_created': '2018-11-10T20:00:00Z',
          'date_updated': '2018-11-10T20:00:00Z',
          'url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Builds/ZB00000000000000000000000000000000'
      });

      holodeck.mock(new Response(201, body));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .builds.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});

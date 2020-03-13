'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('FunctionVersion', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functions('ZHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functionVersions.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var functionSid = 'ZHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://serverless.twilio.com/v1/Services/${serviceSid}/Functions/${functionSid}/Versions`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'function_versions': [],
          'meta': {
              'first_page_url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Functions/ZH00000000000000000000000000000000/Versions?PageSize=50&Page=0',
              'key': 'function_versions',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Functions/ZH00000000000000000000000000000000/Versions?PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functions('ZHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functionVersions.list();
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
      holodeck.mock(new Response(500, {}));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functions('ZHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functionVersions('ZNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var functionSid = 'ZHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'ZNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://serverless.twilio.com/v1/Services/${serviceSid}/Functions/${functionSid}/Versions/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'ZN00000000000000000000000000000000',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ZS00000000000000000000000000000000',
          'function_sid': 'ZH00000000000000000000000000000000',
          'path': 'test-path',
          'visibility': 'public',
          'date_created': '2018-11-10T20:00:00Z',
          'url': 'https://serverless.twilio.com/v1/Services/ZS00000000000000000000000000000000/Functions/ZH00000000000000000000000000000000/Versions/ZN00000000000000000000000000000000'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.serverless.v1.services('ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functions('ZHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .functionVersions('ZNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});

'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var util = require('util');  /* jshint ignore:line */
var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */
var moduleInfo = require(
    '../../../../../../package.json');  /* jshint ignore:line */


var client;
var holodeck;

describe('Entity', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var opts = {identity: 'identity', twilioAuthySandboxMode: 'twilio_authy_sandbox_mode'};
      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://authy.twilio.com/v1/Services/${serviceSid}/Entities`;

      var values = {Identity: 'identity', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));

      var headers = {
        'Twilio-Authy-Sandbox-Mode': 'twilio_authy_sandbox_mode',
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
      };
      headers['User-Agent'] = util.format(
        'twilio-node/%s (node.js %s)',
        moduleInfo.version,
        process.version
      );
      if (!headers['Content-Type']) {
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
      }
      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url,
        headers: headers
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'ff483d1ff591898a9942916050d2ca3f',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f',
          'links': {
              'factors': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Factors'
          }
      });

      holodeck.mock(new Response(201, body));

      var opts = {identity: 'identity'};
      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var opts = {twilioAuthySandboxMode: 'twilio_authy_sandbox_mode'};
      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities('identity').remove(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var identity = 'identity';
      var url = `https://authy.twilio.com/v1/Services/${serviceSid}/Entities/${identity}`;

      var headers = {
        'Twilio-Authy-Sandbox-Mode': 'twilio_authy_sandbox_mode',
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
      };
      headers['User-Agent'] = util.format(
        'twilio-node/%s (node.js %s)',
        moduleInfo.version,
        process.version
      );
      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url,
        headers: headers
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities('identity').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var opts = {twilioAuthySandboxMode: 'twilio_authy_sandbox_mode'};
      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities('identity').fetch(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var identity = 'identity';
      var url = `https://authy.twilio.com/v1/Services/${serviceSid}/Entities/${identity}`;

      var headers = {
        'Twilio-Authy-Sandbox-Mode': 'twilio_authy_sandbox_mode',
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
      };
      headers['User-Agent'] = util.format(
        'twilio-node/%s (node.js %s)',
        moduleInfo.version,
        process.version
      );
      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url,
        headers: headers
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'ff483d1ff591898a9942916050d2ca3f',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f',
          'links': {
              'factors': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Factors'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities('identity').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'entities': [
              {
                  'sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'ff483d1ff591898a9942916050d2ca3f',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f',
                  'links': {
                      'factors': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Factors'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'entities'
          }
      });
      holodeck.mock(new Response(200, body));
      client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                     .entities.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'entities': [
              {
                  'sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'ff483d1ff591898a9942916050d2ca3f',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f',
                  'links': {
                      'factors': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Factors'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'entities'
          }
      });
      holodeck.mock(new Response(200, body));
      client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                     .entities.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://authy.twilio.com/v1/Services/${serviceSid}/Entities',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'entities': [
              {
                  'sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'ff483d1ff591898a9942916050d2ca3f',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f',
                  'links': {
                      'factors': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Factors'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'entities'
          }
      });
      holodeck.mock(new Response(200, body));
      client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                     .entities.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var opts = {twilioAuthySandboxMode: 'twilio_authy_sandbox_mode'};
      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities.list(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://authy.twilio.com/v1/Services/${serviceSid}/Entities`;

      var headers = {
        'Twilio-Authy-Sandbox-Mode': 'twilio_authy_sandbox_mode',
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
      };
      headers['User-Agent'] = util.format(
        'twilio-node/%s (node.js %s)',
        moduleInfo.version,
        process.version
      );
      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url,
        headers: headers
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'entities': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'entities'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = JSON.stringify({
          'entities': [
              {
                  'sid': 'YEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'ff483d1ff591898a9942916050d2ca3f',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f',
                  'links': {
                      'factors': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities/ff483d1ff591898a9942916050d2ca3f/Factors'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://authy.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Entities?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'entities'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.authy.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .entities.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});

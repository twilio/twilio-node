'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

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

describe('FlexFlow', function() {
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
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://flex-api.twilio.com/v1/FlexFlows?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://flex-api.twilio.com/v1/FlexFlows?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'flex_flows'
          },
          'flex_flows': [
              {
                  'sid': 'FOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-08-01T22:10:40Z',
                  'date_updated': '2016-08-01T22:10:40Z',
                  'friendly_name': 'friendly_name',
                  'chat_service_sid': 'SIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_type': 'sms',
                  'contact_identity': '12345',
                  'enabled': true,
                  'integration_type': 'studio',
                  'integration': {
                      'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'long_lived': true,
                  'url': 'https://flex-api.twilio.com/v1/FlexFlows/FOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.flexApi.v1.flexFlow.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://flex-api.twilio.com/v1/FlexFlows?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://flex-api.twilio.com/v1/FlexFlows?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'flex_flows'
          },
          'flex_flows': [
              {
                  'sid': 'FOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-08-01T22:10:40Z',
                  'date_updated': '2016-08-01T22:10:40Z',
                  'friendly_name': 'friendly_name',
                  'chat_service_sid': 'SIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_type': 'sms',
                  'contact_identity': '12345',
                  'enabled': true,
                  'integration_type': 'studio',
                  'integration': {
                      'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'long_lived': true,
                  'url': 'https://flex-api.twilio.com/v1/FlexFlows/FOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.flexApi.v1.flexFlow.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://flex-api.twilio.com/v1/FlexFlows',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://flex-api.twilio.com/v1/FlexFlows?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://flex-api.twilio.com/v1/FlexFlows?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'flex_flows'
          },
          'flex_flows': [
              {
                  'sid': 'FOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-08-01T22:10:40Z',
                  'date_updated': '2016-08-01T22:10:40Z',
                  'friendly_name': 'friendly_name',
                  'chat_service_sid': 'SIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_type': 'sms',
                  'contact_identity': '12345',
                  'enabled': true,
                  'integration_type': 'studio',
                  'integration': {
                      'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'long_lived': true,
                  'url': 'https://flex-api.twilio.com/v1/FlexFlows/FOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.flexApi.v1.flexFlow.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.flexApi.v1.flexFlow.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://flex-api.twilio.com/v1/FlexFlows';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://flex-api.twilio.com/v1/FlexFlows?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://flex-api.twilio.com/v1/FlexFlows?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'flex_flows'
          },
          'flex_flows': [
              {
                  'sid': 'FOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-08-01T22:10:40Z',
                  'date_updated': '2016-08-01T22:10:40Z',
                  'friendly_name': 'friendly_name',
                  'chat_service_sid': 'SIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_type': 'sms',
                  'contact_identity': '12345',
                  'enabled': true,
                  'integration_type': 'studio',
                  'integration': {
                      'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'long_lived': true,
                  'url': 'https://flex-api.twilio.com/v1/FlexFlows/FOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.flexApi.v1.flexFlow.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://flex-api.twilio.com/v1/FlexFlows?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://flex-api.twilio.com/v1/FlexFlows?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'flex_flows'
          },
          'flex_flows': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.flexApi.v1.flexFlow.list();
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

      var promise = client.flexApi.v1.flexFlow('FOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'FOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://flex-api.twilio.com/v1/FlexFlows/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'FOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2016-08-01T22:10:40Z',
          'date_updated': '2016-08-01T22:10:40Z',
          'friendly_name': 'friendly_name',
          'chat_service_sid': 'SIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_type': 'sms',
          'contact_identity': '12345',
          'enabled': true,
          'integration_type': 'studio',
          'integration': {
              'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          'long_lived': true,
          'url': 'https://flex-api.twilio.com/v1/FlexFlows/FOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.flexApi.v1.flexFlow('FOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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

      var opts = {
        friendlyName: 'friendly_name',
        chatServiceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        channelType: 'web'
      };
      var promise = client.flexApi.v1.flexFlow.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://flex-api.twilio.com/v1/FlexFlows';

      var values = {
        FriendlyName: 'friendly_name',
        ChatServiceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        ChannelType: 'web',
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'FOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2016-08-01T22:10:40Z',
          'date_updated': '2016-08-01T22:10:40Z',
          'friendly_name': 'friendly_name',
          'chat_service_sid': 'SIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_type': 'sms',
          'contact_identity': '12345',
          'enabled': true,
          'integration_type': 'studio',
          'integration': {
              'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          'long_lived': true,
          'url': 'https://flex-api.twilio.com/v1/FlexFlows/FOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        friendlyName: 'friendly_name',
        chatServiceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        channelType: 'web'
      };
      var promise = client.flexApi.v1.flexFlow.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.flexApi.v1.flexFlow('FOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'FOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://flex-api.twilio.com/v1/FlexFlows/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'FOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2016-08-01T22:10:40Z',
          'date_updated': '2016-08-01T22:10:40Z',
          'friendly_name': 'friendly_name',
          'chat_service_sid': 'SIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_type': 'sms',
          'contact_identity': '12345',
          'enabled': true,
          'integration_type': 'studio',
          'integration': {
              'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          'long_lived': true,
          'url': 'https://flex-api.twilio.com/v1/FlexFlows/FOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.flexApi.v1.flexFlow('FOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
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

      var promise = client.flexApi.v1.flexFlow('FOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'FOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://flex-api.twilio.com/v1/FlexFlows/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.flexApi.v1.flexFlow('FOXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});

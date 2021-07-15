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

describe('User', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {identity: 'identity', xTwilioWebhookEnabled: 'true'};
      var promise = client.conversations.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .users.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var chatServiceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Services/${chatServiceSid}/Users`;

      var values = {Identity: 'identity', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));

      var headers = {'X-Twilio-Webhook-Enabled': 'true'};
      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url,
        headers: headers
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'admin',
          'friendly_name': 'name',
          'attributes': '{ \'duty\': \'tech\' }',
          'is_online': true,
          'is_notifiable': null,
          'date_created': '2019-12-16T22:18:37Z',
          'date_updated': '2019-12-16T22:18:38Z',
          'url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'user_conversations': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations'
          }
      };

      holodeck.mock(new Response(201, body));

      var opts = {identity: 'identity'};
      var promise = client.conversations.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .users.create(opts);
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
      holodeck.mock(new Response(500, {}));

      var opts = {xTwilioWebhookEnabled: 'true'};
      var promise = client.conversations.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var chatServiceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Services/${chatServiceSid}/Users/${sid}`;

      var headers = {'X-Twilio-Webhook-Enabled': 'true'};
      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url,
        headers: headers
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'admin',
          'friendly_name': 'new name',
          'attributes': '{ \'duty\': \'tech\', \'team\': \'internals\' }',
          'is_online': true,
          'is_notifiable': null,
          'date_created': '2019-12-16T22:18:37Z',
          'date_updated': '2019-12-16T22:18:38Z',
          'url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'user_conversations': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
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
      holodeck.mock(new Response(500, {}));

      var opts = {xTwilioWebhookEnabled: 'true'};
      var promise = client.conversations.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var chatServiceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Services/${chatServiceSid}/Users/${sid}`;

      var headers = {'X-Twilio-Webhook-Enabled': 'true'};
      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url,
        headers: headers
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = null;

      holodeck.mock(new Response(204, body));

      var promise = client.conversations.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
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
      holodeck.mock(new Response(500, {}));

      var promise = client.conversations.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var chatServiceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Services/${chatServiceSid}/Users/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'admin',
          'friendly_name': 'name',
          'attributes': '{ \'duty\': \'tech\' }',
          'is_online': true,
          'is_notifiable': null,
          'date_created': '2019-12-16T22:18:37Z',
          'date_updated': '2019-12-16T22:18:38Z',
          'url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'user_conversations': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .users('USXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'users'
          },
          'users': [
              {
                  'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'admin',
                  'friendly_name': 'name',
                  'attributes': '{ \'duty\': \'tech\' }',
                  'is_online': true,
                  'is_notifiable': null,
                  'date_created': '2019-12-16T22:18:37Z',
                  'date_updated': '2019-12-16T22:18:38Z',
                  'url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'user_conversations': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations'
                  }
              },
              {
                  'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'agent0034',
                  'friendly_name': 'John from customs',
                  'attributes': '{ \'duty\': \'agent\' }',
                  'is_online': false,
                  'is_notifiable': null,
                  'date_created': '2020-03-24T20:38:21Z',
                  'date_updated': '2020-03-24T20:38:21Z',
                  'url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'user_conversations': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.conversations.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .users.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'users'
          },
          'users': [
              {
                  'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'admin',
                  'friendly_name': 'name',
                  'attributes': '{ \'duty\': \'tech\' }',
                  'is_online': true,
                  'is_notifiable': null,
                  'date_created': '2019-12-16T22:18:37Z',
                  'date_updated': '2019-12-16T22:18:38Z',
                  'url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'user_conversations': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations'
                  }
              },
              {
                  'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'agent0034',
                  'friendly_name': 'John from customs',
                  'attributes': '{ \'duty\': \'agent\' }',
                  'is_online': false,
                  'is_notifiable': null,
                  'date_created': '2020-03-24T20:38:21Z',
                  'date_updated': '2020-03-24T20:38:21Z',
                  'url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'user_conversations': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.conversations.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .users.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://conversations.twilio.com/v1/Services/${chatServiceSid}/Users',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'users'
          },
          'users': [
              {
                  'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'admin',
                  'friendly_name': 'name',
                  'attributes': '{ \'duty\': \'tech\' }',
                  'is_online': true,
                  'is_notifiable': null,
                  'date_created': '2019-12-16T22:18:37Z',
                  'date_updated': '2019-12-16T22:18:38Z',
                  'url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'user_conversations': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations'
                  }
              },
              {
                  'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'agent0034',
                  'friendly_name': 'John from customs',
                  'attributes': '{ \'duty\': \'agent\' }',
                  'is_online': false,
                  'is_notifiable': null,
                  'date_created': '2020-03-24T20:38:21Z',
                  'date_updated': '2020-03-24T20:38:21Z',
                  'url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'user_conversations': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.conversations.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .users.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.conversations.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .users.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var chatServiceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Services/${chatServiceSid}/Users`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'users'
          },
          'users': [
              {
                  'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'admin',
                  'friendly_name': 'name',
                  'attributes': '{ \'duty\': \'tech\' }',
                  'is_online': true,
                  'is_notifiable': null,
                  'date_created': '2019-12-16T22:18:37Z',
                  'date_updated': '2019-12-16T22:18:38Z',
                  'url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'user_conversations': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations'
                  }
              },
              {
                  'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'chat_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'agent0034',
                  'friendly_name': 'John from customs',
                  'attributes': '{ \'duty\': \'agent\' }',
                  'is_online': false,
                  'is_notifiable': null,
                  'date_created': '2020-03-24T20:38:21Z',
                  'date_updated': '2020-03-24T20:38:21Z',
                  'url': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'user_conversations': 'https://conversations.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations'
                  }
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .users.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});

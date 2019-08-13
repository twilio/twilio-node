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

describe('Service', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.ipMessaging.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://chat.twilio.com/v2/Services/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'consumption_report_interval': 100,
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'default_channel_creator_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_channel_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_service_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'limits': {
              'channel_members': 100,
              'user_channels': 250
          },
          'links': {
              'channels': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
              'users': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users',
              'roles': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles',
              'bindings': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings'
          },
          'notifications': {},
          'post_webhook_url': 'post_webhook_url',
          'pre_webhook_url': 'pre_webhook_url',
          'pre_webhook_retry_count': 2,
          'post_webhook_retry_count': 3,
          'reachability_enabled': false,
          'read_status_enabled': false,
          'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'typing_indicator_timeout': 100,
          'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'webhook_filters': [
              'webhook_filters'
          ],
          'webhook_method': 'webhook_method',
          'media': {
              'size_limit_mb': 150,
              'compatibility_message': 'media compatibility message'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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

      var promise = client.ipMessaging.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://chat.twilio.com/v2/Services/${sid}`;

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

      var promise = client.ipMessaging.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var opts = {friendlyName: 'friendly_name'};
      var promise = client.ipMessaging.v2.services.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://chat.twilio.com/v2/Services';

      var values = {FriendlyName: 'friendly_name', };
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
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'consumption_report_interval': 100,
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'default_channel_creator_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_channel_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_service_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'limits': {
              'channel_members': 100,
              'user_channels': 250
          },
          'links': {
              'channels': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
              'users': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users',
              'roles': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles',
              'bindings': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings'
          },
          'notifications': {},
          'post_webhook_url': 'post_webhook_url',
          'pre_webhook_url': 'pre_webhook_url',
          'pre_webhook_retry_count': 2,
          'post_webhook_retry_count': 3,
          'reachability_enabled': false,
          'read_status_enabled': false,
          'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'typing_indicator_timeout': 100,
          'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'webhook_filters': [
              'webhook_filters'
          ],
          'webhook_method': 'webhook_method',
          'media': {
              'size_limit_mb': 150,
              'compatibility_message': 'media compatibility message'
          }
      });

      holodeck.mock(new Response(201, body));

      var opts = {friendlyName: 'friendly_name'};
      var promise = client.ipMessaging.v2.services.create(opts);
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
          'meta': {
              'first_page_url': 'https://chat.twilio.com/v2/Services?PageSize=50&Page=0',
              'key': 'services',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services?PageSize=50&Page=0'
          },
          'services': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'consumption_report_interval': 100,
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'default_channel_creator_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'default_channel_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'default_service_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'limits': {
                      'channel_members': 100,
                      'user_channels': 250
                  },
                  'links': {
                      'channels': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
                      'users': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users',
                      'roles': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles',
                      'bindings': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings'
                  },
                  'notifications': {},
                  'post_webhook_url': 'post_webhook_url',
                  'pre_webhook_url': 'pre_webhook_url',
                  'pre_webhook_retry_count': 2,
                  'post_webhook_retry_count': 3,
                  'reachability_enabled': false,
                  'read_status_enabled': false,
                  'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'typing_indicator_timeout': 100,
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'webhook_filters': [
                      'webhook_filters'
                  ],
                  'webhook_method': 'webhook_method',
                  'media': {
                      'size_limit_mb': 150,
                      'compatibility_message': 'media compatibility message'
                  }
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.ipMessaging.v2.services.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://chat.twilio.com/v2/Services?PageSize=50&Page=0',
              'key': 'services',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services?PageSize=50&Page=0'
          },
          'services': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'consumption_report_interval': 100,
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'default_channel_creator_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'default_channel_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'default_service_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'limits': {
                      'channel_members': 100,
                      'user_channels': 250
                  },
                  'links': {
                      'channels': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
                      'users': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users',
                      'roles': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles',
                      'bindings': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings'
                  },
                  'notifications': {},
                  'post_webhook_url': 'post_webhook_url',
                  'pre_webhook_url': 'pre_webhook_url',
                  'pre_webhook_retry_count': 2,
                  'post_webhook_retry_count': 3,
                  'reachability_enabled': false,
                  'read_status_enabled': false,
                  'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'typing_indicator_timeout': 100,
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'webhook_filters': [
                      'webhook_filters'
                  ],
                  'webhook_method': 'webhook_method',
                  'media': {
                      'size_limit_mb': 150,
                      'compatibility_message': 'media compatibility message'
                  }
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.ipMessaging.v2.services.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://chat.twilio.com/v2/Services',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://chat.twilio.com/v2/Services?PageSize=50&Page=0',
              'key': 'services',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services?PageSize=50&Page=0'
          },
          'services': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'consumption_report_interval': 100,
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'default_channel_creator_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'default_channel_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'default_service_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'limits': {
                      'channel_members': 100,
                      'user_channels': 250
                  },
                  'links': {
                      'channels': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
                      'users': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users',
                      'roles': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles',
                      'bindings': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings'
                  },
                  'notifications': {},
                  'post_webhook_url': 'post_webhook_url',
                  'pre_webhook_url': 'pre_webhook_url',
                  'pre_webhook_retry_count': 2,
                  'post_webhook_retry_count': 3,
                  'reachability_enabled': false,
                  'read_status_enabled': false,
                  'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'typing_indicator_timeout': 100,
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'webhook_filters': [
                      'webhook_filters'
                  ],
                  'webhook_method': 'webhook_method',
                  'media': {
                      'size_limit_mb': 150,
                      'compatibility_message': 'media compatibility message'
                  }
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.ipMessaging.v2.services.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.ipMessaging.v2.services.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://chat.twilio.com/v2/Services';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'first_page_url': 'https://chat.twilio.com/v2/Services?PageSize=50&Page=0',
              'key': 'services',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services?PageSize=50&Page=0'
          },
          'services': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v2.services.list();
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
          'meta': {
              'first_page_url': 'https://chat.twilio.com/v2/Services?PageSize=50&Page=0',
              'key': 'services',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services?PageSize=50&Page=0'
          },
          'services': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'consumption_report_interval': 100,
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'default_channel_creator_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'default_channel_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'default_service_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'limits': {
                      'channel_members': 100,
                      'user_channels': 250
                  },
                  'links': {
                      'channels': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
                      'users': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users',
                      'roles': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles',
                      'bindings': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings'
                  },
                  'notifications': {},
                  'post_webhook_url': 'post_webhook_url',
                  'pre_webhook_url': 'pre_webhook_url',
                  'pre_webhook_retry_count': 2,
                  'post_webhook_retry_count': 3,
                  'reachability_enabled': false,
                  'read_status_enabled': false,
                  'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'typing_indicator_timeout': 100,
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'webhook_filters': [
                      'webhook_filters'
                  ],
                  'webhook_method': 'webhook_method',
                  'media': {
                      'size_limit_mb': 150,
                      'compatibility_message': 'media compatibility message'
                  }
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v2.services.list();
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

      var promise = client.ipMessaging.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://chat.twilio.com/v2/Services/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'consumption_report_interval': 100,
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'default_channel_creator_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_channel_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_service_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'limits': {
              'channel_members': 500,
              'user_channels': 600
          },
          'links': {
              'channels': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
              'users': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users',
              'roles': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles',
              'bindings': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings'
          },
          'notifications': {
              'log_enabled': true,
              'added_to_channel': {
                  'enabled': false,
                  'template': 'notifications.added_to_channel.template'
              },
              'invited_to_channel': {
                  'enabled': false,
                  'template': 'notifications.invited_to_channel.template'
              },
              'new_message': {
                  'enabled': false,
                  'template': 'notifications.new_message.template',
                  'badge_count_enabled': true
              },
              'removed_from_channel': {
                  'enabled': false,
                  'template': 'notifications.removed_from_channel.template'
              }
          },
          'post_webhook_url': 'post_webhook_url',
          'pre_webhook_url': 'pre_webhook_url',
          'pre_webhook_retry_count': 2,
          'post_webhook_retry_count': 3,
          'reachability_enabled': false,
          'read_status_enabled': false,
          'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'typing_indicator_timeout': 100,
          'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'webhook_filters': [
              'webhook_filters'
          ],
          'webhook_method': 'webhook_method',
          'media': {
              'size_limit_mb': 150,
              'compatibility_message': 'new media compatibility message'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});

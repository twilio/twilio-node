'use strict';

var _ = require('lodash');
var Holodeck = require('../../../holodeck');
var Request = require('../../../../../lib/http/request');
var Response = require('../../../../../lib/http/response');
var Twilio = require('../../../../../lib');


var client;
var holodeck;

describe('Service', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': '216d4a5b-654a-4b60-acea-cf4e42604fb3',
          'date_created': '2015-12-16T17:53:05Z',
          'date_updated': '2015-12-16T17:53:05Z',
          'default_service_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_channel_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_channel_creator_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'read_status_enabled': true,
          'typing_indicator_timeout': 5,
          'consumption_report_interval': 10,
          'webhooks': {},
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'channels': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
              'roles': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles',
              'users': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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
      holodeck.mock(new Response(500, ''));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= sid %>')(solution);

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

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, ''));

      var opts = {
        friendlyName: 'friendlyName'
      };
      var promise = client.ipMessaging.v1.services.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var url = 'https://ip-messaging.twilio.com/v1/Services';

      var values = {
        FriendlyName: 'friendlyName',
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': '216d4a5b-654a-4b60-acea-cf4e42604fb3',
          'date_created': '2015-12-16T17:53:05Z',
          'date_updated': '2015-12-16T17:53:05Z',
          'default_service_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_channel_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_channel_creator_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'read_status_enabled': true,
          'typing_indicator_timeout': 5,
          'consumption_report_interval': 10,
          'webhooks': {},
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'channels': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
              'roles': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles',
              'users': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users'
          }
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        friendlyName: 'friendlyName'
      };
      var promise = client.ipMessaging.v1.services.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.ipMessaging.v1.services.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var url = 'https://ip-messaging.twilio.com/v1/Services';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 1,
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'services'
          },
          'services': [
              {
                  'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': '216d4a5b-654a-4b60-acea-cf4e42604fb3',
                  'date_created': '2015-12-16T17:53:05Z',
                  'date_updated': '2015-12-16T17:53:05Z',
                  'default_service_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'default_channel_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'default_channel_creator_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'read_status_enabled': true,
                  'typing_indicator_timeout': 5,
                  'consumption_report_interval': 10,
                  'webhooks': {},
                  'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'channels': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
                      'roles': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles',
                      'users': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users'
                  }
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services.list();
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
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'services'
          },
          'services': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services.list();
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
      holodeck.mock(new Response(500, ''));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': '216d4a5b-654a-4b60-acea-cf4e42604fb3',
          'date_created': '2015-12-16T17:53:05Z',
          'date_updated': '2015-12-16T17:53:05Z',
          'default_service_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_channel_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'default_channel_creator_role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'read_status_enabled': true,
          'typing_indicator_timeout': 5,
          'consumption_report_interval': 10,
          'webhooks': {},
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'channels': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels',
              'roles': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles',
              'users': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});


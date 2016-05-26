'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('Role', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .roles('RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Roles/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'channel user',
          'type': 'channel',
          'permissions': [
              'sendMessage',
              'leaveChannel',
              'editOwnMessage',
              'deleteOwnMessage'
          ],
          'date_created': '2016-03-03T19:47:15Z',
          'date_updated': '2016-03-03T19:47:15Z',
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles/RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .roles('RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .roles('RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Roles/<%= sid %>')(solution);

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

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .roles('RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
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
        friendlyName: 'friendlyName',
        type: 'channel',
        permission: ['permission']
      };
      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .roles.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Roles')(solution);

      var values = {
        FriendlyName: 'friendlyName',
        Type: 'channel',
        Permission: ['permission'],
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
          'sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'channel user',
          'type': 'channel',
          'permissions': [
              'sendMessage',
              'leaveChannel',
              'editOwnMessage',
              'deleteOwnMessage'
          ],
          'date_created': '2016-03-03T19:47:15Z',
          'date_updated': '2016-03-03T19:47:15Z',
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles/RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        friendlyName: 'friendlyName',
        type: 'channel',
        permission: ['permission']
      };
      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .roles.create(opts);
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

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .roles.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Roles')(solution);

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
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'roles'
          },
          'roles': [
              {
                  'sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'channel user',
                  'type': 'channel',
                  'permissions': [
                      'sendMessage',
                      'leaveChannel',
                      'editOwnMessage',
                      'deleteOwnMessage'
                  ],
                  'date_created': '2016-03-03T19:47:15Z',
                  'date_updated': '2016-03-03T19:47:15Z',
                  'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles/RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .roles.list();
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
              'page_size': 1,
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'roles'
          },
          'roles': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .roles.list();
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

      var opts = {
        friendlyName: 'friendlyName',
        permission: ['permission']
      };
      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .roles('RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Roles/<%= sid %>')(solution);

      var values = {
        FriendlyName: 'friendlyName',
        Permission: ['permission'],
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'channel user',
          'type': 'channel',
          'permissions': [
              'sendMessage',
              'leaveChannel',
              'editOwnMessage',
              'deleteOwnMessage'
          ],
          'date_created': '2016-03-03T19:47:15Z',
          'date_updated': '2016-03-03T19:47:15Z',
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles/RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var opts = {
        friendlyName: 'friendlyName',
        permission: ['permission']
      };
      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .roles('RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});


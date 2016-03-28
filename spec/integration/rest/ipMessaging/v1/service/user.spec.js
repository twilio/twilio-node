'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('User', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .users('USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Users/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'jing',
          'attributes': null,
          'friendly_name': null,
          'date_created': '2016-03-24T21:05:19Z',
          'date_updated': '2016-03-24T21:05:19Z',
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .users('USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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
                                         .users('USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Users/<%= sid %>')(solution);

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
                                         .users('USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
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
        identity: 'identity',
        roleSid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .users.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Users')(solution);

      var values = {
        Identity: 'identity',
        RoleSid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
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
          'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'jing',
          'attributes': null,
          'friendly_name': null,
          'date_created': '2016-03-24T21:05:19Z',
          'date_updated': '2016-03-24T21:05:19Z',
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        identity: 'identity',
        roleSid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .users.create(opts);
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
                                         .users.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Users')(solution);

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
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'users'
          },
          'users': [
              {
                  'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'jing',
                  'attributes': null,
                  'friendly_name': null,
                  'date_created': '2016-03-24T21:05:19Z',
                  'date_updated': '2016-03-24T21:05:19Z',
                  'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .users.list();
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
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'users'
          },
          'users': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .users.list();
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
        roleSid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .users('USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Users/<%= sid %>')(solution);

      var values = {
        RoleSid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
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
          'sid': 'USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'role_sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'jing',
          'attributes': null,
          'friendly_name': null,
          'date_created': '2016-03-24T21:05:19Z',
          'date_updated': '2016-03-24T21:05:19Z',
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var opts = {
        roleSid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .users('USaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});


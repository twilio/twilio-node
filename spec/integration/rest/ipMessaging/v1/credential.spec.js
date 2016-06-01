'use strict';

var _ = require('lodash');
var Holodeck = require('../../../holodeck');
var Request = require('../../../../../lib/http/request');
var Response = require('../../../../../lib/http/response');
var Twilio = require('../../../../../lib');


var client;
var holodeck;

describe('Credential', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.ipMessaging.v1.credentials.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var url = 'https://ip-messaging.twilio.com/v1/Credentials';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'credentials': [
              {
                  'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'Test slow create',
                  'type': 'apn',
                  'sandbox': 'False',
                  'date_created': '2015-10-07T17:50:01Z',
                  'date_updated': '2015-10-07T17:50:01Z',
                  'url': 'https://ip-messaging.twilio.com/v1/Credentials/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 1,
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Credentials?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Credentials?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'credentials'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.credentials.list();
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
          'credentials': [],
          'meta': {
              'page': 0,
              'page_size': 1,
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Credentials?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Credentials?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'credentials'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.credentials.list();
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
      holodeck.mock(new Response(500, ''));

      var opts = {
        friendlyName: 'friendlyName',
        type: 'gcm'
      };
      var promise = client.ipMessaging.v1.credentials.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var url = 'https://ip-messaging.twilio.com/v1/Credentials';

      var values = {
        FriendlyName: 'friendlyName',
        Type: 'gcm',
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
          'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'Test slow create',
          'type': 'apn',
          'sandbox': 'False',
          'date_created': '2015-10-07T17:50:01Z',
          'date_updated': '2015-10-07T17:50:01Z',
          'url': 'https://ip-messaging.twilio.com/v1/Credentials/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        friendlyName: 'friendlyName',
        type: 'gcm'
      };
      var promise = client.ipMessaging.v1.credentials.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.ipMessaging.v1.credentials('CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Credentials/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'Test slow create',
          'type': 'apn',
          'sandbox': 'False',
          'date_created': '2015-10-07T17:50:01Z',
          'date_updated': '2015-10-07T17:50:01Z',
          'url': 'https://ip-messaging.twilio.com/v1/Credentials/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.credentials('CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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
        type: 'gcm'
      };
      var promise = client.ipMessaging.v1.credentials('CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Credentials/<%= sid %>')(solution);

      var values = {
        FriendlyName: 'friendlyName',
        Type: 'gcm',
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
          'sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'Test slow create',
          'type': 'apn',
          'sandbox': 'False',
          'date_created': '2015-10-07T17:50:01Z',
          'date_updated': '2015-10-07T17:50:01Z',
          'url': 'https://ip-messaging.twilio.com/v1/Credentials/CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var opts = {
        friendlyName: 'friendlyName',
        type: 'gcm'
      };
      var promise = client.ipMessaging.v1.credentials('CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update(opts);
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

      var promise = client.ipMessaging.v1.credentials('CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Credentials/<%= sid %>')(solution);

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

      var promise = client.ipMessaging.v1.credentials('CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});


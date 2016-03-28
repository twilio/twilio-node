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
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.notifications.v1.services.create();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var url = 'https://notifications.twilio.com/v1/Services';

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': '733c7f0f-6541-42ec-84ce-e2ae1cac588c',
          'date_created': '2016-03-09T20:22:31Z',
          'date_updated': '2016-03-09T20:22:31Z',
          'apn_credential_sid': null,
          'gcm_credential_sid': null,
          'default_apn_notification_protocol_version': '3',
          'default_gcm_notification_protocol_version': '3',
          'url': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'bindings': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings',
              'notifications': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
          }
      });

      holodeck.mock(new Response(201, body));

      var promise = client.notifications.v1.services.create();
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

      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://notifications.twilio.com/v1/Services/<%= sid %>')(solution);

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

      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://notifications.twilio.com/v1/Services/<%= sid %>')(solution);

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
          'friendly_name': '733c7f0f-6541-42ec-84ce-e2ae1cac588c',
          'date_created': '2016-03-09T20:22:31Z',
          'date_updated': '2016-03-09T20:22:31Z',
          'apn_credential_sid': null,
          'gcm_credential_sid': null,
          'default_apn_notification_protocol_version': '3',
          'default_gcm_notification_protocol_version': '3',
          'url': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'bindings': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings',
              'notifications': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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

      var promise = client.notifications.v1.services.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var url = 'https://notifications.twilio.com/v1/Services';

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
              'first_page_url': 'https://notifications.twilio.com/v1/Services?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://notifications.twilio.com/v1/Services?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'services'
          },
          'services': [
              {
                  'sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': '733c7f0f-6541-42ec-84ce-e2ae1cac588c',
                  'date_created': '2016-03-09T20:22:31Z',
                  'date_updated': '2016-03-09T20:22:31Z',
                  'apn_credential_sid': null,
                  'gcm_credential_sid': null,
                  'default_apn_notification_protocol_version': '3',
                  'default_gcm_notification_protocol_version': '3',
                  'url': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'bindings': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings',
                      'notifications': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
                  }
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.notifications.v1.services.list();
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
              'first_page_url': 'https://notifications.twilio.com/v1/Services?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://notifications.twilio.com/v1/Services?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'services'
          },
          'services': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.notifications.v1.services.list();
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

      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://notifications.twilio.com/v1/Services/<%= sid %>')(solution);

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
          'friendly_name': '733c7f0f-6541-42ec-84ce-e2ae1cac588c',
          'date_created': '2016-03-09T20:22:31Z',
          'date_updated': '2016-03-09T20:22:31Z',
          'apn_credential_sid': null,
          'gcm_credential_sid': null,
          'default_apn_notification_protocol_version': '3',
          'default_gcm_notification_protocol_version': '3',
          'url': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'bindings': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings',
              'notifications': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Notifications'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});


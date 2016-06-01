'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('Binding', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .bindings('BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://notifications.twilio.com/v1/Services/<%= serviceSid %>/Bindings/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2016-03-24T23:24:45Z',
          'date_updated': '2016-03-24T23:24:45Z',
          'notification_protocol_version': '3',
          'endpoint': 'abcd',
          'identity': 'jing',
          'binding_type': 'apn',
          'address': '1234',
          'tags': [],
          'url': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings/BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .bindings('BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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

      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .bindings('BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://notifications.twilio.com/v1/Services/<%= serviceSid %>/Bindings/<%= sid %>')(solution);

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

      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .bindings('BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
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
        endpoint: 'endpoint',
        identity: 'identity',
        bindingType: 'apn',
        address: 'address'
      };
      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .bindings.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://notifications.twilio.com/v1/Services/<%= serviceSid %>/Bindings')(solution);

      var values = {
        Endpoint: 'endpoint',
        Identity: 'identity',
        BindingType: 'apn',
        Address: 'address',
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
          'sid': 'BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2016-03-24T23:24:45Z',
          'date_updated': '2016-03-24T23:24:45Z',
          'notification_protocol_version': '3',
          'endpoint': 'abcd',
          'identity': 'jing',
          'binding_type': 'apn',
          'address': '1234',
          'tags': [],
          'url': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings/BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        endpoint: 'endpoint',
        identity: 'identity',
        bindingType: 'apn',
        address: 'address'
      };
      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .bindings.create(opts);
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

      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .bindings.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://notifications.twilio.com/v1/Services/<%= serviceSid %>/Bindings')(solution);

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
              'first_page_url': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'bindings'
          },
          'bindings': [
              {
                  'sid': 'BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T23:24:45Z',
                  'date_updated': '2016-03-24T23:24:45Z',
                  'notification_protocol_version': '3',
                  'endpoint': 'abcd',
                  'identity': 'jing',
                  'binding_type': 'apn',
                  'address': '1234',
                  'tags': [],
                  'url': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings/BSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .bindings.list();
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
              'first_page_url': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://notifications.stage.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Bindings?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'bindings'
          },
          'bindings': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.notifications.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .bindings.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});


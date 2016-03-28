'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../../holodeck');
var Request = require('../../../../../../../lib/http/request');
var Response = require('../../../../../../../lib/http/response');
var Twilio = require('../../../../../../../lib');


var client;
var holodeck;

describe('Member', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .channels('CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .members('MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        channelSid: 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Channels/<%= channelSid %>/Members/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'jing',
          'role_sid': 'RL003876fe89d744dfa576824b53c26784',
          'last_consumed_message_index': null,
          'last_consumption_timestamp': null,
          'date_created': '2016-03-24T21:05:50Z',
          'date_updated': '2016-03-24T21:05:50Z',
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Members/MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .channels('CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .members('MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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
        identity: 'identity'
      };
      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .channels('CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .members.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        channelSid: 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Channels/<%= channelSid %>/Members')(solution);

      var values = {
        Identity: 'identity',
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
          'sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'jing',
          'role_sid': 'RL003876fe89d744dfa576824b53c26784',
          'last_consumed_message_index': null,
          'last_consumption_timestamp': null,
          'date_created': '2016-03-24T21:05:50Z',
          'date_updated': '2016-03-24T21:05:50Z',
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Members/MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        identity: 'identity'
      };
      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .channels('CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .members.create(opts);
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
                                         .channels('CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .members.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        channelSid: 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Channels/<%= channelSid %>/Members')(solution);

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
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Members?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Members?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'members'
          },
          'members': [
              {
                  'sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'jing',
                  'role_sid': 'RL003876fe89d744dfa576824b53c26784',
                  'last_consumed_message_index': null,
                  'last_consumption_timestamp': null,
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Members/MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .channels('CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .members.list();
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
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Members?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Members?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'members'
          },
          'members': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .channels('CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .members.list();
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
                                         .channels('CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .members('MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        channelSid: 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Channels/<%= channelSid %>/Members/<%= sid %>')(solution);

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
                                         .channels('CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .members('MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});


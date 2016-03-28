'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('Channel', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .channels('CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Channels/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'd816d8da-51c0-44e1-928a-44822f49bc95',
          'unique_name': 'c64ad6b0-0090-4cfc-b574-b1ce5208ac0b',
          'attributes': null,
          'type': 'public',
          'date_created': '2015-12-16T22:18:37Z',
          'date_updated': '2015-12-16T22:18:37Z',
          'created_by': 'system',
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'members': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Members',
              'messages': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .channels('CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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
                                         .channels('CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Channels/<%= sid %>')(solution);

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
                                         .channels('CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
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
        uniqueName: 'uniqueName'
      };
      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .channels.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Channels')(solution);

      var values = {
        FriendlyName: 'friendlyName',
        UniqueName: 'uniqueName',
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
          'sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'd816d8da-51c0-44e1-928a-44822f49bc95',
          'unique_name': 'c64ad6b0-0090-4cfc-b574-b1ce5208ac0b',
          'attributes': null,
          'type': 'public',
          'date_created': '2015-12-16T22:18:37Z',
          'date_updated': '2015-12-16T22:18:37Z',
          'created_by': 'system',
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'members': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Members',
              'messages': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages'
          }
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        friendlyName: 'friendlyName',
        uniqueName: 'uniqueName'
      };
      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .channels.create(opts);
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
                                         .channels.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Channels')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'channels': [
              {
                  'sid': 'CHc12e6f1419b244fe8da312bc2cdebebc',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'IS034e4a0c83f94e10a2ab4a3c19a16a86',
                  'friendly_name': 'd816d8da-51c0-44e1-928a-44822f49bc95',
                  'unique_name': 'c64ad6b0-0090-4cfc-b574-b1ce5208ac0b',
                  'attributes': null,
                  'type': 'public',
                  'date_created': '2015-12-16T22:18:37Z',
                  'date_updated': '2015-12-16T22:18:37Z',
                  'created_by': 'system',
                  'url': 'https://ip-messaging.twilio.com/v1/Services/IS034e4a0c83f94e10a2ab4a3c19a16a86/Channels/CHc12e6f1419b244fe8da312bc2cdebebc',
                  'links': {
                      'members': 'https://ip-messaging.twilio.com/v1/Services/IS034e4a0c83f94e10a2ab4a3c19a16a86/Channels/CHc12e6f1419b244fe8da312bc2cdebebc/Members',
                      'messages': 'https://ip-messaging.twilio.com/v1/Services/IS034e4a0c83f94e10a2ab4a3c19a16a86/Channels/CHc12e6f1419b244fe8da312bc2cdebebc/Messages'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 1,
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services/IS034e4a0c83f94e10a2ab4a3c19a16a86/Channels?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services/IS034e4a0c83f94e10a2ab4a3c19a16a86/Channels?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'channels'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .channels.list();
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
          'channels': [],
          'meta': {
              'page': 0,
              'page_size': 1,
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services/IS034e4a0c83f94e10a2ab4a3c19a16a86/Channels?PageSize=1&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services/IS034e4a0c83f94e10a2ab4a3c19a16a86/Channels?PageSize=1&Page=0',
              'next_page_url': null,
              'key': 'channels'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .channels.list();
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

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .channels('CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://ip-messaging.twilio.com/v1/Services/<%= serviceSid %>/Channels/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'd816d8da-51c0-44e1-928a-44822f49bc95',
          'unique_name': 'c64ad6b0-0090-4cfc-b574-b1ce5208ac0b',
          'attributes': null,
          'type': 'public',
          'date_created': '2015-12-16T22:18:37Z',
          'date_updated': '2015-12-16T22:18:37Z',
          'created_by': 'system',
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'members': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Members',
              'messages': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                         .channels('CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});


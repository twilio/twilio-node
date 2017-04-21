'use strict';

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Interaction', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.conversations.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .conversations('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .interactions('KIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        conversationSid: 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'KIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/Conversations/Services/<%= serviceSid %>/Conversations/<%= conversationSid %>/Interactions/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'service_sid': 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'description': 'description',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'inbound_participant_sid': 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'inbound_resource_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'inbound_resource_status': 'completed',
          'inbound_resource_type': 'inbound_resource_type',
          'inbound_resource_url': 'http://www.example.com',
          'outbound_participant_sid': 'KPbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
          'outbound_resource_sid': 'SMbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
          'outbound_resource_status': 'completed',
          'outbound_resource_type': 'outbound_resource_type',
          'outbound_resource_url': 'http://www.example.com',
          'sid': 'KIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'completed',
          'url': 'https://preview.twilio.com/Conversations/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Interactions/KIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'conversation_sid': 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.conversations.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .conversations('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .interactions('KIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
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
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.conversations.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .conversations('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .interactions.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        conversationSid: 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/Conversations/Services/<%= serviceSid %>/Conversations/<%= conversationSid %>/Interactions')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'interactions': [],
          'meta': {
              'previous_page_url': null,
              'next_page_url': null,
              'url': 'https://preview.twilio.com/Conversations/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Interactions?PageSize=50&Page=0',
              'page': 0,
              'first_page_url': 'https://preview.twilio.com/Conversations/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Conversations/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Interactions?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'interactions'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.conversations.services('KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .conversations('KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                                .interactions.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});


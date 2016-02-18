'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/Request');
var Response = require('../../../../../../lib/http/Response');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('Participant', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.conversations.v1.conversations('CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .participants.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        conversationSid: 'CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://conversations.twilio.com/v1/Conversations/<%= conversationSid %>/Participants')(solution);

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
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations/CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants?PageSize=50&Page=0',
              'key': 'participants',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations/CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants?PageSize=50&Page=0'
          },
          'participants': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'address': 'torkel2@ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.endpoint.twilio.com',
                  'conversation_sid': 'CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-05-13T23:03:12Z',
                  'duration': 685,
                  'end_time': '2015-05-13T23:14:40Z',
                  'sid': 'PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'start_time': '2015-05-13T23:03:15Z',
                  'status': 'disconnected',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.conversations('CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .participants.list();
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
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations/CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants?PageSize=50&Page=0',
              'key': 'participants',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations/CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants?PageSize=50&Page=0'
          },
          'participants': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.conversations('CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .participants.list();
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
        to: '+123456789',
        from: '+987654321'
      };
      var promise = client.conversations.v1.conversations('CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .participants.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        conversationSid: 'CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://conversations.twilio.com/v1/Conversations/<%= conversationSid %>/Participants')(solution);

      var values = {
        To: '+123456789',
        From: '+987654321',
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
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'address': 'torkel2@ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.endpoint.twilio.com',
          'conversation_sid': 'CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-05-13T23:03:12Z',
          'duration': 685,
          'end_time': '2015-05-13T23:14:40Z',
          'sid': 'PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'start_time': '2015-05-13T23:03:15Z',
          'status': 'disconnected',
          'url': 'https://conversations.twilio.com/v1/Conversations/CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var opts = {
        to: '+123456789',
        from: '+987654321'
      };
      var promise = client.conversations.v1.conversations('CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .participants.create(opts);
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

      var promise = client.conversations.v1.conversations('CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .participants('PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        conversationSid: 'CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://conversations.twilio.com/v1/Conversations/<%= conversationSid %>/Participants/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'address': 'torkel2@ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.endpoint.twilio.com',
          'conversation_sid': 'CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-05-13T23:03:12Z',
          'duration': 685,
          'end_time': '2015-05-13T23:14:40Z',
          'sid': 'PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'start_time': '2015-05-13T23:03:15Z',
          'status': 'disconnected',
          'url': 'https://conversations.twilio.com/v1/Conversations/CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.conversations('CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .participants('PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});


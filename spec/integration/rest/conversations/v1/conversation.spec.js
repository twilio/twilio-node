'use strict';

var _ = require('lodash');
var Holodeck = require('../../../holodeck');
var Request = require('../../../../../lib/http/Request');
var Response = require('../../../../../lib/http/Response');
var Twilio = require('../../../../../lib');


var client;
var holodeck;

describe('Conversation', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request', function() {
    holodeck.mock(new Response(500, ''));

    var promise = client.conversations.v1.conversations('CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
    promise = promise.then(function() {
      throw new Error('failed');
    }, function(error) {
      expect(error.constructor).toBe(Error.prototype.constructor);
    });
    promise.done();

    var solution = {
      sid: 'CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    };
    var url = _.template('https://conversations.twilio.com/v1/Conversations/<%= sid %>')(solution);

    holodeck.assertHasRequest(new Request({
      method: 'GET',
      url: url
    }));
  });
  it('should generate valid fetch response', function() {
                    var body = JSON.stringify({
        'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'date_created': '2015-05-12T21:13:15Z',
        'duration': 60,
        'end_time': '2015-05-12T21:14:15Z',
        'links': {
            'participants': 'https://conversations.twilio.com/v1/Conversations/CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants'
        },
        'sid': 'CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'start_time': '2015-05-12T21:13:15Z',
        'status': 'created',
        'url': 'https://conversations.twilio.com/v1/Conversations/CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    });
                    holodeck.mock(new Response(200, body));

    var promise = client.conversations.v1.conversations('CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
    promise = promise.then(function(response) {
      expect(response).toBeDefined();
    }, function() {
      throw new Error('failed');
    });

    promise.done();
  });
});


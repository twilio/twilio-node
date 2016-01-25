'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/Request');
var Response = require('../../../../../../lib/http/Response');
var Twilio = require('../../../../../../lib').Twilio;


var client;
var holodeck;

describe('InProgress', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('AC' + _.join(_.fill(new Array(32), 'a'), ''), 'AUTHTOKEN', holodeck);
  });
  it('should generate valid list request', function() {
    holodeck.mock(new Response(500, ''));

    var promise = client.conversations.v1.conversations
                                         .inProgress.list();
    promise = promise.then(function() {
      throw new Error('failed');
    }, function(error) {
      expect(error.constructor).toBe(Error.prototype.constructor);
    });

    promise.done();

    var solution = {};
    var url = _.template(
      'https://conversations.twilio.com/v1/Conversations/InProgress'
    )(solution);

    holodeck.assertHasRequest(new Request({
      method: 'GET',
      url: url
    }));
  });
  it('should generate valid read_full response', function() {
    var body = JSON.stringify({
        'conversations': [
            {
                'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                'date_created': '2015-05-12T21:08:50Z',
                'duration': 60,
                'end_time': '2015-05-12T21:09:50Z',
                'links': {
                    'participants': 'https://conversations.twilio.com/v1/Conversations/CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants'
                },
                'sid': 'CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                'start_time': '2015-05-12T21:08:50Z',
                'status': 'completed',
                'url': 'https://conversations.twilio.com/v1/Conversations/CVaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            }
        ],
        'meta': {
            'first_page_url': 'https://conversations.twilio.com/v1/Conversations/InProgress?PageSize=50&Page=0',
            'key': 'conversations',
            'next_page_url': null,
            'page': 0,
            'page_size': 50,
            'previous_page_url': null,
            'url': 'https://conversations.twilio.com/v1/Conversations/InProgress?PageSize=50&Page=0'
        }
    });
    holodeck.mock(new Response(200, body));

    var promise = client.conversations.v1.conversations
                                         .inProgress.list();
    promise = promise.then(function(response) {
      expect(response).toBeDefined();
    }, function() {
      throw new Error('failed');
    });

    promise.done();
  });
  it('should generate valid read_empty response', function() {
    var body = JSON.stringify({
        'conversations': [],
        'meta': {
            'first_page_url': 'https://conversations.twilio.com/v1/Conversations/InProgress?PageSize=50&Page=0',
            'key': 'conversations',
            'next_page_url': null,
            'page': 0,
            'page_size': 50,
            'previous_page_url': null,
            'url': 'https://conversations.twilio.com/v1/Conversations/InProgress?PageSize=50&Page=0'
        }
    });
    holodeck.mock(new Response(200, body));

    var promise = client.conversations.v1.conversations
                                         .inProgress.list();
    promise = promise.then(function(response) {
      expect(response).toBeDefined();
    }, function() {
      throw new Error('failed');
    });

    promise.done();
  });
});


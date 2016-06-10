'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../../holodeck');
var Request = require('../../../../../../../lib/http/request');
var Response = require('../../../../../../../lib/http/response');
var Twilio = require('../../../../../../../lib');


var client;
var holodeck;

describe('Feedback', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.api.v2010.accounts('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .messages('MMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .feedback.create();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        messageSid: 'MMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Messages/<%= messageSid %>/Feedback.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
});


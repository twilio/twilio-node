var client = require('../../../../../spec/integration').client;
var holodeck = require('../../../../../spec/integration').holodeck;
var Response = require('../../../../../lib/http/Response');
var Request = require('../../../../../lib/http/Request');

describe('Account', function() {

  it('should generate valid create request', function() {
    holodeck.mock(new Response(500, '{}'));

    var promise = client.api.v2010.accounts.create()

    promise = promise.then(function() {
      throw new Error('failed');
    }, function(error) {
      expect(error.constructor).toBe(Error.prototype.constructor);
    });

    promise.done();

    holodeck.assertHasRequest(new Request({
      method: 'post',
      url: 'https://api.twilio.com/2010-04-01/Accounts.json'
    }));
  });

  it('should generate valid create response', function() {

  });

});

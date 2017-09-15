var obsolete = require('../../../lib/base/obsolete');

describe('obsolete client tests', function() {

  it('should throw an error on RestClient', function() {
    try {
      new obsolete.RestClient('AC123', 'ABC');
    } catch (error) {
      expect(error.message).toEqual('RestClient has been removed from this version of the library. Please refer to https://www.twilio.com/docs/libraries/node for more information.')
      return;
    }

    throw new Error('failed');
  });

  it('should throw an error on a sub client', function() {
    try {
      new obsolete.TrunkingClient('AC123', 'ABC');
    } catch (error) {
      expect(error.message).toEqual('TrunkingClient has been removed from this version of the library. Please refer to https://www.twilio.com/docs/libraries/node for more information.')
      return;
    }

    throw new Error('failed');
  });

});
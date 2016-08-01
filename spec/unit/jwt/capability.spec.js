var twilio = require('../../../index');

describe('The TwiML Capability Token Object', function () {
  describe('constructor', function() {
    it('should allow for explicit construction of a capability token', function() {
        var c = new twilio.jwt.Capability('foo', 'bar');
        c.allowClientIncoming('armpit');
        c.allowClientOutgoing('bellybutton');

        expect(c.accountSid).toBe('foo');
        expect(c.authToken).toBe('bar');
        expect(c.capabilities.length).toBe(1);
    });

    it('should use environment variables for the constructor', function() {
        var oldSid = process.env.TWILIO_ACCOUNT_SID,
            oldAuthToken = process.env.TWILIO_AUTH_TOKEN;

        process.env.TWILIO_ACCOUNT_SID = 'foo';
        process.env.TWILIO_AUTH_TOKEN = 'bar';

        var c = new twilio.jwt.Capability();

        expect(c.accountSid).toBe('foo');
        expect(c.authToken).toBe('bar');

        delete process.env.TWILIO_ACCOUNT_SID;
        delete process.env.TWILIO_AUTH_TOKEN;

        expect(twilio.jwt.Capability).toThrow();

        process.env.TWILIO_ACCOUNT_SID = oldSid;
        process.env.TWILIO_AUTH_TOKEN = oldAuthToken;
    });

    it('should return a new instance of itself if called as a function', function() {
      expect(twilio.jwt.Capability('foo', 'bar') instanceof twilio.jwt.Capability).toBe(true);
    });
  });

  describe('allowClientIncoming', function() {
    it('should return the capability object for chainability', function() {
      var c = new twilio.jwt.Capability('foo', 'bar');
      expect(c.allowClientIncoming('armpit') instanceof twilio.jwt.Capability).toBe(true);
    });
  });

  describe('allowClientOutgoing', function() {
    it('should return the capability object for chainability', function() {
      var c = new twilio.jwt.Capability('foo', 'bar');
      expect(c.allowClientOutgoing('bellybutton') instanceof twilio.jwt.Capability).toBe(true);
    });
  });

  describe('allowEventStream', function() {
    it('should return the capability object for chainability', function() {
      var c = new twilio.jwt.Capability('foo', 'bar');
      expect(c.allowEventStream() instanceof twilio.jwt.Capability).toBe(true);
    });
  });
});

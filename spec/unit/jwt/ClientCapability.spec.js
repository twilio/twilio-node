var ClientCapability = require('../../../index').jwt.ClientCapability;
var jwt = require('jsonwebtoken');

describe('The TwiML Capability Token Object', function () {
  describe('ClientCapability', function() {
    it('should generate a token', function() {
        var c = new ClientCapability({
          accountSid: 'foo',
          authToken: 'bar'
        });

        c.addScope(new ClientCapability.IncomingClientScope('foo'));
        c.addScope(new ClientCapability.OutgoingClientScope({
          applicationSid: 'AP123'
        }));

        expect(c.accountSid).toBe('foo');
        expect(c.authToken).toBe('bar');
        expect(c.scopes.length).toBe(2);

        var decoded = jwt.verify(c.toJwt(), 'bar');
        expect(decoded.scope).toBe('scope:client:incoming?clientName=foo scope:client:outgoing?appSid=AP123');
        expect(decoded.iss).toBe('foo');
    });

    it('should return a new instance of itself if called as a function', function() {
      expect(new ClientCapability({
          accountSid: 'foo',
          authToken: 'bar'
      }) instanceof ClientCapability).toBe(true);
    });

    it('should accept ttl option', function() {
      var c = new ClientCapability({
        accountSid: 'foo',
        authToken: 'bar',
        ttl: 7200
      });
      
      expect(c.accountSid).toBe('foo');
      expect(c.authToken).toBe('bar');
      expect(c.ttl).toBe(7200);
    })
  });

  describe('IncomingClientScope', function() {
    it('should generate token', function() {
      var c = new ClientCapability({
        accountSid: 'foo',
        authToken: 'bar'
      });
      c.addScope(new ClientCapability.IncomingClientScope('client'));

      var decoded = jwt.verify(c.toJwt(), 'bar');
      expect(decoded.scope).toBe('scope:client:incoming?clientName=client');
      expect(decoded.iss).toBe('foo');
    });
  });

  describe('OutgoingClientScope', function() {
    it('should generate token', function() {
      var c = new ClientCapability({
        accountSid: 'foo',
        authToken: 'bar'
      });
      c.addScope(new ClientCapability.OutgoingClientScope({
        applicationSid: 'AP123',
        clientName: 'CL123',
        params: {
          foo: 'bar'
        }
      }));

      var decoded = jwt.verify(c.toJwt(), 'bar');
      expect(decoded.scope).toBe('scope:client:outgoing?appSid=AP123&clientName=CL123&appParams=foo%3Dbar');
      expect(decoded.iss).toBe('foo');
    });
  });

  describe('EventStreamScope', function() {
    it('should generate token', function() {
      var c = new ClientCapability({
        accountSid: 'foo',
        authToken: 'bar'
      });
      c.addScope(new ClientCapability.EventStreamScope({
        foo: 'bar'
      }));

      var decoded = jwt.verify(c.toJwt(), 'bar');
      expect(decoded.scope).toBe('scope:stream:subscribe?path=/2010-04-01/Events&appParams=foo%3Dbar');
      expect(decoded.iss).toBe('foo');
    });
  });
});

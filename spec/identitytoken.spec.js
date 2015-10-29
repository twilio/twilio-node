var twilio = require('../index');
var jwt = require('jsonwebtoken');

describe('IdentityToken', function() {
  var accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  var keySid = 'SKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

  describe('constructor', function() {
    var initWithoutIndex = function(index) {
      return function() {
        var constructorArgs = [accountSid, keySid, 'secret'];
        constructorArgs[index] = undefined;

        // add context
        constructorArgs.unshift({});
        new (Function.prototype.bind.apply(twilio.IdentityToken, constructorArgs));
      };
    };
    it('should require accountSid', function() {
      expect(initWithoutIndex(0)).toThrow(new Error('accountSid is required'));
    });
    it('should require keySid', function() {
      expect(initWithoutIndex(1)).toThrow(new Error('keySid is required'));
    });
    it('should require secret', function() {
      expect(initWithoutIndex(2)).toThrow(new Error('secret is required'));
    });
  });

  describe('generate', function() {
    it('should throw error when identity is not specified', function() {
      var token = new twilio.IdentityToken(accountSid, keySid, 'secret');
      expect(function() {
        token.generate();
      }).toThrow(new Error('identity is required'));
    });

    it('should create a token without any grants', function() {
      var token = new twilio.IdentityToken(accountSid, keySid, 'secret');
      token.identity = 'ID@example.com';

      var decoded = jwt.verify(token.generate(), 'secret');
      expect(decoded.jti.indexOf(keySid)).toBe(0);
      expect(decoded.iss).toBe(keySid);
      expect(decoded.sub).toBe(accountSid);
      expect(decoded.exp - decoded.iat).toBe(3600);
      expect(decoded.grants).toEqual({
        identity: 'ID@example.com'
      });
    });

    it('should accept user defined ttl', function() {
      var token = new twilio.IdentityToken(accountSid, keySid, 'secret');
      token.ttl = 100;
      token.identity = 'ID@example.com';

      var decoded = jwt.verify(token.generate(), 'secret');
      expect(decoded.exp - decoded.iat).toBe(100);
    });

    it('should create token with ip messaging grant', function() {
      var token = new twilio.IdentityToken(accountSid, keySid, 'secret');
      token.identity = 'ID@example.com';

      var grant = new twilio.IdentityToken.IpMessagingGrant();
      grant.serviceSid = 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      grant.addRole('user');
      grant.addRole('admin');
      grant.endpointId = 'blah';
      grant.credentialSid = 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      token.addGrant(grant);

      var decoded = jwt.verify(token.generate(), 'secret');
      expect(decoded.grants).toEqual({
        identity: 'ID@example.com',
        ip_messaging: {
          service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          role: ['user', 'admin'],
          data: {
            endpoint_id: 'blah',
            credential_sid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          }
        }
      });
    });

    it('should create token with rtc conversation grant', function() {
      var token = new twilio.IdentityToken(accountSid, keySid, 'secret');
      token.identity = 'ID@example.com';

      var grant = new twilio.IdentityToken.RTCGrant();
      grant.configurationProfileSid = 'CPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      token.addGrant(grant);

      var decoded = jwt.verify(token.generate(), 'secret');
      expect(decoded.grants).toEqual({
        identity: 'ID@example.com',
        rtc: {
          configuration_profile_sid: 'CPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        }
      });
    });

    it('should create token with multiple grants', function() {
      var token = new twilio.IdentityToken(accountSid, keySid, 'secret');
      token.identity = 'ID@example.com';

      var grant = new twilio.IdentityToken.IpMessagingGrant();
      grant.serviceSid = 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      grant.addRole('user');
      grant.addRole('admin');
      grant.endpointId = 'blah';
      grant.credentialSid = 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      token.addGrant(grant);

      grant = new twilio.IdentityToken.RTCGrant();
      grant.configurationProfileSid = 'CPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      token.addGrant(grant);

      var decoded = jwt.verify(token.generate(), 'secret');
      expect(decoded.grants).toEqual({
        identity: 'ID@example.com',
        ip_messaging: {
          service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          role: ['user', 'admin'],
          data: {
            endpoint_id: 'blah',
            credential_sid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          }
        },
        rtc: {
          configuration_profile_sid: 'CPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        }
      });
    });

    describe('IpMessagingGrant', function() {
      describe('toPayload', function() {
        it('should only populate set properties', function() {
          var grant = new twilio.IdentityToken.IpMessagingGrant();
          expect(grant.toPayload()).toEqual({});

          grant.addRole('user');
          expect(grant.toPayload()).toEqual({
            role: ['user']
          });

          grant.serviceSid = 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
          expect(grant.toPayload()).toEqual({
            service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            role: ['user']
          });

          grant.endpointId = 'endpointId';
          expect(grant.toPayload()).toEqual({
            service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            role: ['user'],
            data: {
              endpoint_id: 'endpointId'
            }
          });

          grant.endpointId = undefined;
          grant.credentialSid = 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
          expect(grant.toPayload()).toEqual({
            service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            role: ['user'],
            data: {
              credential_sid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            }
          });

          grant.endpointId = 'endpointId';
          expect(grant.toPayload()).toEqual({
            service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            role: ['user'],
            data: {
              endpoint_id: 'endpointId',
              credential_sid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            }
          });
        });
      });
    });

    describe('RTCGrant', function() {
      it('should only populate set properties', function() {
        var grant = new twilio.IdentityToken.RTCGrant();
        expect(grant.toPayload()).toEqual({});

        grant.configurationProfileSid = 'CPsid';
        expect(grant.toPayload()).toEqual({
          configuration_profile_sid: 'CPsid'
        });
      });
    });
  });

});

var twilio = require('../../../index');
var jwt = require('jsonwebtoken');

process.noDeprecation = true;

describe('AccessToken', function() {
  var accountSid = 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  var keySid = 'SKb5aed9ca12bf5890f37930e63cad6d38';

  describe('constructor', function() {
    var initWithoutIndex = function(index) {
      return function() {
        var constructorArgs = [accountSid, keySid, 'secret'];
        constructorArgs[index] = undefined;

        // add context
        constructorArgs.unshift({});
        new (Function.prototype.bind.apply(twilio.jwt.AccessToken, constructorArgs));
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
    it('should convert identity from integer to string', function () {
      var token = new twilio.jwt.AccessToken(accountSid, keySid, 'secret', { identity: 4444 });
      var decoded = jwt.decode(token.toJwt());
      expect(decoded.grants.identity).toEqual('4444');
    });
  });

  describe('generate', function() {
    it('should generate the correct headers', function() {
      var token = new twilio.jwt.AccessToken(accountSid, keySid, 'aTBl1PhJnykIjWll4TOiXKtD1ugxiz6f');
      var decoded = jwt.decode(token.toJwt(), {complete: true});

      expect(decoded.header).toEqual({
        cty: 'twilio-fpa;v=1',
        typ: 'JWT',
        alg: 'HS256'
      });
    });

    it('should accept different algorithsm', function() {
      var validateAlg = function(alg) {
        var token = new twilio.jwt.AccessToken(accountSid, keySid, 'secret');
        var decoded = jwt.decode(token.toJwt(alg), {
          complete: true,
          algorithms: twilio.jwt.AccessToken.ALGORITHMS
        });
        expect(decoded.header.alg).toEqual(alg);
      };

      validateAlg('HS256');
      validateAlg('HS384');
      validateAlg('HS512');
    });

    it('should throw on invalid algorithm', function() {
      var generateWithAlg = function(alg) {
        return function() {
          new twilio.jwt.AccessToken(accountSid, keySid, 'secret').toJwt(alg);
        };
      };

      expect(generateWithAlg('unknown'))
          .toThrow(new Error('Algorithm not supported. ' +
                  'Allowed values are HS256, HS384, HS512'));
    });

    it('should create a token without any grants', function() {
      var token = new twilio.jwt.AccessToken(accountSid, keySid, 'secret');
      token.identity = 'ID@example.com';

      var decoded = jwt.verify(token.toJwt(), 'secret');
      expect(decoded.jti.indexOf(keySid)).toBe(0);
      expect(decoded.iss).toBe(keySid);
      expect(decoded.sub).toBe(accountSid);
      expect(decoded.exp - decoded.iat).toBe(3600);
      expect(decoded.grants).toEqual({
        identity: 'ID@example.com'
      });
    });

    it('should accept nbf', function() {
      var nbf = Math.floor(Date.now() / 1000);
      var token = new twilio.jwt.AccessToken(accountSid, keySid, 'secret', { nbf: nbf });
      token.identity = 'ID@example.com';

      var decoded = jwt.verify(token.toJwt(), 'secret');
      expect(decoded.jti.indexOf(keySid)).toBe(0);
      expect(decoded.iss).toBe(keySid);
      expect(decoded.sub).toBe(accountSid);
      expect(decoded.nbf).toBe(nbf);
      var delta = Math.abs(decoded.nbf - Math.floor(Date.now() / 1000));
      expect(delta).toBeLessThan(10);

      expect(decoded.exp - decoded.iat).toBe(3600);
      expect(decoded.grants).toEqual({
        identity: 'ID@example.com'
      });
    });

    it('should accept user defined ttl', function() {
      var token = new twilio.jwt.AccessToken(accountSid, keySid, 'secret');
      token.ttl = 100;
      token.identity = 'ID@example.com';

      var decoded = jwt.verify(token.toJwt(), 'secret');
      expect(decoded.exp - decoded.iat).toBe(100);
    });

    it('should create token with chat grant', function() {
      var token = new twilio.jwt.AccessToken(accountSid, keySid, 'secret');
      token.identity = 'ID@example.com';

      var grant = new twilio.jwt.AccessToken.ChatGrant();
      grant.serviceSid = 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      grant.endpointId = 'endpointId';
      grant.pushCredentialSid = 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      grant.deploymentRoleSid = 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      token.addGrant(grant);

      var decoded = jwt.verify(token.toJwt(), 'secret');
      expect(decoded.grants).toEqual({
        identity: 'ID@example.com',
        chat: {
          service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          deployment_role_sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          endpoint_id: 'endpointId',
          push_credential_sid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        }
      });
    });

    it('should create token with ip messaging grant', function() {
      var token = new twilio.jwt.AccessToken(accountSid, keySid, 'secret');
      token.identity = 'ID@example.com';

      var grant = new twilio.jwt.AccessToken.IpMessagingGrant();
      grant.serviceSid = 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      grant.endpointId = 'endpointId';
      grant.pushCredentialSid = 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      grant.deploymentRoleSid = 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      token.addGrant(grant);

      var decoded = jwt.verify(token.toJwt(), 'secret');
      expect(decoded.grants).toEqual({
        identity: 'ID@example.com',
        ip_messaging: {
          service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          deployment_role_sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          endpoint_id: 'endpointId',
          push_credential_sid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        }
      });
    });

    it('should create token with video grant', function() {
      var token = new twilio.jwt.AccessToken(accountSid, keySid, 'secret');
      token.identity = 'ID@example.com';

      var grant = new twilio.jwt.AccessToken.VideoGrant();
      grant.room = 'room';
      token.addGrant(grant);

      var decoded = jwt.verify(token.toJwt(), 'secret');
      expect(decoded.grants).toEqual({
        identity: 'ID@example.com',
        video: {
          room: 'room'
        }
      });
    });

    it('should create token with conversations grant', function() {
      var token = new twilio.jwt.AccessToken(accountSid, keySid, 'secret');
      token.identity = 'ID@example.com';

      var grant = new twilio.jwt.AccessToken.ConversationsGrant();
      grant.configurationProfileSid = 'VSxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
      token.addGrant(grant);

      var decoded = jwt.verify(token.toJwt(), 'secret');
      expect(decoded.grants).toEqual({
        identity: 'ID@example.com',
        rtc: {
          configuration_profile_sid: 'VSxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        }
      });
    });

    it('should create token with sync grant', function() {
      var token = new twilio.jwt.AccessToken(accountSid, keySid, 'secret');
      token.identity = 'ID@example.com';

      var grant = new twilio.jwt.AccessToken.SyncGrant();
      grant.serviceSid = 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      grant.endpointId = 'endpointId';
      token.addGrant(grant);

      var decoded = jwt.verify(token.toJwt(), 'secret');
      expect(decoded.grants).toEqual({
        identity: 'ID@example.com',
        data_sync: {
          service_sid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          endpoint_id: 'endpointId'
        }
      });
    });

    it('should create token with taskrouter grant', function() {
      var token = new twilio.jwt.AccessToken(accountSid, keySid, 'secret');
      token.identity = 'ID@example.com';

      var grant = new twilio.jwt.AccessToken.TaskRouterGrant();
      grant.workspaceSid = 'WSxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
      grant.workerSid = 'WKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
      grant.role = 'worker';
      token.addGrant(grant);

      var decoded = jwt.verify(token.toJwt(), 'secret');
      expect(decoded.grants).toEqual({
        identity: 'ID@example.com',
        task_router: {
          workspace_sid: 'WSxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          worker_sid: 'WKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          role: 'worker'
        }
      });
    });

    it('should create token with multiple grants', function() {
      var token = new twilio.jwt.AccessToken(accountSid, keySid, 'secret');
      token.identity = 'ID@example.com';

      var grant = new twilio.jwt.AccessToken.ChatGrant();
      grant.serviceSid = 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      grant.endpointId = 'endpointId';
      grant.pushCredentialSid = 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      grant.deploymentRoleSid = 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      token.addGrant(grant);

      grant = new twilio.jwt.AccessToken.SyncGrant();
      grant.serviceSid = 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      grant.endpointId = 'endpointId';
      token.addGrant(grant);

      grant = new twilio.jwt.AccessToken.VideoGrant();
      grant.room = 'CPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
      token.addGrant(grant);

      grant = new twilio.jwt.AccessToken.TaskRouterGrant();
      grant.workspaceSid = 'WSxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
      grant.workerSid = 'WKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
      grant.role = 'worker';
      token.addGrant(grant);

      var decoded = jwt.verify(token.toJwt(), 'secret');
      expect(decoded.grants).toEqual({
        identity: 'ID@example.com',
        chat: {
          service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          deployment_role_sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          endpoint_id: 'endpointId',
          push_credential_sid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        },
        data_sync: {
          service_sid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          endpoint_id: 'endpointId'
        },
        video: {
          room: 'CPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        },
        task_router: {
          workspace_sid: 'WSxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          worker_sid: 'WKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          role: 'worker'
        }
      });
    });

    describe('IpMessagingGrant', function() {
      describe('toPayload', function() {
        it('should set properties in the constructor', function() {
          var grant = new twilio.jwt.AccessToken.IpMessagingGrant({
            deploymentRoleSid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            serviceSid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            endpointId: 'endpointId',
            pushCredentialSid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          });
          expect(grant.toPayload()).toEqual({
            service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            deployment_role_sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            endpoint_id: 'endpointId',
            push_credential_sid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          });
        });

        it('should only populate set properties', function() {
          var grant = new twilio.jwt.AccessToken.IpMessagingGrant();
          expect(grant.toPayload()).toEqual({});

          grant.deploymentRoleSid = 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
          expect(grant.toPayload()).toEqual({
            deployment_role_sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          });

          grant.serviceSid = 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
          expect(grant.toPayload()).toEqual({
            service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            deployment_role_sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          });

          grant.endpointId = 'endpointId';
          expect(grant.toPayload()).toEqual({
            service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            deployment_role_sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            endpoint_id: 'endpointId'
          });

          grant.endpointId = undefined;
          grant.pushCredentialSid = 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
          expect(grant.toPayload()).toEqual({
            service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            deployment_role_sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            push_credential_sid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          });

          grant.endpointId = 'endpointId';
          expect(grant.toPayload()).toEqual({
            service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            deployment_role_sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            endpoint_id: 'endpointId',
            push_credential_sid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          });
        });
      });
    });

    describe('ChatGrant', function() {
      describe('toPayload', function() {
        it('should set properties in the constructor', function() {
          var grant = new twilio.jwt.AccessToken.ChatGrant({
            deploymentRoleSid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            serviceSid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            endpointId: 'endpointId',
            pushCredentialSid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          });
          expect(grant.toPayload()).toEqual({
            service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            deployment_role_sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            endpoint_id: 'endpointId',
            push_credential_sid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          });
        });

        it('should only populate set properties', function() {
          var grant = new twilio.jwt.AccessToken.ChatGrant();
          expect(grant.toPayload()).toEqual({});

          grant.deploymentRoleSid = 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
          expect(grant.toPayload()).toEqual({
            deployment_role_sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          });

          grant.serviceSid = 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
          expect(grant.toPayload()).toEqual({
            service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            deployment_role_sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          });

          grant.endpointId = 'endpointId';
          expect(grant.toPayload()).toEqual({
            service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            deployment_role_sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            endpoint_id: 'endpointId'
          });

          grant.endpointId = undefined;
          grant.pushCredentialSid = 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
          expect(grant.toPayload()).toEqual({
            service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            deployment_role_sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            push_credential_sid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          });

          grant.endpointId = 'endpointId';
          expect(grant.toPayload()).toEqual({
            service_sid: 'SRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            deployment_role_sid: 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            endpoint_id: 'endpointId',
            push_credential_sid: 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          });
        });
      });
    });

    describe('VoiceGrant', function () {
      it('should generate a grant', function() {
        var grant = new twilio.jwt.AccessToken.VoiceGrant({
          outgoingApplicationSid: 'AP123',
          outgoingApplicationParams: {
            foo: 'bar'
          },
          endpointId: 'id'
        });

        expect(grant.toPayload()).toEqual({
          outgoing: {
            application_sid: 'AP123',
            params: {
              foo: 'bar'
            }
          },
          endpoint_id: 'id'
        });
      });

      it('should set incoming.allow if incomingAllow === true', function() {
        var grant = new twilio.jwt.AccessToken.VoiceGrant({ incomingAllow: true });
        expect(grant.toPayload()).toEqual({ incoming: { allow: true } });
      });

      it('should not set incoming.allow if incomingAllow !== true', function() {
        var grant = new twilio.jwt.AccessToken.VoiceGrant({ incomingAllow: 'foo' });
        expect(grant.toPayload()).toEqual({ });
      });
    });

    describe('VideoGrant', function() {
      it('should only populate set properties', function() {
        var grant = new twilio.jwt.AccessToken.VideoGrant();
        expect(grant.toPayload()).toEqual({});

        grant.room = 'CPsid';
        expect(grant.toPayload()).toEqual({
          room: 'CPsid'
        });
      });
    });

    describe('SyncGrant', function() {
      describe('toPayload', function() {
        it('should only populate set properties', function() {
          var grant = new twilio.jwt.AccessToken.SyncGrant();
          expect(grant.toPayload()).toEqual({});

          grant.serviceSid = 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
          expect(grant.toPayload()).toEqual({
            service_sid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          });

          grant.endpointId = 'endpointId';
          expect(grant.toPayload()).toEqual({
            service_sid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            endpoint_id: 'endpointId'
          });

          grant.serviceSid = undefined;
          expect(grant.toPayload()).toEqual({
            endpoint_id: 'endpointId'
          });

        });
      });
    });

    describe('TaskRouterGrant', function() {
      describe('toPayload', function() {
        it('should only populate set properties', function() {
          var grant = new twilio.jwt.AccessToken.TaskRouterGrant();
          expect(grant.toPayload()).toEqual({});

          grant.workspaceSid = 'WSxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
          expect(grant.toPayload()).toEqual({
            workspace_sid: 'WSxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
          });

          grant.workerSid = 'WKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
          expect(grant.toPayload()).toEqual({
            workspace_sid: 'WSxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            worker_sid: 'WKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
          });

          grant.role = 'worker';
          expect(grant.toPayload()).toEqual({
            workspace_sid: 'WSxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            worker_sid: 'WKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            role: 'worker'
          });
        });
      });
    });
  });

});

var twilio = require('../index'),
    jwt = require('jwt-simple');

describe('The Scoped Authentication Token Object', function () {
    describe('constructor', function () {
        it('should allow for explicit construction of a scoped authentication token', function() {
            var c = new twilio.ScopedAuthenticationToken('SK123', 'AC123', 'Token1', 3600, [new twilio.Grant()]);

            expect(c).toBeDefined();
            expect(c.signingKeySid).toBe('SK123');
            expect(c.accountSid).toBe('AC123');
            expect(c.tokenId).toBe('Token1');
            expect(c.ttl).toBe(3600);
            expect(c.grants).toBeDefined();
            expect(c.grants.length).toBe(1);
            expect(c.grants[0].res).toBe('https://api.twilio.com/**');
            expect(c.grants[0].act[0]).toBe('*');
        });

        it('should allow for explicit construction of a scoped authentication token without a grant', function() {
            var c = new twilio.ScopedAuthenticationToken('SK123', 'AC123', 'Token1', 3600);

            expect(c).toBeDefined();
            expect(c.signingKeySid).toBe('SK123');
            expect(c.accountSid).toBe('AC123');
            expect(c.tokenId).toBe('Token1');
            expect(c.ttl).toBe(3600);
            expect(c.grants).toBeDefined();
            expect(c.grants.length).toBe(0);
        });

        it('should allow for explicit construction of a scoped authentication token without a token id', function() {
            var c = new twilio.ScopedAuthenticationToken('SK123', 'AC123');

            expect(c).toBeDefined();
            expect(c.signingKeySid).toBe('SK123');
            expect(c.accountSid).toBe('AC123');
            expect(c.tokenId).toBeDefined();
            expect(c.tokenId).not.toBeNaN();
            expect(c.ttl).toBe(3600);
            expect(c.grants).toBeDefined();
            expect(c.grants.length).toBe(0);
        });
    });

    describe('addGrant', function() {
        it('it should add a new grant to the set of grants', function() {
            var c = new twilio.ScopedAuthenticationToken('SK123', 'AC123', 'Token1', 3600, [new twilio.Grant()]);
            var grant = new twilio.Grant('https://taskrouter.twilio.com/**', [twilio.Grant.Action.ALL])
            c.addGrant(grant);

            expect(c.grants).toBeDefined();
            expect(c.grants.length).toBe(2);
            expect(c.grants[0].res).toBe('https://api.twilio.com/**');
            expect(c.grants[0].act[0]).toBe('*');
            expect(c.grants[1].res).toBe('https://taskrouter.twilio.com/**');
            expect(c.grants[1].act[0]).toBe('*');
        });
    });

    describe('generateToken', function() {
        it('should generate a valid JWT', function() {
            var c = new twilio.ScopedAuthenticationToken('SK123', 'AC123', 'Token1', 3600, [new twilio.Grant()]);

            var token = c.generateToken('secret');
            expect(token).toBeDefined();

            var decodedToken = jwt.decode(token, 'secret');
            expect(decodedToken).toBeDefined();
            expect(decodedToken.jti).toBe('Token1');
            expect(decodedToken.iss).toBe('SK123');
            expect(decodedToken.sub).toBe('AC123');
            expect(decodedToken.nbf).toBeDefined();
            expect(decodedToken.exp).toBeDefined();
            expect(decodedToken.nbf + 3600).toBe(decodedToken.exp);
            expect(decodedToken.grants).toBeDefined();
            expect(decodedToken.grants.length).toBe(1);
            expect(decodedToken.grants[0].res).toBe('https://api.twilio.com/**');
            expect(decodedToken.grants[0].act[0]).toBe('*');
        });

        it('should generate a valid JWT without an explicit grant', function() {
            var c = new twilio.ScopedAuthenticationToken('SK123', 'AC123', 'Token1', 3600);

            var token = c.generateToken('secret');
            expect(token).toBeDefined();

            var decodedToken = jwt.decode(token, 'secret');
            expect(decodedToken).toBeDefined();
            expect(decodedToken.jti).toBe('Token1');
            expect(decodedToken.iss).toBe('SK123');
            expect(decodedToken.sub).toBe('AC123');
            expect(decodedToken.nbf).toBeDefined();
            expect(decodedToken.exp).toBeDefined();
            expect(decodedToken.nbf + 3600).toBe(decodedToken.exp);
            expect(decodedToken.grants).toBeDefined();
            expect(decodedToken.grants.length).toBe(0);
        });

        it('should generate a valid JWT without a token id', function() {
            var c = new twilio.ScopedAuthenticationToken('SK123', 'AC123');

            var token = c.generateToken('secret');
            expect(token).toBeDefined();

            var decodedToken = jwt.decode(token, 'secret');
            expect(decodedToken).toBeDefined();
            expect(decodedToken.jti).toBeDefined();
            expect(decodedToken.iss).toBe('SK123');
            expect(decodedToken.sub).toBe('AC123');
            expect(decodedToken.nbf).toBeDefined();
            expect(decodedToken.exp).toBeDefined();
            expect(decodedToken.nbf + 3600).toBe(decodedToken.exp);
            expect(decodedToken.grants).toBeDefined();
            expect(decodedToken.grants.length).toBe(0);
        });
    });
});

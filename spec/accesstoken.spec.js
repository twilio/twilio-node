var twilio = require('../index'),
    jwt = require('jwt-simple');

describe('The Scoped Authentication Token Object', function () {
    describe('constructor', function () {
        it('should allow for explicit construction of a scoped authentication token', function() {
            var c = new twilio.AccessToken('SK123', 'AC123', 3600);

            expect(c).toBeDefined();
            expect(c.signingKeySid).toBe('SK123');
            expect(c.accountSid).toBe('AC123');
            expect(c.ttl).toBe(3600);
            expect(c.grants).toBeDefined();
            expect(c.grants.length).toBe(0);
        });

        it('should allow for explicit construction of a scoped authentication token without a grant', function() {
            var c = new twilio.AccessToken('SK123', 'AC123', 3600);

            expect(c).toBeDefined();
            expect(c.signingKeySid).toBe('SK123');
            expect(c.accountSid).toBe('AC123');
            expect(c.ttl).toBe(3600);
            expect(c.grants).toBeDefined();
            expect(c.grants.length).toBe(0);
        });

    });

    describe('addGrant', function() {
        it('it should allow the user to add grants', function() {
            var c = new twilio.AccessToken('SK123', 'AC123', 3600);
            c.addGrant('https://taskrouter.twilio.com/**', twilio.AccessToken.ACTION.ALL);
            c.addGrant('https://api.twilio.com/**', twilio.AccessToken.ACTION.HTTP.GET);

            expect(c.grants).toBeDefined();
            expect(c.grants.length).toBe(2);
            expect(c.grants[0].res).toBe('https://taskrouter.twilio.com/**');
            expect(c.grants[0].act[0]).toBe('*');
            expect(c.grants[1].res).toBe('https://api.twilio.com/**');
            expect(c.grants[1].act[0]).toBe('GET');
        });
    });

    describe('toJwt', function() {
        it('should generate a valid JWT', function() {
            var c = new twilio.AccessToken('SK123', 'AC123', 3600);

            var token = c.toJwt('secret');
            expect(token).toBeDefined();

            var decodedToken = jwt.decode(token, 'secret');
            expect(decodedToken).toBeDefined();
            expect(decodedToken.iss).toBe('SK123');
            expect(decodedToken.sub).toBe('AC123');
            expect(decodedToken.nbf).toBeDefined();
            expect(decodedToken.exp).toBeDefined();
            expect(decodedToken.nbf + 3600).toBe(decodedToken.exp);
            expect(decodedToken.grants).toBeDefined();
            expect(decodedToken.grants.length).toBe(0);
        });

        it('should generate a valid JWT without an explicit grant', function() {
            var c = new twilio.AccessToken('SK123', 'AC123', 3600);

            var token = c.toJwt('secret');
            expect(token).toBeDefined();

            var decodedToken = jwt.decode(token, 'secret');
            expect(decodedToken).toBeDefined();
            expect(decodedToken.iss).toBe('SK123');
            expect(decodedToken.sub).toBe('AC123');
            expect(decodedToken.nbf).toBeDefined();
            expect(decodedToken.exp).toBeDefined();
            expect(decodedToken.nbf + 3600).toBe(decodedToken.exp);
            expect(decodedToken.grants).toBeDefined();
            expect(decodedToken.grants.length).toBe(0);
        });

        it('should generate a valid JWT without a token id', function() {
            var c = new twilio.AccessToken('SK123', 'AC123');

            var token = c.toJwt('secret');
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

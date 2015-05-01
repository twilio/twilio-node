var twilio = require('../index');

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

    });
});

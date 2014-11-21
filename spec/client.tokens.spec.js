var twilio = require('../index');

describe('The Twilio REST Client Tokens resource', function () {
    var client = new twilio.RestClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('creates a new token with no parameters', function() {
        client.tokens.create();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Tokens',
            method:'POST',
            form:{}
        }, undefined);
    });

    it('creates a new token with a ttl', function() {
        client.tokens.create({
            ttl: 3600
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Tokens',
            method:'POST',
            form:{
                Ttl: 3600
            }
        }, undefined);
    });
});
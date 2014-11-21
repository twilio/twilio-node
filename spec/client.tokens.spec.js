var twilio = require('../index');

describe('The Twilio REST Client Tokens resource', function () {
    var accountSid = 'AC123';
    var client = new twilio.RestClient(accountSid, '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('posts to create a new ephemeral token from the master account', function () {
        client.tokens.create();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/' + accountSid + '/Tokens',
            method:'POST',
            form:{}
        }, undefined);
    });

    it('can set a ttl for an ephemeral token', function(){
        client.tokens.create({ttl: 3600});
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/' + accountSid + '/Tokens',
            method:'POST',
            form:{
              Ttl: 3600
            }
        }, undefined);
    });
});

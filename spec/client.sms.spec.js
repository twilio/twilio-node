var twilio = require('../index');

describe('The Twilio REST Client SMS resource', function () {
    var client = new twilio.RestClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('sends an SMS message using a Twilio number', function() {
        client.sendSms({
            To:'+14158675309',
            from:'+18008672811',
            body:'pants.'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/SMS/Messages',
            method:'POST',
            form:{
                To:'+14158675309',
                From:'+18008672811',
                Body:'pants.'
            }
        }, undefined);
    });

    it('gets details about a specific SMS message sent', function() {
        client.getSms('MM123');
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/SMS/Messages/MM123',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('gets a list of all SMS Messages, with query parameters', function() {
        client.listSms({
            from:'+16518675309'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/SMS/Messages',
            method:'GET',
            qs:{
                From:'+16518675309'
            }
        }, undefined);
    });
});
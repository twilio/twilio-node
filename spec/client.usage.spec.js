var twilio = require('../index');

describe('The Twilio REST Client Usage Records resource', function () {
    var client = new twilio.RestClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('gets a list of usage records for sms messages', function() {
        client.usage.records.list({
            category:'sms'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Usage/Records',
            method:'GET',
            qs:{
                Category:'sms'
            }
        }, undefined);
    });

    it('gets all usage records for the last month', function() {
        client.usage.records.lastMonth.list();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Usage/Records/LastMonth',
            method:'GET',
            qs:{}
        }, undefined);
    });
});
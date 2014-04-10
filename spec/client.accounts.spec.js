var twilio = require('../index');

describe('The Twilio REST Client Accounts resource', function () {
    var client = new twilio.RestClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('gets an unfiltered list of Accounts associated with this master account', function () {
        client.accounts.list();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('allows for the creation of subaccounts', function () {
        client.accounts.create({
            friendlyName:'TestAccountUno'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts',
            method:'POST',
            form:{
                FriendlyName:'TestAccountUno'
            }
        }, undefined);
    });

    it('provides a means of getting account details for a specific sid', function () {
        client.accounts('AC123').get();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('provides a means of updating and closing subaccounts', function () {
        client.accounts('AC123').update({
            status:'closed'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123',
            method:'POST',
            form:{
                Status:'closed'
            }
        }, undefined);
    });

});

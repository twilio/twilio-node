var twilio = require('../index');

describe('The Twilio REST Client Queues resource', function () {
    var client = new twilio.RestClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('creates a queue', function() {
        client.queues.create({
            friendlyName:'qq'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Queues',
            method:'POST',
            form:{
                FriendlyName:'qq'
            }
        }, undefined);
    });

    it('gets details for a given queue', function() {
        client.queues('QU123').get();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Queues/QU123',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('updates details for a given queue', function() {
        client.queues('QU123').update({
            maxSize:69
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Queues/QU123',
            method:'POST',
            form:{
                MaxSize:69
            }
        }, undefined);
    });

    it('gets a list of members for a given queue', function() {
        client.queues('QU123').members.get();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Queues/QU123/Members',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('gets the person at the front of the queue', function() {
        client.queues('QU123').members.front.get();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Queues/QU123/Members/Front',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('deletes a queue', function() {
        client.queues('QU123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Queues/QU123',
            method:'DELETE',
            form:{}
        }, undefined);
    });

});
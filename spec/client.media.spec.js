var config = require('../config'),
    twilio = require('../index');

describe('Twilio Media resource', function() {
    var client = new twilio.RestClient('AC123', '123');

    it('can retrieve media', function() {
        spyOn(client, 'request');
        client.media.list();
        expect(client.request).toHaveBeenCalled();
        expect(client.request).toHaveBeenCalledWith({
            'url': '/Accounts/AC123/Media',
            'method': 'GET',
            'qs': { }
        }, undefined);
    });

    it('cannot delete the media list instance', function() {
        expect(client.media.delete).toBeUndefined();
    });

    it('deletes the media instance resource', function() {
        spyOn(client, 'request');
        client.media('ME123').delete();
        expect(client.request).toHaveBeenCalled();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Media/ME123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });
});




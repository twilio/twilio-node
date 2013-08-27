var config = require('../config'),
    twilio = require('../index');

describe('Twilio Transcription resource', function() {
    var client = new twilio.RestClient(config.accountSid, config.authToken);

    it('calls the delete method', function() {
        spyOn(client, 'request');
        client.transcriptions("TR123").delete();
        expect(client.request).toHaveBeenCalled();
        expect(client.request).toHaveBeenCalledWith({
            'url': '/Accounts/' + config.accountSid + '/Transcriptions/TR123',
            'method': 'DELETE',
            'form': {}
        }, undefined);
    });
});


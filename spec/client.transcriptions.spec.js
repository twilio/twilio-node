var twilio = require('../index');

describe('Twilio Transcription resource', function() {
    var client = new twilio.RestClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('calls the delete method', function() {
        client.transcriptions('TR123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Transcriptions/TR123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

    it('calls the correct URL for transcriptions on a recording', function() {
        client.recordings("RE123").transcriptions.list();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Recordings/RE123/Transcriptions',
            method: 'GET',
            qs: {}
        }, undefined);
    });
});


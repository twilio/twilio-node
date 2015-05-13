var twilio = require('../index');

describe('The Twilio Conversations resource', function() {
    var client = new twilio.ConversationsClient('AC123', '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('fetches a conversation', function() {
        client.conversations('CV123').get();
        expect(client.request).toHaveBeenCalled();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Conversations/CV123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('fetches InProgress conversations', function() {
        client.conversations.inProgress.get();
        expect(client.request).toHaveBeenCalled();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Conversations/InProgress',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('fetches Completed conversations', function() {
        client.conversations.completed.get();
        expect(client.request).toHaveBeenCalled();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Conversations/Completed',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('fetches conversation participants', function() {
        client.conversations('CV123').participants.get();
        expect(client.request).toHaveBeenCalled();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Conversations/CV123/Participants',
            method: 'GET',
            qs: {}
        }, undefined);
    });
});

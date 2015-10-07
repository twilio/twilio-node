/**
 @module resources/conversations/Conversations
/**
 @module resources/conversations/Conversations
 The Twilio conversations Conversations Resource.
 */
var generate = require('../generate'),
    ListInstanceResource = require('../ListInstanceResource');

module.exports = function (client, accountSid) {
    var baseResourceUrl = '/Conversations';
    var inProgressBaseUrl = baseResourceUrl + '/InProgress';
    var completedBaseUrl = baseResourceUrl + '/Completed';

    //Instance requests
    function Conversations(sid) {
        conversationUrl = baseResourceUrl + '/' + sid;
        var resourceApi = {
            get:generate(client, 'GET', conversationUrl),
        };
        resourceApi.participants = function(participantSid) {
            var participantApi = {
                get:generate(client, 'GET', conversationUrl + '/Participants' + participantSid)
            };
            return participantApi;
        };
        resourceApi.participants.get = generate(client, 'GET', conversationUrl + '/Participants');
        resourceApi.participants.list = resourceApi.participants.get;

        return resourceApi;
    };

    Conversations.inProgress = {
        get:generate(client, 'GET', inProgressBaseUrl)
    };

    Conversations.completed = {
        get:generate(client, 'GET', completedBaseUrl)
    }

    generate.restFunctions(Conversations, client, ['GET'], baseResourceUrl);

    return Conversations;
};

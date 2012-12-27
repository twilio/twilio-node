/**
 @module resources/Queues
 The Twilio "Queues" Resource.
 */
var generate = require('./generate'),
    ListInstanceResource = require('./ListInstanceResource');

module.exports = function (client, accountSid) {
    var baseResourceUrl = '/Accounts/' + accountSid + '/Queues';

    //Instance requests
    function Queues(sid) {
        var resourceApi = {};

        //Add standard instance resource functions
        generate.restFunctions(resourceApi,client,['GET', 'POST', 'DELETE', {update:'POST'}], baseResourceUrl + '/' + sid);

        //Add special call queue sub resources
        resourceApi.members = ListInstanceResource(client, sid, 'Queues/Members',
            ['GET', 'POST', {update:'POST'}],
            ['GET']
        );

        //There's also a special resource for a call at the front of the queue, not specified by SID
        resourceApi.members.front.get = resourceApi.members('Front').get;
        resourceApi.members.front.post = resourceApi.members('Front').post;
        resourceApi.members.front.update = resourceApi.members('Front').update;

        return resourceApi;
    }

    //List requests
    generate.restFunctions(Queues, client, ['GET', 'POST', {create:'POST'}], baseResourceUrl);


    return Queues;
};

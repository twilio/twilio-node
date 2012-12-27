/**
 @module resources/Calls
 The Twilio "Calls" Resource.
 */
var generate = require('./generate');

module.exports = function (client, accountSid) {
    var baseResourceUrl = '/Accounts/' + accountSid + '/Calls';

    //Instance requests
    function Calls(sid) {
        var resourceApi = {};

        //Add standard instance resource functions
        generate.restFunctions(resourceApi,client,['GET','POST',{update:'POST'}], baseResourceUrl + '/' + sid);

        //Add in subresources
        resourceApi.recordings = {
            get: generate(client, 'GET', baseResourceUrl + '/' + sid + '/Recordings')
        };
        resourceApi.notifications = {
            get: generate(client, 'GET', baseResourceUrl + '/' + sid + '/Notifications')
        };

        resourceApi.recordings.list = resourceApi.recordings.get;
        resourceApi.notifications.list = resourceApi.notifications.get;

        return resourceApi;
    }

    //List requests
    generate.restFunctions(Calls, client, ['GET','POST',{create:'POST'}], baseResourceUrl);


    return Calls;
};

/**
 @module resources/Accounts
 The Twilio "Accounts" Resource.
 */
var _ = require('underscore'),
    generate = require('./generate'),
    ListInstanceResource = require('./ListInstanceResource');

module.exports = function (client) {

    //Define subresources on the accounts resource, with the given account SID
    function mixinResources(obj, sid) {
        //All other REST resources are based on account - some can simply be generated, others need additonal URL params
        var subresources = {
            availablePhoneNumbers:require('./AvailablePhoneNumbers')(client, sid),
            outgoingCallerIds:ListInstanceResource(client, sid, 'OutgoingCallerIds', 
                ['GET', 'POST', 'PUT', 'DELETE', { update:'PUT' }],
                ['GET', 'POST', { create:'POST' }]
            ),
            incomingPhoneNumbers:require('./IncomingPhoneNumbers')(client, sid),
            sms:{
                messages:ListInstanceResource(client, sid, 'SMS/Messages',
                    ['GET'],
                    ['GET', 'POST', {create:'POST'}]
                )
            },
            applications:ListInstanceResource(client, sid, 'Applications',
                ['GET', 'POST', 'DELETE', {update:'POST'}],
                ['GET', 'POST', {create:'POST'}]
            ),
            connectApps:ListInstanceResource(client, sid, 'ConnectApps', ['GET', 'POST'], ['GET']),
            authorizedConnectApps:ListInstanceResource(client, sid, 'AuthorizedConnectApps', ['GET'], ['GET']),
            calls:require('./Calls')(client, sid),
            conferences:require('./Conferences')(client, sid),
            queue:ListInstanceResource(client, sid, 'Queue', ['GET', 'POST', 'DELETE'], ['GET', 'POST']),
            shortCodes:ListInstanceResource(client, sid, 'ShortCodes', ['GET', 'POST'], ['GET']),
            recordings:require('./Recordings')(client, sid),
            transcriptions:require('./Transcriptions')(client, sid),
            notifications:ListInstanceResource(client, sid, 'Notifications', ['GET', 'DELETE'], ['GET'])
        };

        //Add resources to Accounts.* or Accounts(sid).*
        _.extend(obj, subresources);
    }

    /**
     The Twilio Accounts Resource
     @constructor
     @param {string} accountSid - The specific account for which to scope requests
     */
    function Accounts(accountSid) {
        //This is the resource for accounts aside from the default master account
        var resourceApi = {};

        //generate REST function calls for the appropriate resource
        generate.restFunctions(resourceApi, client, ['GET', 'PUT', 'POST'], '/Accounts/' + accountSid);
        resourceApi.update = resourceApi.put;

        //Mix in sub resources
        mixinResources(resourceApi, accountSid);

        //Return resource API, plus sub-resources
        return resourceApi;
    }

    //Create REST functions with the default account
    generate.restFunctions(Accounts, client, ['GET', 'POST'], '/Accounts');
    Accounts.create = Accounts.post;

    //Define other sub-resources of Accounts for master account
    mixinResources(Accounts, client.accountSid);

    return Accounts;
};

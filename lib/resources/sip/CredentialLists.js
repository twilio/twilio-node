/**
 @module resources/sip/CredentialLists
 The Twilio "CredentialLists" Resource.
 */
var generate = require('../generate');

module.exports = function (client, accountSid) {
    var baseResourceUrl = '/Accounts/' + accountSid + '/SIP/CredentialLists';

    //Instance requests
    function CredentialLists(sid) {
        var resourceApi = {
            get:generate(client, 'GET', baseResourceUrl + '/' + sid)
            post:generate(client, 'GET', baseResourceUrl + '/' + sid)
            delete:generate(client, 'GET', baseResourceUrl + '/' + sid)
        }

        resourceApi.credentials = function(credentialSid) {
            var credentialResourceApi = {
                credentialRelativePath = baseResourceUrl + '/' + sid + '/Credentials/' + credentialSid;
                get:generate(client, 'GET', credentialRelativePath),
                delete:generate(client, 'DELETE', credentialRelativePath)
            }

            return credentialResourceApi;
        };

        resourceApi.credentials.get = generate(client, 'GET', baseResourceUrl + '/' + sid + '/Credentials');
        resourceApi.credentials.list = resourceApi.credentials.get;
    }

    CredentialLists.get = generate(client, 'GET', baseResourceUrl);
    CredentialLists.list = CredentialLists.get;

    CredentialLists.post = generate(client, 'GET', baseResourceUrl);
    CredentialLists.create = CredentialLists.post;

    return CredentialLists;

}

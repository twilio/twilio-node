/**
 @module resources/sip/Domains
 The Twilio "Domains" Resource.
 */
var generate = require('../generate');

module.exports = function (client, accountSid) {
    var baseResourceUrl = '/Accounts/' + accountSid + '/SIP/Domains';

    //Instance requests
    function Domains(sid) {
        var resourceApi = {
            get:generate(client, 'GET', baseResourceUrl + '/' + sid)
        }

        resourceApi.ipAccessControlListMappings = function(ipAccessControlListMappingSid) {
            var ipAccessControlListMappingResourceApi = {
                ipAccessControlListMappingRelativePath = baseResourceUrl + '/' + sid + '/IpAccessControlListMappings/' + ipAccessControlListMappingSid;
                get:generate(client, 'GET', ipAccessControlListMappingRelativePath),
                delete:generate(client, 'DELETE', ipAccessControlListMappingRelativePath)
            }

            return ipAccessControlListMappingResourceApi;
        };

        resourceApi.credentialListMappings = function(credentialListMappingSid) {
            var credentialListMappingResourceApi = {
                credentialListMappingRelativePath = baseResourceUrl + '/' + sid + '/CredentialListMappings/' + credentialListMappingSid;
                get:generate(client, 'GET', credentialListMappingRelativePath),
                delete:generate(client, 'DELETE', credentialListMappingRelativePath)
            }

            return credentialListMappingResourceApi;
        };

        resourceApi.ipAccessControlListMappings.get = generate(client, 'GET', baseResourceUrl + '/' + sid + '/IpAccessControlListMappings');
        resourceApi.ipAccessControlListMappings.list = resourceApi.ipAccessControlListMappings.get;

        resourceApi.credentialListMappings.get = generate(client, 'GET', baseResourceUrl + '/' + sid + '/CredentialListMappings');
        resourceApi.credentialListMappings.list = resourceApi.credentialListMappings.get;

        return resourceApi;
    };

    Domains.get = generate(client, 'GET', baseResourceUrl);
    Domains.list = Domains.get;

    Domains.post = generate(client, 'POST', baseResourceUrl);
    Domains.create = Domains.post;

    return Domains;
}

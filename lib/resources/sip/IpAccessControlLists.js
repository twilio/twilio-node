/**
 @module resources/sip/IpAccessControlLists
 The Twilio "IpAccessControlLists" Resource.
 */
var generate = require('../generate');

module.exports = function (client, accountSid) {
    var baseResourceUrl = '/Accounts/' + accountSid + '/SIP/IpAccessControlLists';

    //Instance requests
    function IpAccessControlLists(sid) {
        var resourceApi = {
            get:generate(client, 'GET', baseResourceUrl + '/' + sid)
            post:generate(client, 'GET', baseResourceUrl + '/' + sid)
            delete:generate(client, 'GET', baseResourceUrl + '/' + sid)
        }

        resourceApi.ipAddresses = function(ipAddressSid) {
            var ipAddressResourceApi = {
                ipAddressRelativePath = baseResourceUrl + '/' + sid + '/IpAddresses/' + ipAddressSid;
                get:generate(client, 'GET', ipAddressRelativePath),
                delete:generate(client, 'DELETE', ipAddressRelativePath)
            }

            return ipAddressResourceApi;
        };

        resourceApi.ipAddresses.get = generate(client, 'GET', baseResourceUrl + '/' + sid + '/IpAddresses');
        resourceApi.ipAddresses.list = resourceApi.ipAddresses.get;
    }

    IpAccessControlLists.get = generate(client, 'GET', baseResourceUrl);
    IpAccessControlLists.list = IpAccessControlLists.get;

    IpAccessControlLists.post = generate(client, 'GET', baseResourceUrl);
    IpAccessControlLists.create = IpAccessControlLists.post;

    return IpAccessControlLists;

}

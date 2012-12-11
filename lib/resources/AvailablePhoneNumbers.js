/**
 @module resources/AvailablePhoneNumbers
 The Twilio "AvailablePhoneNumbers" Resource.
 */
var generate = require('./generate');

module.exports = function (client, accountSid) {
    var baseResourceUrl = '/Accounts/' + accountSid + '/AvailablePhoneNumbers';

    function AvailablePhoneNumbers(isoCode) {
        var resourceApi = {
            Local:{
                get:generate(client, 'GET', baseResourceUrl + '/' + isoCode + '/Local')
            },
            TollFree:{
                get:generate(client, 'GET', baseResourceUrl + '/' + isoCode + '/TollFree')
            }
        };
        return resourceApi;
    }

    return AvailablePhoneNumbers;
};

var generate = require('../generate');
var NextGenListResource = require('../NextGenListResource');

module.exports = function(client, serviceSid) {
    var baseUrl = '/Services/' + serviceSid + '/Channels'

    function Channels(sid) {

    }

    generate.require(Channels, client,
        ['GET', 'POST', {create: 'POST'}, {list: 'GET'}],
        baseUrl
    );

    return Channels
}
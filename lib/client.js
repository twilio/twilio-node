var sys = require('sys'),
    http = require('http'),
    querystring = require('querystring'),
    Buffer = require('buffer').Buffer;

var API_SERVER = 'api.twilio.com';
var API_VERSION = '2010-04-01';

function Client(sid, authToken, options) {
    if(!(this instanceof Client)) {
        return new Client(sid, authToken, options);
    }

    if(!sid) {
        throw new Error('Client must be passed a SID');
    }

    if(!authToken) {
        throw new Error('Client must be passed an authToken');
    }

    this.sid = sid;
    this.authToken = authToken;
    this.options = options;

    this.basicAuth = (new Buffer(sid + ':' + authToken)).toString('base64');
}

module.exports = Client;

Client.prototype.apiCall = function(path, method, params, options, suc, err, wholePath) {
    var self = this;

    method = method.toUpperCase();
    options = options || {};
    if(params) {
        if(typeof params != 'string') {
            params = querystring.stringify(params);
        }
    }

    var headers = options.headers || {},
        client = http.createClient(443, API_SERVER, true),
        fullPath = '';
    
    if(wholePath) {
        fullPath = path;
    } else {
        fullPath = '/' + API_VERSION + '/Accounts/' + self.sid;
        if(path.length > 0) {
            if(path[0] != '/') {
                fullPath += '/';
            }
            fullPath += path;
        }
        if(fullPath.substr(fullPath.length - 5) != '.json') {
            fullPath += '.json';
        }
    }

    if(params && method == 'POST') {
        headers['Content-Length'] = params.length;
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
    } else if(params && method == 'GET') {
        fullPath += '?' + params;
    }

    headers.Host = API_SERVER;
    headers.Authorization = "Basic " + self.basicAuth;

    console.log('Requesting ' + method + ' ' + fullPath + ' '  + headers);
    var request = client.request(method, fullPath, headers);
    request.on('response', function(response) {
        var responseChunks = [];
        response.setEncoding('utf8');

        response.on('data', function(chunk) {
            responseChunks.push(chunk);
        });

        response.on('end', function() {
            var body = responseChunks.join('');
            
            // Try to deserialize if possible
            try {
                body = JSON.parse(body);
            } catch(err) {
                // Do nothing. Probably wasn't JSON. We'll just return the string.
            }
            typeof suc == 'function' && suc(body);
        });

        if(typeof err == 'function') {
            response.on('error', err);
        }
    });
    
    if(params && method == 'POST') {
        request.write(params);
    }
    request.end();
};

Client.prototype.getAccountInfo = function(suc, err) {
    this.apiCall('', 'GET', null, null, suc, err);
};

// Params may include: FriendlyName
Client.prototype.setAccountInfo = function(params, suc, err) {
    this.apiCall('', 'POST', params, null, suc, err);
};

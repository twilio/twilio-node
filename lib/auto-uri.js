var express = require('express');

/**
 * AutoUri: A class for automatedly provisioning URIs and executing callbacks
 * when those URIs are requested.
 *
 * @param {String} hostname: The hostname of the server running this app.
 * @param {Map} opts: Options
 * opts.port: The port to run the server on. Default: 31337.
 * opts.basePath: The basePath for all URIs. Default: 'autoprovision'.
 */
function AutoUri(hostname, opts) {
    var self = this;

    if(!hostname) {
        throw new Error('AutoUri requires hostname');
    }
    
    opts = opts || {};
    self.hostname = hostname;
    self.port = opts.port || 31337;
    self.basePath = opts.basePath || 'autoprovision';
    self.provisionedPaths = {
        'GET': {},
        'POST': {},
        'DELETE': {},
        'PUT': {}
    };

    self.express = express.createServer(
        express.logger(),
        express.bodyParser()
    );
    self.express.listen(self.port);

    self.baseUri = 'http://' + self.hostname + ':' + self.port + '/' + self.basePath + '/';
    self.expressPath = '/' + self.basePath + '/:index';
    self.index = 0;

    self.handleRequest = function(type) {
        return function(req, res) {
            if(!req.params.index) {
                throw new Error('Unprovisioned uri requested: No index param.');
            }

            var index = req.params.index,
                callback = self.provisionedPaths[type][index];

            if(!callback) {
                throw new Error('Unprovisioned uri requested: Unknown index.');
            }
            
            callback(req, res);
        };
    };
    
    self.express.get(self.expressPath, self.handleRequest('GET'));
    self.express.post(self.expressPath, self.handleRequest('POST'));
    self.express.del(self.expressPath, self.handleRequest('PUT'));
    self.express.put(self.expressPath, self.handleRequest('DELETE'));
};

module.exports.AutoUri = AutoUri;

/**
 * addCallback: Create a new URI and callback when it's requested
 *
 * @param {String} method: The HTTP method for this callback.
 * @param {Function} fn: The callback
 * @param {Map} opts: Options:
 * opts.customIndex: A custom index for this URI. Default is incrementing int.
 * opts.expireTimeout: Specify a timeout for removing this callback (ms)
 * opts.maxRequests: Specify a maximum number of requests before expiring. > 0
 */
AutoUri.prototype.addCallback = function(method, fn, opts) {
    if(!method || !fn) {
        throw new Error('addCallback requires method and fn parameters');
    }
    
    if(!method.match(/get|post|put|delete/i)) {
        throw new Error('Method must be either GET, PUT, POST, or DELETE');
    }

    var self = this,
        index = '';
    
    method = method.toUpperCase();
    opts = opts || {};

    if(opts.customIndex) {
        index = opts.customIndex;
    } else {
        index = self.index;
        self.index += 1;
    }

    if(opts.maxRequests) {
        var callback = fn,
            numReqs = 0;
        
        fn = function(req, res) {
            callback(req, res);
            numReqs += 1;
            if(numReqs == opts.maxRequests) {
                delete self.provisionedPaths[method][index];
            }
        };
    }

    self.provisionedPaths[method][index] = fn;

    if(opts.expireTimeout) {
        setTimeout(function() {
            delete self.provisionedPaths[method][index];
        }, opts.expireTimeout);
    }
    
    return self.baseUri + index;
};

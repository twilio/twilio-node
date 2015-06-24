var jwt = require('jwt-simple');

function CapabilityAPI(accountSid, authToken, version, friendlyName) {
    this.accountSid = accountSid;
    this.authToken = authToken;
    this.version = version;
    this.friendlyName = friendlyName;
    this.policies = [];
}

CapabilityAPI.prototype.addPolicy = function(url, method, allowed, queryFilter, postFilter) {
    var policy = {
        url: url,
        method: method
    };

    if (queryFilter) {
        policy.query_filter = queryFilter;
    } else {
        policy.query_filter = {};
    }

    if (postFilter) {
        policy.post_filter = postFilter;
    } else {
        policy.post_filter = {};
    }

    if (typeof allowed !== 'undefined') {
        policy.allow = allowed;
    } else {
        policy.allow = true;
    }
    this.policies.push(policy);
}

CapabilityAPI.prototype.allow = function(url, method, queryFilter, postFilter) {
    this.addPolicy(url, method, true, queryFilter, postFilter);
}

CapabilityAPI.prototype.deny = function(url, method, queryFilter, postFilter) {
    this.addPolicy(url, method, false, queryFilter, postFilter);
}

CapabilityAPI.prototype.generate = function(ttl, extraAttributes) {
    var payload = {
        iss: this.accountSid,
        exp: (Math.floor(new Date() / 1000) + (ttl || 3600)),
        version: this.version,
        friendly_name: this.friendlyName,
        policies: this.policies,
    };
    for (var key in extraAttributes) {
        payload[key] = extraAttributes[key];
    }
    return jwt.encode(payload, this.authToken);
}

module.exports = CapabilityAPI;

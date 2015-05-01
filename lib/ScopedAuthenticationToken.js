function ScopedAuthenticationToken(signingKeySid, accountSid, tokenId, ttl, grants) {
    this.signingKeySid = signingKeySid;
    this.accountSid = accountSid;
    this.tokenId = typeof tokenId !== 'undefined' ? tokenId : signingKeySid.concat("-", Math.floor(Date.now() / 1000));
    this.ttl = typeof ttl !== 'undefined' ? ttl : 3600;
    this.grants = typeof grants !== 'undefined' ? grants : [];
};

ScopedAuthenticationToken.prototype.addGrant = function (grant) {
    this.grants.push(grant);
};

ScopedAuthenticationToken.prototype.generateToken = function (secret) {
    var payload = {
        jti: this.tokenId,
        iss: this.signingKeySid,
        sub: this.accountSid,
        nbf: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + this.ttl,
        grants: this.grants
    };

    return jwtEncode(payload, secret, {cty: 'twilio-sat;v=1'});
};

/**
 * Encode jwt
 *
 * @param {Object} payload
 * @param {String} key
 * @param {Object} headers
 * @param {String} algorithm
 * @return {String} token
 * @api public
 */
function jwtEncode(payload, key, headers, algorithm) {
    // Check key
    if (!key) {
        throw new Error('Require key');
    }

    // Check algorithm, default is HS256
    if (!algorithm) {
        algorithm = 'HS256';
    }

    var signingMethod = algorithmMap[algorithm];
    var signingType = typeMap[algorithm];
    if (!signingMethod || !signingType) {
        throw new Error('Algorithm not supported');
    }

    // header, typ is fixed value.
    var header = { typ: 'JWT', alg: algorithm };
    // Merge provided headers
    if (typeof headers !== 'undefined') {
        for (var attributeName in headers) {
            if (headers.hasOwnProperty(attributeName)) {
                header[attributeName] = headers[attributeName];
            }
        }
    }

    // create segments, all segment should be base64 string
    var segments = [];
    segments.push(base64urlEncode(JSON.stringify(header)));
    segments.push(base64urlEncode(JSON.stringify(payload)));
    segments.push(sign(segments.join('.'), key, signingMethod, signingType));

    return segments.join('.');
}

module.exports = ScopedAuthenticationToken;

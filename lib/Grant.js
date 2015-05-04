function Grant(resource, actions) {
    this.res = typeof resource !== 'undefined' ? resource : "https://api.twilio.com/**";
    this.act = typeof actions !== 'undefined' ? actions : [Grant.Action.ALL];
};

Grant.Action = Object.freeze({ALL: "*", DELETE: "DELETE", GET: "GET", POST: "POST", PUT: "PUT"});

module.exports = Grant;

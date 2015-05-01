var Action = Object.freeze({ALL: "*", DELETE: "DELETE", GET: "GET", POST: "POST", PUT: "PUT"});

function Grant(resource, actions) {
    this.res = typeof resource !== 'undefined' ? resource : "https://api.twilio.com/**";
    this.act = typeof actions !== 'undefined' ? actions : [Action.ALL];
};

module.exports = Action;
module.exports = Grant;

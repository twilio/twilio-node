exports.initializeTokens = function (obj, type, sid, tkn){
    // Initialize from environment variables, if present
    if (!sid || !tkn) {
        if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
            obj.accountSid = process.env.TWILIO_ACCOUNT_SID;
            obj.authToken = process.env.TWILIO_AUTH_TOKEN;
        }
        else {
            throw type + ' requires an Account SID and Auth Token set explicitly ' +
                'or via the TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN environment variables';
        }
    }
    else {
        //if auth token/SID passed in manually, trim spaces
        obj.accountSid = sid.trim();
        obj.authToken = tkn.trim();
    }
}

//process data and make available in a more JavaScripty format
function processKeys(source) {
    if (_.isObject(source)) {
        Object.keys(source).forEach(function(key) {

            if (key === 'total' || key === 'last_page_uri' || key === 'num_pages') {
                delete source[key];
            }

            //Supplement underscore values with camel-case
            if (key.indexOf('_') > 0) {
                var cc = key.replace(/_([a-z])/g, function (g) {
                    return g[1].toUpperCase()
                });
                source[cc] = source[key];
            }

            //process any nested arrays...
            if (Array.isArray(source[key])) {
                source[key].forEach(processKeys);
            }
            else if (_.isObject(source[key])) {
                processKeys(source[key]);
            }
        });

        //Look for and convert date strings for specific keys
        ['startDate', 'endDate', 'dateCreated', 'dateUpdated', 'startTime', 'endTime', 'dateSent'].forEach(function(dateKey) {
            if (source[dateKey]) {
                source[dateKey] = new Date(source[dateKey]);
            }
        });
    }
}


exports.initializeTokens = function (sid, tkn){
    // Initialize from environment variables, if present
    if (!sid || !tkn) {
        if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
            this.accountSid = process.env.TWILIO_ACCOUNT_SID;
            this.authToken = process.env.TWILIO_AUTH_TOKEN;
        }
        else {
            throw 'Capability requires an Account SID and Auth Token set explicitly ' +
                'or via the TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN environment variables';
        }
    }
    else {
        //if auth token/SID passed in manually, trim spaces
        this.accountSid = sid.trim();
        this.authToken = tkn.trim();
    }
}

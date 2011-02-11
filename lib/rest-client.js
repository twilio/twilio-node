var https = require('https'),
    querystring = require('querystring'),
    Buffer = require('buffer').Buffer;

var API_SERVER = 'api.twilio.com';
var API_VERSION = '2010-04-01';

function RestClient(sid, authToken) {
    if(!(this instanceof RestClient)) {
        return new RestClient(sid, authToken);
    }

    if(!sid) {
        throw new Error('RestClient must be passed a SID');
    }

    if(!authToken) {
        throw new Error('RestClient must be passed an authToken');
    }

    this.sid = sid;
    this.authToken = authToken;
    
    this.basicAuth = (new Buffer(sid + ':' + authToken)).toString('base64');
}

module.exports = RestClient;

RestClient.prototype.apiCall = function(method, path, options, suc, err, wholePath) {
    var self = this;

    method = method.toUpperCase();
    options = options || {};
    
    var params = options.params,
        headers = options.headers || {},
        fullPath = '';

    if(params) {
        if(typeof params != 'string') {
            params = querystring.stringify(params);
        }
    }

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

    var request = https.request({ host: API_SERVER, port: 443, method: method, path: fullPath, headers: headers }, function(response) {
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

//-----------------------------------------------------------------------------
//--------------------- Accounts
//-----------------------------------------------------------------------------

/**
 * getAccountInfo: Request your account information
 */
RestClient.prototype.getAccountInfo = function(suc, err) {
    this.apiCall('GET', '', null, suc, err);
};

/**
 * updateAccountInfo: Update your account information
 *
 * @param {Map} params: Map of information to update. Currently, only
 * FriendlyName is supported.
 */
RestClient.prototype.updateAccountInfo = function(params, suc, err) {
    this.apiCall('POST', '', {params: params}, suc, err);
};

//-----------------------------------------------------------------------------
//--------------------- Available Phone Numbers
//-----------------------------------------------------------------------------

// Country can be either 'CA' or 'US' (until Twilio gets more areas serviced)
// Possible filters: AreaCode, Contains, InRegion, InPostalCode, NearLatLong,
// InLata, InRateCenter, Distance
RestClient.prototype.getAvailableLocalNumbers = function(country, filters, suc, err) {
    if(!country) {
        throw new Error('Country argument required');
    }
    this.apiCall('GET', '/AvailablePhoneNumbers/' + country + '/Local',
                 {params: filters}, suc, err);
};

// Country can be either 'CA' or 'US'
// Possible filters: Contains
RestClient.prototype.getAvailableTollFreeNumbers = function(country, filters, suc, err) {
    if(!country) {
        throw new Error('Country argument required');
    }
    this.apiCall('GET', '/AvailablePhoneNumbers/' + country + '/Local',
                 {params: filters}, suc, err);
};

//-----------------------------------------------------------------------------
//--------------------- Outgoing Caller Ids 
//-----------------------------------------------------------------------------

RestClient.prototype.getOutgoingCallerId = function(sid, suc, err) {
    if(!sid) {
        throw new Error('Outgoing SID argument required');
    }
    this.apiCall('GET', '/OutgoingCallerIds/' + sid, null, suc, err);
};

RestClient.prototype.updateOutgoingCallerId = function(sid, params, suc, err) {
    if(!sid) {
        throw new Error('Outgoing SID argument required');
    }
    this.apiCall('POST', '/OutgoingCallerIds/' + sid, null, suc, err);
};

RestClient.prototype.deleteOutgoingCallerId = function(sid, suc, err) {
    if(!sid) {
        throw new Error('Outgoing SID argument required');
    }
    this.apiCall('DELETE', '/OutgoingCallerIds/' + sid, null, suc, err);
};

// Possible filters: PhoneNumber, FriendlyName
RestClient.prototype.getOutgoingCallerIdList = function(filters, suc, err) {
    this.apiCall('GET', '/OutgoingCallerIds', {params: filters}, suc, err);
};

// Add an outgoing caller ID. This will cause Twilio to call the specified
// number to verify it. CallDelay specifies a delay (<=60) for the call.
// Possible params: FriendlyName, CallDelay
RestClient.prototype.addOutgoingCallerId = function(num, params, suc, err) {
    if(!num) {
        throw new Error('Phone number argument required');
    }
    params = params || {};
    params.PhoneNumber = num;
    
    this.apiCall('POST', '/OutgoingCallerIds', {params: params}, suc, err);
};


//-----------------------------------------------------------------------------
//--------------------- Incoming Phone Numbers
//-----------------------------------------------------------------------------

// Possible filters: PhoneNumber, FriendlyName
RestClient.prototype.getIncomingNumbers = function(filters, suc, err) {
    this.apiCall('GET', '/IncomingPhoneNumbers', {params: filters}, suc, err);
};

RestClient.prototype.getIncomingNumber = function(sid, suc, err) {
    if(!sid) {
        throw new Error('Sid argument required');
    }
    this.apiCall('GET', '/IncomingPhoneNumbers/' + sid, null, suc, err);
};

RestClient.prototype.updateIncomingNumber = function(sid, params, suc, err) {
    if(!sid) {
        throw new Error('Sid argument required');
    }
    this.apiCall('POST', '/IncomingPhoneNumbers/' + sid, {params: params}, suc, err);
};

RestClient.prototype.deleteIncomingNumber = function(sid, suc, err) {
    if(!sid) {
        throw new Error('Sid argument required');
    }
    this.apiCall('DELETE', '/IncomingPhoneNumbers/' + sid, null, suc, err);
};

// Possible optional params: FriendlyName, VoiceUrl, VoiceMethod, VoiceFallbackUrl,
// StatusCallback, StatusCallbackMethod, SmsUrl, SmsMethod, SmsFallbackUrl, 
// SmsFallbackMethod, VoiceCallerIdLookup
RestClient.prototype.provisionIncomingNumber = function(num, areaCode, params, suc, err) {
    params = params || {};
    params.PhoneNumber = num;
    params.AreaCode = areaCode;
    this.apiCall('POST', '/IncomingPhoneNumbers', {params: params}, suc, err);
};

//-----------------------------------------------------------------------------
//--------------------- Calls
//-----------------------------------------------------------------------------

/**
 * getCallList: Request a list of call instance resources
 *
 * @param {Map} filters: An optional map of possible filters. See:
 * http://www.twilio.com/docs/api/2010-04-01/rest/call
 */
RestClient.prototype.getCallList = function(filters, suc, err) {
    this.apiCall('GET', '/Calls', null, suc, err);
};

/**
 * getCallInstance: Request a call instance resource
 *
 * @param {String} sid: The sid of the call to fetch
 */
RestClient.prototype.getCallInstance = function(sid, suc, err) {
    if(!sid) {
        throw new Error('Sid argument required');
    }
    
    this.apiCall('GET', '/Calls/' + sid, {params: filters}, suc, err);
};

/**
 * makeCall: Place a call
 *
 * @param {String} from: The number the call is originating from. Must be a
 * Twilio number of a valid outgoing caller ID for your account, in E.164
 * format (i.e., +18674451795)
 * @param {String} to: The number of the callee. Same format as from.
 * @param {String} url: The callback URL that Twilio will request when the
 * call is picked up.
 * @param {Map} opts: A map of optional parameters. See:
 * http://www.twilio.com/docs/api/2010-04-01/rest/making_calls
 */
RestClient.prototype.makeOutgoingCall = function(from, to, url, opts, suc, err) {
    if(!from || !to || !url) {
        throw new Error('From, to, and URL arguments required');
    }
    
    opts = opts || {};
    opts.Url = url;
    opts.From = from;
    opts.To = to;

    this.apiCall('POST', '/Calls', {params: opts}, suc, err);
};

//-----------------------------------------------------------------------------
//--------------------- SMS 
//-----------------------------------------------------------------------------

/**
 * getSmsInstance: Request an SMS instance resource
 *
 * @param {String} sid: The sid of the message to retrieve.
 */
RestClient.prototype.getSmsInstance = function(messageSid, suc, err) {
    this.apiCall('GET', '/SMS/Messages/' + messageSid, null, suc, err);
};

/**
 * getSmsList: Request a list of SMS instance resources
 *
 * @param {Map} filters: An optional map of filters. See:
 * http://www.twilio.com/docs/api/2010-04-01/rest/sms
 */
RestClient.prototype.getSmsList = function(filters, suc, err) {
    this.apiCall('GET', '/SMS/Messages', {params: filters}, suc, err);
};

/**
 * sendSms: Send a new SMS message
 *
 * @param {String} from: The outgoing callerId. Must be a valid twilio/outgoing
 * caller id number, in E.164 format (i.e., +18674451795)
 * @param {String} to: The number of the message target. Same format as from.
 * @param {String} body: The body of the SMS. Must be < 160 chars.
 * @param {String} uri: The optional status callback URI.
 */
RestClient.prototype.sendSms = function(from, to, body, uri, suc, err) {
    if(!from || !to || !body) {
        throw new Error('From, To, and Body argument');
    }
    var params = {
        From: from,
        To: to,
        Body: body
    };
    
    if(uri) {
        params.StatusCallback = uri;
    }
    this.apiCall('POST', '/SMS/Messages', {params: params}, suc, err);
};

//-----------------------------------------------------------------------------
//--------------------- Recordings
//-----------------------------------------------------------------------------

/**
 * getRecordingUri: Since recording requests always return the actual binary
 * data (either as Wav or MP3), we don't actually handle making this request.
 * That the recording URIs are public (i.e., they require no basic auth), this
 * means that a user can just go and GET the recording themselves, and do what
 * they will with the reply, which is the recording file itself.
 *
 * @param {String} sid: The sid of the recording to fetch.
 * @param {String} encoding: The encoding of the resultant file. May be either
 * 'mp3' or 'wav'. Default is 'mp3'.
 */
RestClient.prototype.getRecordingUri = function(sid, encoding, suc, err) {
    if(!sid) {
        throw new Error('Sid argument required');
    }
    return 'https://' + API_SERVER + '/' + API_VERSION + '/' 
        + self.sid + '/Recordings/' + sid;
};

/**
 * deleteRecording: Delete a recording.
 *
 * @param {String} sid: The sid of the recording to delete
 */
RestClient.prototype.deleteRecording = function(sid, suc, err) {
    if(!sid) {
        throw new Error('Sid argument required');
    }

    this.apiCall('DELETE', '/Recordings/' + sid, null, suc, err);
};

/**
 * getRecordingList: Request a list of all recordings associated with account
 *
 * @param {Map} filters: An optional map of filters. Possible filters are:
 * CallSid: The sid of the call that originated the recording
 * DateCreated: The date of the call that originated the recording
 * See: http://www.twilio.com/docs/api/2010-04-01/rest/recording
 */
RestClient.prototype.getRecordingList = function(filters, suc, err) {
    this.apiCall('GET', '/Recordings', {params: filters}, suc, err);
};

//-----------------------------------------------------------------------------
//--------------------- Transcriptions 
//-----------------------------------------------------------------------------

/**
 * getTranscriptionList: Request a list of all transcriptions
 */
RestClient.prototype.getTranscriptionList = function(suc, err) {
    this.apiCall('GET', '/Transcriptions', null, suc, err);
};

/**
 * getTranscriptionInstance: Request a transcription instance resource
 *
 * @param {String} sid: The transcription sid.
 */
RestClient.prototype.getTranscriptionInstance = function(sid, suc, err) {
    if(!sid) {
        throw new Error('Sid argument required');
    }

    this.apiCall('GET', '/Transcriptions/' + sid, null, suc, err);
};

/**
 * getTranscriptionText: Request only the text of a transcription
 *
 * @param {String} sid: The transcription sid.
 */
RestClient.prototype.getTranscriptionText = function(sid, suc, err) {
    if(!sid) {
        throw new Error('Sid argument required');
    }

    this.apiCall('GET', '/Transcriptions/' + sid + '.txt', null, suc, err);
};

//-----------------------------------------------------------------------------
//--------------------- Notifications
//-----------------------------------------------------------------------------

/**
 * getNotificationList: Get a list of notifications assicated with this account
 *
 * @param {Map} filters: An optional list of filters.
 * See: http://www.twilio.com/docs/api/2010-04-01/rest/notification
 */
RestClient.prototype.getNotificationList = function(filters, suc, err) {
    this.apiCall('GET', '/Notifications', null, suc, err);
};

/**
 * getNotificationInstance: Get a notification instance resource
 *
 * @param {sid}: The sid of the notification.
 */
RestClient.prototype.getNotificationInstance = function(sid, suc, err) {
    if(!sid) {
        throw new Error('Sid argument required');
    }

    this.apiCall('GET', '/Notifications/' + sid, null, suc, err);
};

/**
 * deleteNotification: Delete a notification associated with this account
 *
 * @param {String} sid: The sid of the notification to delete.
 */
RestClient.prototype.deleteNotification = function(sid, suc, err) {
    if(!sid) {
        throw new Error('Sid argument required');
    }

    this.apiCall('DELETE', '/Notifications/' + sid, null, suc, err);
};

var RestClient = require('./rest-client'),
    Twiml = require('./twiml'),
    AutoUri = require('./auto-uri').AutoUri,
    EventEmitter = require('events').EventEmitter,
    sys = require('sys');

function Client(sid, authToken, hostname, opts) {
    if(!(this instanceof Client)) {
        return new Client(sid, authToken, hostname, opts);
    }

    if(!sid || !authToken || !hostname) {
        throw new Error('sid, authToken, and hostname are required');
    }
    
    this.rest = new RestClient(sid, authToken);
    this.autoUri = new AutoUri(hostname, opts);
};

module.exports.Client = Client;

/**
 * getIncomingPhoneNumber: Return a new IncomingPhoneNumber object
 *
 * @param {String} num: The phone number or phone number sid.
 */
Client.prototype.getIncomingPhoneNumber = function(num) {
    return new IncomingPhoneNumber(this.rest, this.autoUri, num);
};

/**
 * IncomingPhoneNumber class: Represents an incoming phone number
 *
 * @param {Object} client: An instantiated RestClient object
 * @param {Object} autoUri: An instance of the AutoUri class
 * @param {String} num: The phone number/phone number's sid
 */
function IncomingPhoneNumber(client, autoUri, num) {
    if(!(this instanceof IncomingPhoneNumber)) {
        return new IncomingPhoneNumber(client, autoUri, num);
    }

    if(!client || !num || !autoUri) {
        throw new Error('client and num and autoUri arguments required');
    }

    EventEmitter.call(this);
    
    this.client = client;
    this.autoUri = autoUri;
    this.attrs = {};

    if(num.match(/^PN/)) {
        this.attrs.sid = num;
    } else {
        this.attrs.phoneNumber = num;
    }
    
};

sys.inherits(IncomingPhoneNumber, EventEmitter);

/**
 * getNumberDetails: Retrieve the details for this phone number
 *
 * @param {Function} fn: Callback for completion
 */
IncomingPhoneNumber.prototype.getNumberDetails = function(fn) {
    var self = this;

    function populate(numberDetails) {
        self.attrs.friendlyName = numberDetails.friendly_name;
        self.attrs.phoneNumber = numberDetails.phone_number;
        self.attrs.voiceUrl = numberDetails.voice_url;
        self.attrs.voiceMethod = numberDetails.voice_method;
        self.attrs.voiceFallbackUrl = numberDetails.voice_fallback_url;
        self.attrs.voiceFallbackMethod = numberDetails.voice_fallback_method;
        self.attrs.statusCallback = numberDetails.status_callback;
        self.attrs.statusCallbackMethod = numberDetails.status_callback_method;
        self.attrs.smsUrl = numberDetails.sms_url;
        self.attrs.smsMethod = numberDetails.sms_method;
        self.attrs.smsFallbackMethod = numberDetails.sms_fallback_method;
        self.attrs.voiceCallerIdLookup = numberDetails.voice_caller_idlookup;
        self.attrs.capabilities = numberDetails.capabilities;
        self.attrs.sid = numberDetails.sid;

        typeof fn == 'function' && fn();
    }

    if(self.sid) {
        self.client.getIncomingNumber(self.sid, function(resp) {
            populate(resp);
        });
    } else {
        // Passed in an actual number, gotta look it up.
        self.client.getIncomingNumbers({PhoneNumber: self.attrs.phoneNumber},
            function(resp) {
                var num = resp && resp.incoming_phone_numbers && 
                    resp.incoming_phone_numbers[0];
                
                if(!num) {
                    throw new Error('Could not get number ' + 
                        self.attrs.phoneNumber);
                }
                
                populate(num);
            }
        );
    }
};

/**
 * setup: Configure the incoming number to start emitting events
 *
 * @param {Function} fn: Called on completion
 */
IncomingPhoneNumber.prototype.setup = function(fn) {
    var self = this;

    function handleRequest(event) {
        return function(req, res) {
            var reqParams = req.body;
            self.emit(event, reqParams, (new Twiml.Response(res)));
        };
    }

    function configure() {
        var update = {};
        
        if(self.attrs.capabilities.sms) {
            update.SmsUrl = self.autoUri.addCallback('POST', handleRequest('incomingSms'));
        }
        
        if(self.attrs.capabilities.voice) {
            update.VoiceUrl = self.autoUri.addCallback('POST', handleRequest('incomingCall'));
            update.StatusCallback = self.autoUri.addCallback('POST', handleRequest('callStatus'));
        }
        self.client.updateIncomingNumber(self.attrs.sid, update, 
            function() {
                typeof fn == 'function' && fn();
            }
        );
    };

    if(!self.attrs.capabilities) {
        self.getNumberDetails(function() {
            configure();
        });
    } else {
        configure();
    }
};

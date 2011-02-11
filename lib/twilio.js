var RestClient = require('./rest-client'),
    Twiml = require('./twiml'),
    AutoUri = require('./auto-uri').AutoUri,
    EventEmitter = require('events').EventEmitter,
    util = require('util');

function Client(sid, authToken, hostname, opts) {
    if(!(this instanceof Client)) {
        return new Client(sid, authToken, hostname, opts);
    }

    if(!sid || !authToken || !hostname) {
        throw new Error('sid, authToken, and hostname are required');
    }

    // This is a global so that Twiml can access it as well.
    // Probably a better class structure would eliminate this.
    autoUri = new AutoUri(hostname, opts);
    RestClient.call(this, sid, authToken);
};

util.inherits(Client, RestClient);
module.exports = Client;

/**
 * getPhoneNumber: Return a new PhoneNumber object
 *
 * @param {String} num: The phone number or phone number sid.
 */
Client.prototype.getPhoneNumber = function(num, opts) {
    return new PhoneNumber(this, num, opts);
};

/**
 * PhoneNumber class: Represents an incoming phone number
 *
 * @param {Object} client: An instantiated RestClient object
 * @param {String} num: The phone number/phone number's sid
 */
function PhoneNumber(client, num, opts) {
    var self = this;
    
    if(!(this instanceof PhoneNumber)) {
        return new PhoneNumber(client, num);
    }

    if(!client || !num) {
        throw new Error('client and num arguments required');
    }

    EventEmitter.call(this);
    
    this.client = client;
    this.attrs = {};
    this.opts = opts || {};

    if(num.match(/^PN/)) {
        this.attrs.sid = num;
    } else {
        this.attrs.phoneNumber = num;
    }
    
    function handleEvent(event) {
        return function(req, res) {
            var reqParams = req.body;
            self.emit(event, reqParams, (new Twiml.Response(res)));
        };
    }

    this.on('newListener', function(listener) {
        var update = {};

        if(listener == 'incomingSms') {
            if(!self.attrs.capabilities.sms) {
                throw new Error('Cannot add listener for incomingSms to this phone number. ' +
                    'It does not support SMS.');
            }

            update.SmsUrl = autoUri.addCallback('POST', handleEvent('incomingSms'));
        } else if(listener == 'incomingCall') {
            if(!self.attrs.capabilities.voice) {
                throw new Error('Cannot add listener for incomingCall to this phone number. ' +
                    'It does not support voice.');
            }

            update.VoiceUrl = autoUri.addCallback('POST', handleEvent('incomingCall'));
        } else if(listener == 'callStatus') {
            if(!self.attrs.capabilities.voice) {
                throw new Error('Cannot add listener for callStatus to this phone number. ' +
                    'It does not support voice.');
            }

            update.StatusCallback = autoUri.addCallback('POST', handleEvent('callStatus'));
        }

        self.client.updateIncomingNumber(self.attrs.sid, update);
    });
};

util.inherits(PhoneNumber, EventEmitter);

/**
 * getNumberDetails: Retrieve the details for this phone number
 *
 * @param {Function} fn: Callback for completion
 */
PhoneNumber.prototype.getNumberDetails = function(fn) {
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
PhoneNumber.prototype.setup = function(fn) {
    var self = this;

    function handleRequest(event) {
        return function(req, res) {
            var reqParams = req.body;
            self.emit(event, reqParams, (new Twiml.Response(res)));
        };
    }

    if(!self.attrs.capabilities) {
        self.getNumberDetails(fn);
    } else {
        typeof fn == 'function' && fn();
    }
};

function OutgoingCall(from, to, opts, restClient) {
    // An outgoing call with emit: callAnswered, callEnded
    this.rest = restClient;
    this.from = from;
    this.to = to;
    this.opts = opts || {};

    EventEmitter.call(this);
};

util.inherits(OutgoingCall, EventEmitter);

OutgoingCall.prototype.setup = function(fn) {
    var self = this;

    var answeredUri = autoUri.addCallback('POST', function(req, res) {
        self.emit('answered', req.body, (new Twiml.Response(res)));
    });
    
    var endedUri = autoUri.addCallback('POST', function(req, res) {
        self.emit('ended', req.body, (new Twiml.Response(res)));
    });
    
    this.opts.StatusCallback = endedUri;
    this.opts.StatusCallbackMethod = 'POST';

    this.rest.makeOutgoingCall(this.from, this.to, answeredUri, this.opts, function(res) {
        self.callDetails = res;
        fn(self);
    });
};

PhoneNumber.prototype.makeCall = function(to, opts, fn) {
    var call = new OutgoingCall(this.attrs.phoneNumber, to, opts, this.client);
    call.setup(fn);
};

function OutgoingSms(from, to, body, opts, restClient) {
    this.rest = restClient;
    this.from = from;
    this.to = to;
    this.body = body;
    this.opts = opts || {};

    EventEmitter.call(this);
};

util.inherits(OutgoingSms, EventEmitter);

OutgoingSms.prototype.setup = function(fn) {
    var self = this;

    var statusUri = autoUri.addCallback('POST', function(req, res) {
        self.emit('processed', req.body, (new Twiml.Response(res)));
    });

    this.opts.StatusCallback = statusUri;
    this.rest.sendSms(this.from, this.to, this.body, statusUri, function(res) {
        self.smsDetails = res;
        fn(self);
    });
};

PhoneNumber.prototype.sendSms = function(to, body, opts, fn) {
    var sms = new OutgoingSms(this.attrs.phoneNumber, to, body, opts, this.client);
    sms.setup(fn);
};

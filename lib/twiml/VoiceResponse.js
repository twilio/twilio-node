'use strict';

var builder = require('xmlbuilder');

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/your_response
 *
 * @constructor
 */
function VoiceResponse() {
  this.response = builder.create('Response').dec('1.0', 'UTF-8');
}

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/dial
 *
 * @param {object} attributes - ...
 * @param {boolean} [attributes.hangupOnStar] hangup on star key press
 * @param {number} [attributes.timeout] call dial timeout
 * @param {number} [attributes.timeLimit] call time limit
 * @param {string} [attributes.action] call action
 * @param {string} [attributes.method] (GET, POST)
 * @param {string} [attributes.callerId] caller id
 * @param {string} [attributes.record] (do-not-record, record-from-ringing, record-from-answer)
 * @param {string} [attributes.trim] (trim-silence, do-not-trim)
 * @param {string} [number] phone number to dial
 *
 * @returns Dial
 */
VoiceResponse.prototype.dial = function(attributes, number) {
  return new Dial(this.response.ele('Dial', attributes, number));
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/enqueue
 *
 * @param {object} attributes - ...
 * @param {string} [attributes.action] url to hit
 * @param {string} [attributes.method] (GET, POST)
 * @param {string} [attributes.waitUrl] url to hit while waiting
 * @param {string} [attributes.waitUrlMethod] (GET, POST)
 * @param {string} [attributes.workflowSid] workflow to use
 * @param {string} name name of the queue
 */
VoiceResponse.prototype.enqueue = function(attributes, name) {
  this.response.ele('Enqueue', attributes, name);
};


/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/enqueue
 *
 * @param {object} attributes - ...
 * @param {string} [attributes.action] url to hit
 * @param {string} [attributes.method] (GET, POST)
 * @param {string} [attributes.waitUrl] url to hit while waiting
 * @param {string} [attributes.waitUrlMethod] (GET, POST)
 * @param {string} [attributes.workflowSid] workflow to use
 */
VoiceResponse.prototype.enqueueTask = function(attributes) {
  return new EnqueueTask(this.response.ele('Enqueue', attributes));
};


/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/gather
 *
 * @param {object} attributes - ...
 * @param {number} [attributes.timeout] max time to wait
 * @param {number} [attributes.numDigits] number of digits to gather
 * @param {string} [attributes.action] url to hit
 * @param {string} [attributes.method] (GET, POST)
 * @param {string} [attributes.finishOnKey] finish request on key
 *
 * @returns Gather
 */
VoiceResponse.prototype.gather = function(attributes) {
  return new Gather(this.response.ele('Gather', attributes));
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/hangup
 */
VoiceResponse.prototype.hangup = function() {
  this.response.ele('Hangup');
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/leave
 */
VoiceResponse.prototype.leave = function() {
  this.response.ele('Leave');
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/pause
 *
 * @param {object} attributes - ...
 * @param {number} [attributes.length] time in seconds to pause
 */
VoiceResponse.prototype.pause = function(attributes) {
  this.response.ele('Pause', attributes);
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/play
 *
 * @param {object} attributes - ...
 * @param {number} [attributes.loop] times to loop
 * @param {number} [attributes.digits] play DTMF tones during a call
 * @param {string} body url of file to play
 */
VoiceResponse.prototype.play = function(attributes, body) {
  this.response.ele('Play', attributes, body);
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/record
 *
 * @param {object} attributes - ...
 * @param {boolean} [attributes.transcribe] transcribe the call
 * @param {boolean} [attributes.playBeep] play a beep
 * @param {number} [attributes.timeout] timeout to end after silence
 * @param {number} [attributes.maxLength] max length of the recording
 * @param {string} [attributes.action] url to hit after finished recording
 * @param {string} [attributes.method] (GET, POST)
 * @param {string} [attributes.finishOnKey] finish recording on key press
 * @param {string} [attributes.transcribeCallback] url to hit with transcribed recording
 * @param {string} [attributes.trim] (trim-silence, do-not-trim)
 */
VoiceResponse.prototype.record = function(attributes) {
  this.response.ele('Record', attributes);
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/redirect
 *
 * @param {object} attributes - ...
 * @param {string} [attributes.method] (GET, POST)
 * @param {string} [body] url to redirect to
 */
VoiceResponse.prototype.redirect = function(attributes, body) {
  this.response.ele('Redirect', attributes, body);
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/reject
 *
 * @param {object} attributes - ...
 * @param {string} [attributes.reason] (rejected, busy)
 */
VoiceResponse.prototype.reject = function(attributes) {
  this.response.ele('Reject', attributes);
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/say
 *
 * @param {object} attributes - ...
 * @param {number} [attributes.loop] number of times to loop
 * @param {string} [attributes.language] language of the text
 * @param {string} [attributes.voice] (man, woman, alice)
 * @param {string} body text to say
 */
VoiceResponse.prototype.say = function(attributes, body) {
  this.response.ele('Say', attributes, body);
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/sms
 *
 * @param {object} attributes - ...
 * @param {string} [attributes.to] number to send sms
 * @param {string} [attributes.from] number to send from
 * @param {string} [attributes.method] (GET, POST)
 * @param {string} [attributes.action] url to make request
 * @param {string} [attributes.statusCallback] url to make request with result sms status
 * @param {string} body message to send
 */
VoiceResponse.prototype.sms = function(attributes, body) {
  this.response.ele('Sms', attributes, body);
};

/**
 * Convert to TwiML
 */
VoiceResponse.prototype.toString = function() {
  return this.response.end();
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/dial
 *
 * @constructor
 * @param {object} dial dial xml object
 */
function Dial(dial) {
  this.dial = dial;
}

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/numb
 *
 * @param {object} attributes - ...
 * @param {string} [attributes.sendDigits] play DTMF tones when the call is answered
 * @param {string} [attributes.url] url for TwiML document
 * @param {string} [attributes.method] (GET, POST)
 * @param {string} [attributes.statusCallbackEvent] events Twilio should webhook on
 * @param {string} [attributes.statusCallback] url to hit with status events
 * @param {string} [attributes.statusCallbackMethod] (GET, POST)
 * @param {string} number phone number to dial
 */
Dial.prototype.number = function(attributes, number) {
  this.dial.ele('Number', attributes, number);
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/client
 *
 * @param {object} attributes - ...
 * @param {method} [attributes.method] (GET, POST)
 * @param {string} [attributes.url] client url
 * @param {string} [attributes.statusCallbackEvent] events Twilio should webhook on
 * @param {string} [attributes.statusCallbackMethod] (GET, POST)
 * @param {string} [attributes.statusCallback] url to hit with status events
 * @param {string} client name of client
 */
Dial.prototype.client = function(attributes, client) {
  this.dial.ele('Client', attributes, client);
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/sip
 *
 * @param {object} attributes - ...
 * @param {string} [attributes.username] sip username
 * @param {string} [attributes.password] sip password
 * @param {string} [attributes.url] call screening url
 * @param {string} [attributes.method] (GET, POST)
 * @param {string} [attributes.statusCallbackEvent] events Twilio should webhook on
 * @param {string} [attributes.statusCallback] url to hit with status events
 * @param {string} [attributes.statusCallbackMethod] (GET, POST)
 * @param {string} address sip address
 */
Dial.prototype.sip = function(attributes, address) {
  this.dial.ele('Sip', attributes, address);
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/conference
 *
 * @param {object} attributes - ...
 * @param {boolean} [attributes.muted] mute the conference
 * @param {boolean} [attributes.startConferenceOnEnter] start the conference when somebody joins
 * @param {boolean} [attributes.endConferenceOnExit] end the conference on exit
 * @param {number} [attributes.maxParticipants] max number of people in the conference
 * @param {string} [attributes.beep] (true, false, onEnter, onExit)
 * @param {string} [attributes.record] (do-not-record, record-from-start)
 * @param {string} [attributes.trim] (trim-silence, do-not-trim)
 * @param {string} [attributes.waitMethod] (GET, POST)
 * @param {string} [attributes.waitUrl] url to hit while waiting
 * @param {string} [attributes.eventCallbackUrl] url to hit when events occur
 * @param {string} conference conference name
 */
Dial.prototype.conference = function(attributes, conference) {
  this.dial.ele('Conference', attributes, conference);
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/queue
 *
 * @param {object} attributes - ...
 * @param {string} [attributes.url] url of queue
 * @param {string} [attributes.method] (GET, POST)
 * @param {string} [attributes.reservationSid] TaskRouter reservation sid
 * @param {string} [attributes.postWorkActivitySid] TaskRouter worker activity sid
 * @param {string} queue name of the queue
 */
Dial.prototype.queue = function(attributes, queue) {
  this.dial.ele('Queue', attributes, queue);
};


/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/enqueue
 *
 * @param {object} enqueueTask enqueue xml object
 */
function EnqueueTask(enqueueTask) {
  this.enqueueTask = enqueueTask;
}

/**
 * TwiML wrapper for a TaskRouter Task
 *
 * @param {object} attributes - ...
 * @param {number} [attributes.priority] task priority
 * @param {number} [attributes.timeout] task timeout
 * @param {string} body task body
 */
EnqueueTask.prototype.task = function(attributes, body) {
  this.enqueueTask.ele('Task', attributes, body);
};


/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/gather
 *
 * @constructor Gather
 * @param {object} gather gather xml object
 */
function Gather(gather) {
  this.gather = gather;
}

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/say
 *
 * @param {object} attributes - ...
 * @param {number} [attributes.loop] number of times to loop
 * @param {string} [attributes.language] language of the text
 * @param {string} [attributes.voice] (man, woman, alice)
 * @param {string} body text to say
 */
Gather.prototype.say = function(attributes, body) {
  this.gather.ele('Say', attributes, body);
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/play
 *
 * @param {object} attributes - ...
 * @param {number} [attributes.loop] times to loop
 * @param {number} [attributes.digits] play DTMF tones during a call
 * @param {string} url url of file to play
 */
Gather.prototype.play = function(attributes, url) {
  this.gather.ele('Play', attributes, url);
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/pause
 *
 * @param {object} attributes - ...
 * @param {number} [attributes.length] time in seconds to pause
 */
Gather.prototype.pause = function(attributes) {
  this.gather.ele('Pause', attributes);
};


module.exports = VoiceResponse;

/**
 @module twilio

 A helper library for interaction with the Twilio REST API,
 generation of TwiML markup, and creation of capability tokens for
 use with the Twilio Client SDK.
 */

var RestClient = require('./RestClient');

function initializer(sid,tkn) {
    return new RestClient(sid, tkn);
}

initializer.RestClient = RestClient;
initializer.Capability = require('./Capability');
initializer.TwimlResponse = require('./TwimlResponse');

//public module interface is a function, which passes through to RestClient constructor
module.exports = initializer;

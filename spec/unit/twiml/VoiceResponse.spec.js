'use strict';

process.noDeprecation = true;

var VoiceResponse = require('../../../lib/twiml/VoiceResponse');

describe('create voice response TwiML', function() {

  it('should serialize empty response', function() {
    var actual = new VoiceResponse();
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response/>');
  });

  it('should serialize dial', function() {
    var actual = new VoiceResponse();
    actual.dial({
      hangupOnStar: true,
      timeout: 5,
      method: 'GET',
      trim: 'do-not-trim'
    }, '+18584611234');
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Dial hangupOnStar="true" timeout="5" method="GET" trim="do-not-trim">+18584611234</Dial></Response>');
  });

  it('should serialize nested dial', function() {
    var actual = new VoiceResponse();
    var dial = actual.dial({
      hangupOnStar: true
    });
    dial.sip({
      method: 'GET',
      statusCallback: 'www.twilio.ca'
    }, 'sip:url');
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Dial hangupOnStar="true"><Sip method="GET" statusCallback="www.twilio.ca">sip:url</Sip></Dial></Response>');
  });

  it('should serialize nested dial sim', function() {
    var actual = new VoiceResponse();
    var dial = actual.dial({
      hangupOnStar: true
    });
    dial.sim('DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Dial hangupOnStar="true"><Sim>DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Sim></Dial></Response>');
  });

  it('should serialize enqueue', function() {
    var actual = new VoiceResponse();
    actual.enqueue({
      action: 'www.twilio.com',
      method: 'GET'
    }, 'foobar');
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Enqueue action="www.twilio.com" method="GET">foobar</Enqueue></Response>');
  });

  it('should serialize gather', function() {
    var actual = new VoiceResponse();
    var gather = actual.gather({
      timeout: 5,
      finishOnKey: 'abcd'
    });
    gather.say({
      loop: 2
    }, 'hello world!');
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Gather timeout="5" finishOnKey="abcd"><Say loop="2">hello world!</Say></Gather></Response>');
  });

  it('should serialize hangup', function() {
    var actual = new VoiceResponse();
    actual.hangup();
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Hangup/></Response>');
  });

  it('should serialize leave', function() {
    var actual = new VoiceResponse();
    actual.leave();
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Leave/></Response>');
  });

  it('should serialize pause', function() {
    var actual = new VoiceResponse();
    actual.pause({
      length: 5
    });
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Pause length="5"/></Response>');
  });

  it('should serialize play', function() {
    var actual = new VoiceResponse();
    actual.play({
      loop: 2,
      digits: '123'
    }, 'www.twilio.com');
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Play loop="2" digits="123">www.twilio.com</Play></Response>');
  });

  it('should serialize record', function() {
    var actual = new VoiceResponse();
    actual.record({
      transcribe: true,
      maxLength: 100,
      method: 'GET',
      transcribeCallback: 'www.twilio.ca'
    });
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Record transcribe="true" maxLength="100" method="GET" transcribeCallback="www.twilio.ca"/></Response>');
  });

  it('should serialize redirect', function() {
    var actual = new VoiceResponse();
    actual.redirect({
      method: 'GET'
    }, 'www.twilio.ca');
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Redirect method="GET">www.twilio.ca</Redirect></Response>');
  });

  it('should serialize reject', function() {
    var actual = new VoiceResponse();
    actual.reject({
      reason: 'busy'
    });
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Reject reason="busy"/></Response>');
  });

  it('should serialize say', function() {
    var actual = new VoiceResponse();
    actual.say({
      loop: 2,
      lagnauge: 'en',
      voice: 'man'
    }, 'hello world');
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Say loop="2" lagnauge="en" voice="man">hello world</Say></Response>');
  });

  it('should serialize sms', function() {
    var actual = new VoiceResponse();
    actual.sms({
      to: '+11234567890',
      from: '+10987654321',
      statusCallback: 'www.twilio.ca'
    }, 'hello world');
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Sms to="+11234567890" from="+10987654321" statusCallback="www.twilio.ca">hello world</Sms></Response>');
  });

  it('should serialize enqueue task', function () {
    var actual = new VoiceResponse();
    var enqueue = actual.enqueue({
      method: 'POST'
    });
    enqueue.task({
      priority: 1,
      timeout: 4
    }, 'foo');

    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Enqueue method="POST"><Task priority="1" timeout="4">foo</Task></Enqueue></Response>');
  });

  it('should serialize multiple blocks', function() {
    var actual = new VoiceResponse();
    var dial = actual.dial({
      timeout: 5
    });
    dial.number({}, '+11234567890');
    actual.reject();
    actual.redirect({}, 'www.twilio.com');
    actual.pause({
      length: 5
    });
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Dial timeout="5"><Number>+11234567890</Number></Dial><Reject/><Redirect>www.twilio.com</Redirect><Pause length="5"/></Response>');
  });

  it('should serialize array attributes as space delimited', function() {
    var actual = new VoiceResponse();
    actual.dial().number({ statusCallbackEvents: ['initiated', 'ringing'] }, '+11234567890');

    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Dial><Number statusCallbackEvents="initiated ringing">+11234567890</Number></Dial></Response>');
  });

  it('should escape special characters', function() {
    var actual = new VoiceResponse();
    actual.dial().number({ statusCallback: 'https://example.com?action=getTwiml&param=dial' }, '+11234567890');

    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Dial><Number statusCallback="https://example.com?action=getTwiml&amp;param=dial">+11234567890</Number></Dial></Response>');
  });

  it('should allow adding arbitrary text to leaf nodes', function() {
    var actual = new VoiceResponse();
    actual.hangup().addText('extra text');
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Hangup>extra text</Hangup></Response>');
  });

  it('should allow mixed text/element content', function() {
    var actual = new VoiceResponse();
    actual.addText('before');
    actual.leave();
    actual.addText('after');

    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response>before<Leave/>after</Response>');
  });

  it('should allow generic child nodes', function () {
    var actual = new VoiceResponse();
    actual
      .addChild('Ninja', {sword: 'always'})
      .addText('John');

    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Ninja sword="always">John</Ninja></Response>');
  });

  it('should allow children of child nodes', function () {
    var actual = new VoiceResponse();
    actual
      .dial({}, '+10000000000')
      .addChild('Ninja', {sword: 'always'});

    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Dial>+10000000000<Ninja sword="always"/></Dial></Response>');
  });

  it('should render attributes with dashes', function() {
    var actual = new VoiceResponse();
    actual.say().ssmlSayAs({'interpret-as': 'spell-out', role: 'yymmdd'}, 'Words to speak');

    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Say><say-as interpret-as="spell-out" role="yymmdd">Words to speak</say-as></Say></Response>');
  });

  it('should render namespaced attributes', function() {
    var actual = new VoiceResponse();
    actual.say().ssmlLang({'xml:lang': 'fr-FR'}, 'Bonjour!');

    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Say><lang xml:lang="fr-FR">Bonjour!</lang></Say></Response>');
  });

  it('should render deprecated methods', function() {
    var legacy = new VoiceResponse();
    legacy.refer().referSip('foo');

    var renamed = new VoiceResponse();
    renamed.refer().sip('foo');

    expect(legacy.toString()).toEqual(renamed.toString());
  });
});

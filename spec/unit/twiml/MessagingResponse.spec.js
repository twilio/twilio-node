'use strict';

process.noDeprecation = true;

var MessagingResponse = require('../../../lib/twiml/MessagingResponse');

describe('create messaging response TwiML', function() {

  it('should serialize empty response', function() {
    var actual = new MessagingResponse();
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response/>');
  });

  it('should serialize a single message', function() {
    var actual = new MessagingResponse();
    actual.message({
      to: '18885551234',
      from: '18885554321'
    }, 'foobar');
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Message to="18885551234" from="18885554321">foobar</Message></Response>');
  });

  it('should serialize multiple messages', function() {
    var actual = new MessagingResponse();
    actual.message({
      to: '18885551234',
      from: '18885554321'
    }, 'foobar');
    actual.message({
      to: '11234567890',
      from: '10987654321'
    });
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Message to="18885551234" from="18885554321">foobar</Message><Message to="11234567890" from="10987654321"/></Response>');
  });

  it('should serialize ia nested message', function() {
    var actual = new MessagingResponse();
    var message = actual.message();
    message.body('foobar');
    message.media('https://twilio.com');
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Message><Body>foobar</Body><Media>https://twilio.com</Media></Message></Response>');
  });

  it('should serialize a redirect', function() {
    var actual = new MessagingResponse();
    actual.redirect('https://twilio.com');
    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Redirect>https://twilio.com</Redirect></Response>');
  });

  it('should allow generic child nodes', function() {
    var actual = new MessagingResponse();
    actual
      .addChild('Ninja', {sword: 'always'})
      .addText('John');

    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Ninja sword="always">John</Ninja></Response>');
  });

  it('should allow children of child nodes', function() {
    var actual = new MessagingResponse();
    actual.message({
      to: '+10000000000',
      from: '+11111111111',
    }, 'Some message')
    .addChild('Ninja', {sword: 'always'});

    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response><Message to="+10000000000" from="+11111111111">Some message<Ninja sword="always"/></Message></Response>');
  });

  it('should allow mixed generic and text node children', function() {
    var actual = new MessagingResponse();
    actual.addText('before');
    actual.addChild('Child').addText('content');
    actual.addText('after');

    expect(actual.toString()).toEqual('<?xml version="1.0" encoding="UTF-8"?><Response>before<Child>content</Child>after</Response>');
  });
});

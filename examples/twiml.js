/* 
 NOTE: For now, these are for demo purposes, they won't actually run as written.
 Working test are found in the ../spec directory
 */

var twilio = require('../lib');

var response = new twilio.TwimlResponse();

response.say('Welcome To Twilio!');
response.gather({ timeout:30 }, function () {
    this.say('Please enter a digit')
        .play('http://myhost.com/waiting.mp3');
});

console.log(response.toString());
/*
 <?xml version="1.0" encoding="UTF-8"?>
 <Response>
 <Say>Welcome To Twilio!</Say>
 <Gather timeout="30">
 <Say>Please enter a digit</Say>
 <Play>http://myhost.com/waiting.mp3</Play>
 </Gather>
 </Response>
 */
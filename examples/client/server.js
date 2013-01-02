//Dependenices
var express = require('express'),
    connect = require('connect'),
    twilio = require('../../index'), //or "twilio" if installed from npm
    config = require('../../config');

//Simple express app setup
var app = express.createServer();
app.use(express.static(__dirname + '/public'));
app.use(connect.bodyParser());
app.set('view engine', 'ejs');

//Quick Start Example 1 - Make an outbound call
function qs1(request, response) {
    var capability = new twilio.Capability(config.accountSid, config.authToken);

    //This is a TwiML app SID configured with a voice URL
    //https://www.twilio.com/user/account/apps
    capability.allowClientOutgoing('APd0aa702e9a16856c36d4476075cc212c');

    // Render an EJS template with the token and page title in context
    // EJS template is found in views/qs1.ejs
    response.render('qs1', {
        title:'Hello Monkey 1',
        token:capability.generate(1)
    });
}
app.get('/', qs1);
app.get('/qs1', qs1);

//Quick Start Example 2 - Hang up a call
app.get('/qs2', function(request, response) {
    var capability = new twilio.Capability(config.accountSid, config.authToken);
    capability.allowClientOutgoing('APd0aa702e9a16856c36d4476075cc212c');

    response.render('qs2', {
        title:'Hello Monkey 2',
        token:capability.generate()
    });
});

//Quick Start Example 3 - Accept an incoming call
app.get('/qs3', function(request, response) {
    var capability = new twilio.Capability(config.accountSid, config.authToken);
    capability.allowClientOutgoing('APd0aa702e9a16856c36d4476075cc212c');
    capability.allowClientIncoming('jenny');

    response.render('qs3', {
        title:'Hello Monkey 3',
        token:capability.generate()
    });
});

//Quick Start Example 4 - Make outgoing calls from the browser
app.get('/qs4', function(request, response) {
    var capability = new twilio.Capability(config.accountSid, config.authToken);
    capability.allowClientOutgoing('APd0aa702e9a16856c36d4476075cc212c');
    capability.allowClientIncoming('jenny');

    response.render('qs4', {
        title:'Hello Monkey 4',
        token:capability.generate()
    });
});

//Start an HTTP server, listening on port 8080
app.listen(8080, function() {
    console.log('Listening on 8080');
});

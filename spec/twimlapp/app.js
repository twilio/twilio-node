/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path'),
    twilio = require('twilio');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

//Play a song off of this server
app.post('/play', function(req, res) {
    var resp = new twilio.TwimlResponse();

    resp.play('http://twiml.aws.af.cm/bell.mp3');

    res.type('text/xml');
    res.send(resp.toString());
});

//Create a conference call for the node.js client test
app.post('/conferences/create', function(req, res) {
    var resp = new twilio.TwimlResponse();

    resp.dial(function() {
        this.conference('testConference');
    });

    res.type('text/xml');
    res.send(resp.toString());
});

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});

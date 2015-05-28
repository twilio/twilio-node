var	should = require('should'),
	config = null,
	Twilio = null;

describe("Twilio", function()
{
	it("should have a config file setup", function(done)
	{
		config = require("../config.js");
		Twilio = require("../index.js")( config.accountSid, config.authToken );
		done();
	});
	
	it("should send a message", function(done)
	{
		Twilio.sendMessage({
            to: config.to,
            from: config.from,
            body: "This is a test"
        }, function(err)
		{
			should.not.exist(err);
			done();
		});
	});
	
	it("should send a message when mediaUrl is undefined", function(done)
	{
		Twilio.sendMessage({
            to: config.to,
            from: config.from,
            body: "This is a test2",
			mediaUrl: undefined
        }, function(err)
		{
			should.not.exist(err);
			done();
		});
	});

	
});
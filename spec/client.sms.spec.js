var config = require('../config'),
	twilio = require('../index');

describe('The Twilio REST Client SMS resource', function() {
	//create a client with a valid account SID and authToken for live testing
	var client = new twilio.RestClient(config.accountSid, config.authToken);
	
	/*
	it('gets a list of SMS messages for the default account', function(done) {
		client.Accounts.SMS.Messages.get({
			To:'+16515556666'
		}, function(err, data, response) {
			console.log(data);
			done();
		});
	});
	
	it('gets a list of SMS messages for a given account', function(done) {
		client.Accounts(config.accountSid).SMS.Messages.get({
			To:'+16519998800'
		}, function(err, data, response) {
			console.log(data);
			done();
		});
	});
	
	it('gets an SMS message with a specific SID', function(done) {
		client.Accounts.SMS.Messages('someMessageSID').get(function(err, data, response) {
			console.log(data);
			done();
		});
	});
	
	it('has a shorthand for sending an SMS message from the default account: client.Accounts.SMS.Messages.post/create', function(done) {
		client.sms({
			To:'+16513334444',
			From:'+16513334444',
			Body:'Testing an SMS message!'
		}, function(err, data) {
			done();
		});
	});
	
	it('has a shorthand for querying SMS messages from the default account: client.Accounts.SMS.Messages.get', function(done) {
		client.getSms({
			From:'+16513334444'
		}, function(err, data) {
			done();
		});
	});
	*/
});
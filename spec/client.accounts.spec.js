var config = require('../config'),
	twilio = require('../index');

describe('The Twilio REST Client Accounts resource', function() {
	//create a client with a valid account SID and authToken for live testing
	var client = new twilio.RestClient(config.accountSid, config.authToken);
	
	it('gets an unfiltered list of Accounts associated with this master account', function(done) {
		client.Accounts.get(function(err, data, response) {
			expect(data.accounts.length).toBeGreaterThan(0);
			done();
		});
	});
	
	var newAccountSidOne, newAccountSidTwo; //close them after creation
	
	it('allows for the creation of subaccounts', function(done) {
		client.Accounts.create({
			FriendlyName:'TestAccountUno'
		}, function(err, data, response) {
			expect(data.friendly_name).toBe('TestAccountUno');
			newAccountSidOne = data.sid;
			
			//Create a second account using the "post" function
			client.Accounts.post({
				FriendlyName:'TestAccountDos'
			}, function(err2, data2, response2) {
				expect(data2.friendly_name).toBe('TestAccountDos');
				newAccountSidTwo = data2.sid;
				done();
			});
		});
	});
	
	it('provides a means of getting account details for a specific sid', function(done) {
		client.Accounts(newAccountSidOne).get(function(err,data) {
			expect(data.sid).toBe(newAccountSidOne);
			done();
		});
	});
	
	it('provdes a means of updating and closing subaccounts', function(done) {
		client.Accounts(newAccountSidOne).put({
			Status:'closed'
		}, function(err,data) {
			expect(data.sid).toBe(newAccountSidOne);
			expect(data.status).toBe('closed');
			
			client.Accounts(newAccountSidTwo).update({
				Status:'closed'
			}, function(err2,data2) {
				expect(data2.sid).toBe(newAccountSidTwo);
				expect(data2.status).toBe('closed');
				done();
			});
		});
	});
	
	/*
	it('gets a list of accounts using query filter parameters', function(done) {
		client.Accounts.get({
			Status:'active'
		}, function(err, data, response) {
			console.log(data);
			done();
		});
	});
	
	it('gets information about a specific account', function(done) {
		client.Accounts(config.accountSid).get(function(err, data, response) {
			console.log(data);
			done();
		});
	});
	
	it('Uses "post", "put", or "update" to update information about a specific account', function(done) {
		var methods = [
			'put',
			'post',
			'update'
		];
		var idx = Math.floor(Math.random()*methods.length);
		
		client.Accounts(config.accountSid)[methods[idx]]({
			FriendlyName:'Node.js\'s most execellent account ('+methods[idx]+')'
		},function(err, data, response) {
			console.log(data);
			done();
		});
	});
	
	it('defines Twilio REST namespaces on the default account', function() {
		expect(client.Accounts.AvailablePhoneNumbers).toBeDefined();
	});
	
	it('defines Twilio REST namespaces on a specific account', function() {
		expect(client.Accounts(config.accountSid).AvailablePhoneNumbers).toBeDefined();
	});
	*/
});
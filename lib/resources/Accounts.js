/**
	@module resources/Accounts
	The Twilio "Accounts" Resource.
*/
var _ = require('underscore'),
	generate = require('./generate'),
	ListInstanceResource = require('./ListInstanceResource');

module.exports = function(client) {
	
	//Define subresources on the accounts resource, with the given account SID
	function mixinResources(obj, sid) {
		//All other REST resources are based on account - some can simply be generated, others need additonal URL params
		var subresources = {
			AvailablePhoneNumbers: require('./AvailablePhoneNumbers')(client,sid),
			OutgoingCallerIds: ListInstanceResource(client, sid, 'OutgoingCallerIds', ['GET','PUT','DELETE'], ['GET','POST']),
			IncomingPhoneNumbers: require('./IncomingPhoneNumbers')(client,sid),
			SMS: {
				Messages: ListInstanceResource(client, sid, 'SMS/Messages', ['GET'], ['GET', 'POST'])
			},
			Applications: ListInstanceResource(client, sid, 'Applications', ['GET','POST','DELETE'], ['GET','POST']),
			ConnectApps: ListInstanceResource(client, sid, 'ConnectApps', ['GET','POST'], ['GET']),
			AuthorizedConnectApps: ListInstanceResource(client, sid, 'AuthorizedConnectApps', ['GET'], ['GET']),
			Calls: require('./Calls')(client, sid),
			Conferences: require('./Conferences')(client, sid),
			Queue: ListInstanceResource(client, sid, 'Queue', ['GET','POST','DELETE'], ['GET','POST']),
			ShortCodes: ListInstanceResource(client, sid, 'ShortCodes', ['GET','POST'], ['GET']),
			Recordings: require('./Recordings')(client, sid),
			Transcriptions: require('./Transcriptions')(client, sid),
			Notifications: ListInstanceResource(client, sid, 'Notifications', ['GET','DELETE'], ['GET'])
		};
		
		//Add resources to Accounts. or Accounts(sid).
		_.extend(obj, subresources);
	}
	
	/**
		The Twilio Accounts Resource
		@constructor
		@param {string} accountSid - The specific account for which to scope requests
	*/
	function Accounts(accountSid) {
		//This is the resource for accounts aside from the default master account
		var resourceApi = {};
		
		//generate REST function calls for the appropriate resource
		generate.restFunctions(resourceApi, client, ['GET','PUT'], '/Accounts/'+accountSid);
		
		//Mix in sub resources
		mixinResources(resourceApi, accountSid);

		//Return resource API, plus sub-resources
		return resourceApi;
	}
	
	//Create REST functions with the default account
	generate.restFunctions(Accounts, client, ['GET','POST'], '/Accounts');
	
	//Define other sub-resources of Accounts for master account
	mixinResources(Accounts, client.accountSid);
	
	return Accounts;
};

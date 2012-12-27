var config = require('../config'),
    twilio = require('../index');

describe('The Twilio REST Client Accounts resource', function () {
    //create a client with a valid account SID and authToken for live testing
    var client = new twilio.RestClient(config.accountSid, config.authToken);

    it('gets an unfiltered list of Accounts associated with this master account', function (done) {
        client.accounts.list(function (err, data, response) {
            expect(data.accounts.length).toBeGreaterThan(0);
            done();
        });
    });

    var newAccountSidOne, newAccountSidTwo; //store so we can close them after creation

    it('allows for the creation of subaccounts', function (done) {
        client.accounts.create({
            friendlyName:'TestAccountUno'
        }, function (err, data, response) {
            expect(data.friendly_name).toBe('TestAccountUno');
            newAccountSidOne = data.sid;

            //Create a second account using the "post" function, and an uppercased name
            client.accounts.post({
                FriendlyName:'TestAccountDos'
            }, function (err2, data2, response2) {
                expect(data2.friendly_name).toBe('TestAccountDos');
                newAccountSidTwo = data2.sid;
                done();
            });
        });
    });

    it('provides a means of getting account details for a specific sid', function (done) {
        client.accounts(newAccountSidOne).get(function (err, data) {
            expect(data.sid).toBe(newAccountSidOne);
            done();
        });
    });

    it('provdes a means of updating and closing subaccounts', function (done) {
        client.accounts(newAccountSidOne).put({
            Status:'closed'
        }, function (err, data) {
            expect(data.sid).toBe(newAccountSidOne);
            expect(data.status).toBe('closed');

            client.accounts(newAccountSidTwo).update({
                status:'closed'
            }, function (err2, data2) {
                expect(data2.sid).toBe(newAccountSidTwo);
                expect(data2.status).toBe('closed');
                done();
            });
        });
    });

});
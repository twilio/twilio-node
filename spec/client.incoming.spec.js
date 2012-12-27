var config = require('../config'),
    twilio = require('../index');

describe('The Twilio REST Client IncomingPhoneNumbers resource', function () {
    //create a client with a valid account SID and authToken for live testing
    var client = new twilio.RestClient(config.accountSid, config.authToken);

    //An incoming number sid we'll use for several tests
    var instanceSid, purchasedSid;

    it('gets a list of already purchased incoming phone numbers', function(done) {
        client.accounts.incomingPhoneNumbers.list(function(err, data) {
            expect(data.incoming_phone_numbers.length).toBeGreaterThan(0);
            instanceSid = data.incoming_phone_numbers[0].sid;
            expect(instanceSid).toMatch(/^PN.*/);
            done();
        });
    });

    it('gets details about a specific number, by sid', function(done) {
        client.incomingPhoneNumbers(instanceSid).get(function(err, data) {
            expect(data.sid).toBe(instanceSid);
            done();
        });
    });

    it('updates information about a number with a given sid', function(done){
        var randUrl = 'http://myapp.com/awesome/'+new Date().getTime();
        client.accounts.incomingPhoneNumbers(instanceSid).update({
            voiceUrl:randUrl,
            SmsUrl:randUrl
        }, function(err, data) {
            expect(data.voice_url).toBe(randUrl);
            expect(data.sms_url).toBe(randUrl);
            done();
        });
    });

    //requires at least one toll free number in the test account
    it('gets a list of Toll Free numbers for the given account', function(done) {
        client.incomingPhoneNumbers.tollFree.get(function(err, data) {
            expect(data.incoming_phone_numbers.length).toBeGreaterThan(0);
            expect(data.incoming_phone_numbers[0].phone_number).toMatch(/^\+18.*$/);
            done();
        });
    });

    it('gets a list of local numbers for the given account', function(done) {
        client.incomingPhoneNumbers.local.get(function(err, data) {
            expect(data.incoming_phone_numbers.length).toBeGreaterThan(0);
            done();
        });
    });

    it('allows for the purchase of new phone numbers', function(done) {
        client.accounts.availablePhoneNumbers('US').local.get({
            areaCode:'651'
        }, function(err, data) {
            expect(data.available_phone_numbers.length).toBeGreaterThan(0);
            var available = data.available_phone_numbers[0].phone_number;
            expect(available).toMatch(/\+1651.*/);

            var randUrl = 'http://myapp.com/awesome/'+new Date().getTime();
            client.incomingPhoneNumbers.create({
                VoiceUrl:randUrl,
                phoneNumber:available
            }, function(err2, data2) {
                expect(data2.voice_url).toBe(randUrl);
                expect(data2.phone_number).toBe(available);
                purchasedSid = data2.sid;
                done();
            });
        });
    });

    it('deletes a purchased phone number', function(done) {
        client.incomingPhoneNumbers(purchasedSid).delete(function(err,data,httpResponse) {
            expect(httpResponse.statusCode).toBe(204);
            expect(err).toBeNull();
            done();
        });
    });

    it('allows for the purchase of new phone numbers using the subresource', function(done) {
        client.availablePhoneNumbers('US').local.get({
            areaCode:'651'
        }, function(err, data) {
            expect(data.available_phone_numbers.length).toBeGreaterThan(0);
            var available = data.available_phone_numbers[0].phone_number;
            expect(available).toMatch(/\+1651.*/);

            var randUrl = 'http://myapp.com/awesome/'+new Date().getTime();
            client.accounts.incomingPhoneNumbers.local.create({
                VoiceUrl:randUrl,
                phoneNumber:available
            }, function(err2, data2) {
                expect(data2.voice_url).toBe(randUrl);
                expect(data2.phone_number).toBe(available);
                purchasedSid = data2.sid;
                //cleanup, can be done async
                client.accounts.incomingPhoneNumbers(purchasedSid).delete(function(err,data,httpResponse) {
                    //test number deleted, no op for now
                });
                done();
            });
        });
    });

    //repeat, but with toll free numbers using the sub resource
    it('allows for the purchase of new toll free phone numbers, using a sub resource', function(done) {
        client.availablePhoneNumbers('US').tollFree.get({
            areaCode:'866'
        }, function(err, data) {
            expect(data.available_phone_numbers.length).toBeGreaterThan(0);
            var available = data.available_phone_numbers[0].phone_number;
            expect(available).toMatch(/\+1866.*/);

            var randUrl = 'http://myapp.com/awesome/'+new Date().getTime();
            client.accounts.incomingPhoneNumbers.tollFree.post({
                VoiceUrl:randUrl,
                phoneNumber:available
            }, function(err2, data2) {
                expect(data2.voice_url).toBe(randUrl);
                expect(data2.phone_number).toBe(available);
                purchasedSid = data2.sid;
                //cleanup, can be done async
                client.accounts.incomingPhoneNumbers(purchasedSid).delete(function(err,data,httpResponse) {
                    //test number deleted, no op for now
                });
                done();
            });
        });
    });
});
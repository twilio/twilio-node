var twilio = require('../lib');

describe('Live Twilio API smoke tests', function() {
    try {
        // this will throw will no local config present
        config = require('../config');

        // continue with tests if we don't throw
        var client = new twilio.RestClient(config.accountSid, config.authToken),
            voiceUrl = 'https://demo.twilio.com/welcome/voice',
            smsUrl = 'https://demo.twilio.com/welcome/sms/reply';

        it('makes a phone call using callbacks', function(done) {
            client.makeCall({
                to:config.to,
                from:config.from,
                url:voiceUrl
            }, function(err, data) {
                expect(data.sid).toBeDefined();
                done();
            });
        });

        it('makes a phone call using promises', function(done) {
            var promise = client.makeCall({
                to:config.to,
                from:config.from,
                url:voiceUrl
            });

            promise.then(function(data) {
                expect(data.sid).toBeDefined();
            }, function(err) {
                expect(err).toBeFalsy(); //fail
            }).fin(done);
        });

        it('sends a text message using the callback interface', function(done) {
            client.sendMessage({
                to:config.to,
                from:config.from,
                body:'testing callback'
            }, function(err, data) {
                expect(err).toBeFalsy();
                expect(data.sid).toBeDefined();
                done();
            });
        });

        it('sends a text message using the promise interface', function(done) {
            var promise = client.sendMessage({
                to:config.to,
                from:config.from,
                body:'testing promises'
            });

            function error(e) {
                expect(e).toBeFalsy(); //this should fail
            }

            function success(data) {
                expect(data.sid).toBeDefined();
            }

            promise.then(success, error).fin(done);
        });

        it('makes the two step phone number buying dance a bit easier', function(done) {
            client.availablePhoneNumbers('US').local.get({
                areaCode:'612'
            }).then(function(searchResults) {
                if (searchResults.availablePhoneNumbers.length < 1) {
                    throw { message:'No numbers found with that area code' };
                }

                return client.incomingPhoneNumbers.create({
                    phoneNumber:searchResults.availablePhoneNumbers[0].phoneNumber,
                    voiceUrl:voiceUrl,
                    smsUrl:smsUrl
                });
            }).then(function(phoneNumber) {
                expect(phoneNumber.voiceUrl).toBe(voiceUrl);
                expect(phoneNumber.smsUrl).toBe(smsUrl);
            }).fail(function(error) {
                expect(error).toBeFalsy(); //fails
            }).fin(done);
        });

        it('behaves nicely with a DELETE method', function(done) {
            // create then destroy a usage trigger to test delete behavior
            client.usage.triggers.create({
                usageCategory: 'calls',
                triggerValue: 8675309,
                callbackUrl: 'http://nagannadoit.twilio.com'
            }, function(err, trigger) {
                expect(err).toBeFalsy();
                client.usage.triggers(trigger.sid).delete(function(err, r) {
                    expect(err).toBeFalsy();
                    expect(r).toBeFalsy();
                    done();
                });
            });
        });

        it('dies on the number buying process when an area code is not found', function(done) {
            client.availablePhoneNumbers('US').local.get({
                areaCode:'1337'
            }).then(function(searchResults) {
                if (searchResults.availablePhoneNumbers.length < 1) {
                    throw { message:'No numbers found with that area code' };
                }

                return client.incomingPhoneNumbers.create({
                    phoneNumber:searchResults.availablePhoneNumbers[0].phoneNumber,
                    voiceUrl:voiceUrl,
                    smsUrl:smsUrl
                });
            }).then(function(phoneNumber) {
                expect(true).toBeFalse(); //fail
            }).fail(function(error) {
                expect(error).toBeTruthy();
            }).fin(done);
        });

        it('throws an auth error with a bad auth token (callbacks)', function(done) {
            var c = twilio(config.accountSid, 'foo bar');

            c.makeCall({
                to:config.to,
                from:config.from,
                url:voiceUrl
            }, function(err, data) {
                expect(err).toBeDefined();
                expect(err.status).toBe(401);
                done();
            });
        });

        it('throws an auth error with a bad auth token (promises)', function(done) {
            var c = twilio(config.accountSid, 'foo bar');

            var p = c.makeCall({
                to:config.to,
                from:config.from,
                url:voiceUrl
            });

            p.then(function(data) {
                expect(true).toBeFalse(); //fail
            }, function(err) {
                expect(err).toBeDefined();
                expect(err.status).toBe(401);
            }).fin(done);
        });

        it('throws an error properly when one call fails (promises)', function(done) {
            client.listMessages({
                from:config.from
            }).then(function(data) {
                expect(data.messages).toBeDefined();
                expect(data.messages.length).toBeGreaterThan(0);
                return client.messages('foobar').get();
            }).then(function(message) {
                expect(true).toBeFalse(); //fail
            }).fail(function(err) {
                expect(err).toBeDefined();
                expect(err.status).toBe(404);
            }).fin(done);
        });
    } catch (e) {
        it('doesn\'t run when local config is not present', function() {
            expect(true).toBe(true);
        });
    }
});
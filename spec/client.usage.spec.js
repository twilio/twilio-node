var config = require('../config'),
    twilio = require('../index');

describe('The Twilio REST Client Usage Records resource', function () {
    var client = twilio(config.accountSid, config.authToken);

    it('gets a list of usage records for sms messages', function(done) {
        client.usage.records.get({
            category:'sms'
        }, function(err, data) {
            data.usage_records.forEach(function(record) {
                expect(record.category).toBe('sms');
            });
            done();
        });
    });

    it('gets all usage records for the last month', function(done) {
        var now = new Date();

        client.usage.records.lastMonth.list(function(err, data) {
            data.usage_records.forEach(function(record) {
                var startDate = new Date(record.start_date);
                if (now.getMonth() === 0) {
                    expect(startDate.getMonth()).toBe(11);
                }
                else {
                    expect(now.getMonth()).toBeLessThan(startDate.getMonth());
                }
            });
            done();
        });
    });
});
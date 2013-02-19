var config = require('../config'),
    twilio = require('../index');

describe('The Twilio REST Client Queues resource', function () {
    var client = twilio(config.accountSid, config.authToken);

    var queueName = 'queue'+new Date().getMilliseconds(),
        queueSid;

    it('creates a queue', function(done) {
        client.queues.create({
            friendlyName:queueName
        }, function(err, data) {
            expect(err).toBeFalsy();
            expect(data.friendlyName).toBe(queueName);
            queueSid = data.sid;
            done();
        });
    });

    it('gets details for a given queue', function(done) {
        client.queues(queueSid).get(function(err, data) {
            expect(err).toBeFalsy();
            expect(data.sid).toBe(queueSid);
            done();
        });
    });

    it('updates details for a given queue', function(done) {
        client.queues(queueSid).update({
            maxSize:69
        }, function(err, data) {
            expect(err).toBeFalsy();
            expect(data.maxSize).toBe(69);
            done();
        });
    });

    it('gets a list of members for a given queue (empty for test)', function(done) {
        client.queues(queueSid).members.get(function(err, data) {
            expect(err).toBeFalsy();
            expect(data.queueMembers.length).toBe(0);
            done();
        });
    });

    it('gets the person at the front of the queue (expect 404)', function(done) {
        client.queues(queueSid).members.front.get(function(err, data) {
            expect(err.status).toBe(404);
            expect(data.nodeClientResponse.request.path)
                .toBe('/2010-04-01/Accounts/'+config.accountSid+'/Queues/'+queueSid+'/Members/Front.json?');
            done();
        });
    });

    it('deletes the queue we created for testing', function(done) {
        client.queues(queueSid).delete(function(err, data) {
            expect(data.nodeClientResponse.statusCode).toBe(204);
            done();
        });
    });

});
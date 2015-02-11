var twilio = require('../index'),
    jwt = require('jwt-simple');

describe('The TaskRouter Capability Token Object', function() {

    it('should allow construction of a capability token', function() {
        var c = new twilio.TaskRouterCapability('AC123', 'foobar', 'WS456', 'WK789');
        var token = c.generate();

        var decoded = jwt.decode(token, 'foobar');
        expect(decoded).toBeDefined();
        expect(decoded['iss']).toBe('AC123');
        expect(decoded['account_sid']).toBe('AC123');
        expect(decoded['channel']).toBe('WK789');
        expect(decoded['workspace_sid']).toBe('WS456');
        expect(decoded['worker_sid']).toBe('WK789');
        expect(decoded['version']).toBe('v1');
        expect(decoded['exp']).toEqual(Math.floor(new Date() / 1000) + 3600);
    });

    it('should accept custom ttls', function() {
        var c = new twilio.TaskRouterCapability('AC123', 'foobar', 'WS456', 'WK789');
        var token = c.generate(1000);
        var decoded = jwt.decode(token, 'foobar');
        expect(decoded['exp']).toEqual(Math.floor(new Date() / 1000) + 1000);
    });

    it('should allow websocket and activities access by default', function() {
        var c = new twilio.TaskRouterCapability('AC123', 'foobar', 'WS456', 'WK789');
        var token = c.generate();

        var decoded = jwt.decode(token, 'foobar');
        expect(decoded['policies'].length).toBe(3);
        var getPolicy = {
            url: 'https://event-bridge.twilio.com/v1/wschannels/AC123/WK789',
            method: 'GET',
            query_filter: {},
            post_filter: {},
            allow: true
        };
        expect(decoded['policies'][0]).toEqual(getPolicy);
        var postPolicy = {
            url: 'https://event-bridge.twilio.com/v1/wschannels/AC123/WK789',
            method: 'POST',
            query_filter: {},
            post_filter: {},
            allow: true
        };
        expect(decoded['policies'][1]).toEqual(postPolicy);
        var activitiesPolicy = {
            url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/Activities',
            method: 'GET',
            query_filter: {},
            post_filter: {},
            allow: true
        };
        expect(decoded['policies'][2]).toEqual(activitiesPolicy);
    });

    it('should allow worker activity updates when requested', function() {
        var c = new twilio.TaskRouterCapability('AC123', 'foobar', 'WS456', 'WK789');
        c.allowWorkerActivityUpdates();
        var token = c.generate();

        var decoded = jwt.decode(token, 'foobar');
        expect(decoded['policies'].length).toBe(4);

        var activityPolicy = {
            url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/Workers/WK789',
            method: 'POST',
            query_filter: {},
            post_filter: {'ActivitySid': {'required': true}},
            allow: true
        };
        expect(decoded['policies'][3]).toEqual(activityPolicy);
    });

    it('should allow worker attribute reads when requested', function() {
        var c = new twilio.TaskRouterCapability('AC123', 'foobar', 'WS456', 'WK789');
        c.allowWorkerFetchAttributes();
        var token = c.generate();

        var decoded = jwt.decode(token, 'foobar');
        expect(decoded['policies'].length).toBe(4);

        var workerPolicy = {
            url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/Workers/WK789',
            method: 'GET',
            query_filter: {},
            post_filter: {},
            allow: true
        };
        expect(decoded['policies'][3]).toEqual(workerPolicy);
    });

    it('should allow task updates when requested', function() {
        var c = new twilio.TaskRouterCapability('AC123', 'foobar', 'WS456', 'WK789');
        c.allowTaskReservationUpdates();
        var token = c.generate();

        var decoded = jwt.decode(token, 'foobar');
        expect(decoded['policies'].length).toBe(4);

        var taskPolicy = {
            url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/Tasks/**',
            method: 'POST',
            query_filter: {},
            post_filter: {'ReservationStatus': {'required': true}},
            allow: true
        };

        expect(decoded['policies'][3]).toEqual(taskPolicy);
    });
});

var twilio = require('../index'),
    jwt = require('jsonwebtoken');

describe('The TaskRouter Worker Capability Token Object', function() {

    it('should allow construction of a capability token', function() {
        var c = new twilio.TaskRouterWorkerCapability('AC123', 'foobar', 'WS456', 'WK789');
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
        var c = new twilio.TaskRouterWorkerCapability('AC123', 'foobar', 'WS456', 'WK789');
        var token = c.generate(1000);
        var decoded = jwt.decode(token, 'foobar');
        expect(decoded['exp']).toEqual(Math.floor(new Date() / 1000) + 1000);
    });

    it('should allow websocket and activities access by default', function() {
        var c = new twilio.TaskRouterWorkerCapability('AC123', 'foobar', 'WS456', 'WK789');
        var token = c.generate();

        var decoded = jwt.decode(token, 'foobar');
        expect(decoded['policies'].length).toBe(7);
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

        var workerFetchPolicy = {
            url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/Workers/WK789',
            method: 'GET',
            query_filter: {},
            post_filter: {},
            allow: true
        };
        expect(decoded['policies'][2]).toEqual(workerFetchPolicy);

        var activitiesPolicy = {
            url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/Activities',
            method: 'GET',
            query_filter: {},
            post_filter: {},
            allow: true
        };
        expect(decoded['policies'][3]).toEqual(activitiesPolicy);

        var tasksPolicy = {
            url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/Tasks/**',
            method: 'GET',
            query_filter: {},
            post_filter: {},
            allow: true
        };
        expect(decoded['policies'][4]).toEqual(tasksPolicy);

        var workerReservationsFetchPolicy = {
            url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/Workers/WK789/Reservations/**',
            method: 'GET',
            query_filter: {},
            post_filter: {},
            allow: true
        };
        expect(decoded['policies'][5]).toEqual(workerReservationsFetchPolicy);
        
        var workerChannelFetchPolicy = {
            url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/Workers/WK789/Channels/**',
            method: 'GET',
            query_filter: {},
            post_filter: {},
            allow: true
        };
        expect(decoded['policies'][6]).toEqual(workerChannelFetchPolicy);
    });

    it('should allow worker activity updates when requested', function() {
        var c = new twilio.TaskRouterWorkerCapability('AC123', 'foobar', 'WS456', 'WK789');
        c.allowActivityUpdates();
        var token = c.generate();

        var decoded = jwt.decode(token, 'foobar');
        expect(decoded['policies'].length).toBe(8);

        var workerActivityUpdatePolicy = {
            url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/Workers/WK789',
            method: 'POST',
            query_filter: {},
            post_filter: {'ActivitySid': {'required': true}},
            allow: true
        };
        expect(decoded['policies'][7]).toEqual(workerActivityUpdatePolicy);
    });

    it('should allow task updates when requested', function() {
        var c = new twilio.TaskRouterWorkerCapability('AC123', 'foobar', 'WS456', 'WK789');
        c.allowReservationUpdates();
        var token = c.generate();

        var decoded = jwt.decode(token, 'foobar');
        expect(decoded['policies'].length).toBe(9);

        var tasksUpdatePolicy = {
            url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/Tasks/**',
            method: 'POST',
            query_filter: {},
            post_filter: {},
            allow: true
        };

        expect(decoded['policies'][7]).toEqual(tasksUpdatePolicy);

        var workerReservationsPolicy = {
            url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/Workers/WK789/Reservations/**',
            method: 'POST',
            query_filter: {},
            post_filter: {},
            allow: true
        };

        expect(decoded['policies'][8]).toEqual(workerReservationsPolicy);
    });
});

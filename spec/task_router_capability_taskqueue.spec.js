var twilio = require('../index'),
    jwt = require('jwt-simple');

describe('The TaskRouter TaskQueue Capability Token Object', function() {

    it('should allow construction of a capability token', function() {
        var c = new twilio.TaskRouterTaskQueueCapability('AC123', 'foobar', 'WS456', 'WQ789');
        var token = c.generate();

        var decoded = jwt.decode(token, 'foobar');
        expect(decoded).toBeDefined();
        expect(decoded['iss']).toBe('AC123');
        expect(decoded['account_sid']).toBe('AC123');
        expect(decoded['channel']).toBe('WQ789');
        expect(decoded['workspace_sid']).toBe('WS456');
        expect(decoded['taskqueue_sid']).toBe('WQ789');
        expect(decoded['version']).toBe('v1');
        expect(decoded['exp']).toEqual(Math.floor(new Date() / 1000) + 3600);
    });

    it('should accept custom ttls', function() {
        var c = new twilio.TaskRouterTaskQueueCapability('AC123', 'foobar', 'WS456', 'WQ789');
        var token = c.generate(1000);
        var decoded = jwt.decode(token, 'foobar');
        expect(decoded['exp']).toEqual(Math.floor(new Date() / 1000) + 1000);
    });

    it('should allow websocket and fetching taskqueue by default', function() {
        var c = new twilio.TaskRouterTaskQueueCapability('AC123', 'foobar', 'WS456', 'WQ789');
        var token = c.generate();

        var decoded = jwt.decode(token, 'foobar');
        expect(decoded['policies'].length).toBe(3);
        var getPolicy = {
            url: 'https://event-bridge.twilio.com/v1/wschannels/AC123/WQ789',
            method: 'GET',
            query_filter: {},
            post_filter: {},
            allow: true
        };
        expect(decoded['policies'][0]).toEqual(getPolicy);

        var postPolicy = {
            url: 'https://event-bridge.twilio.com/v1/wschannels/AC123/WQ789',
            method: 'POST',
            query_filter: {},
            post_filter: {},
            allow: true
        };
        expect(decoded['policies'][1]).toEqual(postPolicy);

        var taskQueueFetchPolicy = {
            url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/TaskQueues/WQ789',
            method: 'GET',
            query_filter: {},
            post_filter: {},
            allow: true
        };
        expect(decoded['policies'][2]).toEqual(taskQueueFetchPolicy);
    });

    it('should allow fetch all when requested', function() {
        var c = new twilio.TaskRouterTaskQueueCapability('AC123', 'foobar', 'WS456', 'WQ789');
        c.allowFetchSubresources();
        var token = c.generate();

        var decoded = jwt.decode(token, 'foobar');
        expect(decoded['policies'].length).toBe(4);

        var fetchAllPolicy = {
            url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/TaskQueues/WQ789/**',
            method: 'GET',
            query_filter: {},
            post_filter: {},
            allow: true
        };
        expect(decoded['policies'][3]).toEqual(fetchAllPolicy);
    });

    it('should allow update all when requested', function() {
        var c = new twilio.TaskRouterTaskQueueCapability('AC123', 'foobar', 'WS456', 'WQ789');
        c.allowUpdatesSubresources();
        var token = c.generate();

        var decoded = jwt.decode(token, 'foobar');
        expect(decoded['policies'].length).toBe(4);

        var updateAllPolicy = {
            url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/TaskQueues/WQ789/**',
            method: 'POST',
            query_filter: {},
            post_filter: {},
            allow: true
        };
        expect(decoded['policies'][3]).toEqual(updateAllPolicy);
    });
});

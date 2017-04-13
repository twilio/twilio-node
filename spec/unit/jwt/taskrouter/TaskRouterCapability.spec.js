var _ = require('lodash');
var TaskRouterCapability = require('../../../../index').jwt.taskrouter.TaskRouterCapability;
var util = require('../../../../index').jwt.taskrouter.util;
var jwt = require('jsonwebtoken');

describe('The TaskRouter Capability Token Object', function() {

  it('should allow construction of a capability token', function() {
    var c = new TaskRouterCapability({
      accountSid: 'AC123',
      authToken: 'foobar',
      workspaceSid: 'WS456',
      channelId: 'WK789'
    });

    var decoded = jwt.verify(c.toJwt(), 'foobar');
    expect(decoded).toBeDefined();
    expect(decoded.iss).toBe('AC123');
    expect(decoded.account_sid).toBe('AC123');
    expect(decoded.channel).toBe('WK789');
    expect(decoded.workspace_sid).toBe('WS456');
    expect(decoded.worker_sid).toBe('WK789');
    expect(decoded.version).toBe('v1');
    expect(decoded.exp).toBeGreaterThan(Math.floor(new Date() / 1000));
    expect(decoded.exp).toBeLessThan(Math.floor(new Date() / 1000) + 3610);
  });

  it('should accept custom ttls', function() {
    var c = new TaskRouterCapability({
      accountSid: 'AC123',
      authToken: 'foobar',
      workspaceSid: 'WS456',
      channelId: 'WK789',
      ttl: 1000
    });
    var decoded = jwt.verify(c.toJwt(), 'foobar');
    expect(decoded.exp).toBeGreaterThan(Math.floor(new Date() / 1000));
    expect(decoded.exp).toBeLessThan(Math.floor(new Date() / 1000) + 1010);
  });

  it('should allow policies', function() {
    var c = new TaskRouterCapability({
      accountSid: 'AC123',
      authToken: 'foobar',
      workspaceSid: 'WS456',
      channelId: 'WK789'
    });

    var workerPolicies = util.defaultWorkerPolicies('v1', 'WS456', 'WK789');
    _.each(workerPolicies, function (policy) {
      c.addPolicy(policy);
    });

    var eventBridgePolicies = util.defaultEventBridgePolicies('AC123', 'WK789');
    _.each(eventBridgePolicies, function (policy) {
      c.addPolicy(policy);
    });

    var decoded = jwt.verify(c.toJwt(), 'foobar');
    expect(decoded.policies.length).toBe(6);
    var activitiesPolicy = {
        url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/Activities',
        method: 'GET',
        query_filter: {},
        post_filter: {},
        allow: true
    };
    expect(decoded.policies[0]).toEqual(activitiesPolicy);

    var reservationFetchPolicy = {
        url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/Tasks/**',
        method: 'GET',
        query_filter: {},
        post_filter: {},
        allow: true
    };
    expect(decoded.policies[1]).toEqual(reservationFetchPolicy);

    var reservationsPolicy = {
      url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/Workers/WK789/Reservations/**',
      method: 'GET',
      query_filter: {},
      post_filter: {},
      allow: true
    };
    expect(decoded.policies[2]).toEqual(reservationsPolicy);

    var workerFetchPolicy = {
      url: 'https://taskrouter.twilio.com/v1/Workspaces/WS456/Workers/WK789',
      method: 'GET',
      query_filter: {},
      post_filter: {},
      allow: true
    };
    expect(decoded.policies[3]).toEqual(workerFetchPolicy);

    var getPolicy = {
        url: 'https://event-bridge.twilio.com/v1/wschannels/AC123/WK789',
        method: 'GET',
        query_filter: {},
        post_filter: {},
        allow: true
    };
    expect(decoded.policies[4]).toEqual(getPolicy);

    var postPolicy = {
        url: 'https://event-bridge.twilio.com/v1/wschannels/AC123/WK789',
        method: 'POST',
        query_filter: {},
        post_filter: {},
        allow: true
    };
    expect(decoded.policies[5]).toEqual(postPolicy);
  });
});

'use strict';

var _ = require('lodash');
var Policy = require('./TaskRouterCapability').Policy;

var EVENT_URL_BASE = 'https://event-bridge.twilio.com/v1/wschannels';
var TASKROUTER_BASE_URL = 'https://taskrouter.twilio.com';

/**
 * Build the default Policies for a worker
 *
 * @param {string} version TaskRouter version
 * @param {string} workspaceSid workspace sid
 * @param {string} workerSid worker sid
 * @returns {Array<Policy>} list of Policies
 */
function defaultWorkerPolicies(version, workspaceSid, workerSid) {
  var activities = new Policy({
    url: _.join([TASKROUTER_BASE_URL, version, 'Workspaces', workspaceSid, 'Activities'], '/'),
    method: 'GET',
    allow: true
  });
  var tasks = new Policy({
    url: _.join([TASKROUTER_BASE_URL, version, 'Workspaces', workspaceSid, 'Tasks', '**'], '/'),
    method: 'GET',
    allow: true
  });
  var reservations = new Policy({
    url: _.join(
      [TASKROUTER_BASE_URL, version, 'Workspaces', workspaceSid, 'Workers', workerSid, 'Reservations', '**'],
      '/'
    ),
    method: 'GET',
    allow: true
  });
  var workerFetch = new Policy({
    url: _.join([TASKROUTER_BASE_URL, version, 'Workspaces', workspaceSid, 'Workers', workerSid], '/'),
    method: 'GET',
    allow: true
  });

  return [activities, tasks, reservations, workerFetch];
}

/**
 * Build the default Event Bridge Policies
 *
 * @param {string} accountSid account sid
 * @param {string} channelId channel id
 * @returns {Array<Policy>} list of Policies
 */
function defaultEventBridgePolicies(accountSid, channelId) {
  var url = _.join([EVENT_URL_BASE, accountSid, channelId], '/');
  return [
    new Policy({
      url: url,
      method: 'GET',
      allow: true
    }),
    new Policy({
      url: url,
      method: 'POST',
      allow: true
    })
  ];
}

module.exports = {
  defaultWorkerPolicies: defaultWorkerPolicies,
  defaultEventBridgePolicies: defaultEventBridgePolicies
};

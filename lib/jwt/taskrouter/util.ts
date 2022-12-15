"use strict";

import { Policy } from "./TaskRouterCapability";

const EVENT_URL_BASE = "https://event-bridge.twilio.com/v1/wschannels";
const TASKROUTER_BASE_URL = "https://taskrouter.twilio.com";
const TASKROUTER_VERSION = "v1";

/**
 * Build the default Policies for a worker
 *
 * @param {string} version TaskRouter version
 * @param {string} workspaceSid workspace sid
 * @param {string} workerSid worker sid
 * @returns {Array<Policy>} list of Policies
 */
export function defaultWorkerPolicies(
  version: string,
  workspaceSid: string,
  workerSid: string
): Policy[] {
  var activities = new Policy({
    url: [
      TASKROUTER_BASE_URL,
      version,
      "Workspaces",
      workspaceSid,
      "Activities",
    ].join("/"),
    method: "GET",
    allow: true,
  });
  var tasks = new Policy({
    url: [
      TASKROUTER_BASE_URL,
      version,
      "Workspaces",
      workspaceSid,
      "Tasks",
      "**",
    ].join("/"),
    method: "GET",
    allow: true,
  });
  var reservations = new Policy({
    url: [
      TASKROUTER_BASE_URL,
      version,
      "Workspaces",
      workspaceSid,
      "Workers",
      workerSid,
      "Reservations",
      "**",
    ].join("/"),
    method: "GET",
    allow: true,
  });
  var workerFetch = new Policy({
    url: [
      TASKROUTER_BASE_URL,
      version,
      "Workspaces",
      workspaceSid,
      "Workers",
      workerSid,
    ].join("/"),
    method: "GET",
    allow: true,
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
export function defaultEventBridgePolicies(
  accountSid: string,
  channelId: string
): Policy[] {
  var url = [EVENT_URL_BASE, accountSid, channelId].join("/");
  return [
    new Policy({
      url: url,
      method: "GET",
      allow: true,
    }),
    new Policy({
      url: url,
      method: "POST",
      allow: true,
    }),
  ];
}

/**
 * Generate TaskRouter workspace url
 *
 * @param {string} [workspaceSid] workspace sid or '**' for all workspaces
 * @return {string} generated url
 */
export function workspacesUrl(workspaceSid?: string): string {
  return [TASKROUTER_BASE_URL, TASKROUTER_VERSION, "Workspaces", workspaceSid]
    .filter((item) => typeof item === "string")
    .join("/");
}

/**
 * Generate TaskRouter task queue url
 *
 * @param {string} workspaceSid workspace sid
 * @param {string} [taskQueueSid] task queue sid or '**' for all task queues
 * @return {string} generated url
 */
export function taskQueuesUrl(
  workspaceSid: string,
  taskQueueSid?: string
): string {
  return [workspacesUrl(workspaceSid), "TaskQueues", taskQueueSid]
    .filter((item) => typeof item === "string")
    .join("/");
}

/**
 * Generate TaskRouter task url
 *
 * @param {string} workspaceSid workspace sid
 * @param {string} [taskSid] task sid or '**' for all tasks
 * @returns {string} generated url
 */
export function tasksUrl(workspaceSid: string, taskSid?: string): string {
  return [workspacesUrl(workspaceSid), "Tasks", taskSid]
    .filter((item) => typeof item === "string")
    .join("/");
}

/**
 * Generate TaskRouter activity url
 *
 * @param {string} workspaceSid workspace sid
 * @param {string} [activitySid] activity sid or '**' for all activities
 * @returns {string} generated url
 */
export function activitiesUrl(
  workspaceSid: string,
  activitySid?: string
): string {
  return [workspacesUrl(workspaceSid), "Activities", activitySid]
    .filter((item) => typeof item === "string")
    .join("/");
}

/**
 * Generate TaskRouter worker url
 *
 * @param {string} workspaceSid workspace sid
 * @param {string} [workerSid] worker sid or '**' for all workers
 * @returns {string} generated url
 */
export function workersUrl(workspaceSid: string, workerSid?: string): string {
  return [workspacesUrl(workspaceSid), "Workers", workerSid]
    .filter((item) => typeof item === "string")
    .join("/");
}

/**
 * Generate TaskRouter worker reservation url
 *
 * @param {string} workspaceSid workspace sid
 * @param {string} workerSid worker sid
 * @param {string} [reservationSid] reservation sid or '**' for all reservations
 * @returns {string} generated url
 */
export function reservationsUrl(
  workspaceSid: string,
  workerSid: string,
  reservationSid?: string
): string {
  return [workersUrl(workspaceSid, workerSid), "Reservations", reservationSid]
    .filter((item) => typeof item === "string")
    .join("/");
}

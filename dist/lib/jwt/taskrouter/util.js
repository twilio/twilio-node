"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationsUrl = exports.workersUrl = exports.activitiesUrl = exports.tasksUrl = exports.taskQueuesUrl = exports.workspacesUrl = exports.defaultEventBridgePolicies = exports.defaultWorkerPolicies = void 0;
const TaskRouterCapability_1 = require("./TaskRouterCapability");
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
function defaultWorkerPolicies(version, workspaceSid, workerSid) {
    var activities = new TaskRouterCapability_1.Policy({
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
    var tasks = new TaskRouterCapability_1.Policy({
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
    var reservations = new TaskRouterCapability_1.Policy({
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
    var workerFetch = new TaskRouterCapability_1.Policy({
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
exports.defaultWorkerPolicies = defaultWorkerPolicies;
/**
 * Build the default Event Bridge Policies
 *
 * @param {string} accountSid account sid
 * @param {string} channelId channel id
 * @returns {Array<Policy>} list of Policies
 */
function defaultEventBridgePolicies(accountSid, channelId) {
    var url = [EVENT_URL_BASE, accountSid, channelId].join("/");
    return [
        new TaskRouterCapability_1.Policy({
            url: url,
            method: "GET",
            allow: true,
        }),
        new TaskRouterCapability_1.Policy({
            url: url,
            method: "POST",
            allow: true,
        }),
    ];
}
exports.defaultEventBridgePolicies = defaultEventBridgePolicies;
/**
 * Generate TaskRouter workspace url
 *
 * @param {string} [workspaceSid] workspace sid or '**' for all workspaces
 * @return {string} generated url
 */
function workspacesUrl(workspaceSid) {
    return [TASKROUTER_BASE_URL, TASKROUTER_VERSION, "Workspaces", workspaceSid]
        .filter((item) => typeof item === "string")
        .join("/");
}
exports.workspacesUrl = workspacesUrl;
/**
 * Generate TaskRouter task queue url
 *
 * @param {string} workspaceSid workspace sid
 * @param {string} [taskQueueSid] task queue sid or '**' for all task queues
 * @return {string} generated url
 */
function taskQueuesUrl(workspaceSid, taskQueueSid) {
    return [workspacesUrl(workspaceSid), "TaskQueues", taskQueueSid]
        .filter((item) => typeof item === "string")
        .join("/");
}
exports.taskQueuesUrl = taskQueuesUrl;
/**
 * Generate TaskRouter task url
 *
 * @param {string} workspaceSid workspace sid
 * @param {string} [taskSid] task sid or '**' for all tasks
 * @returns {string} generated url
 */
function tasksUrl(workspaceSid, taskSid) {
    return [workspacesUrl(workspaceSid), "Tasks", taskSid]
        .filter((item) => typeof item === "string")
        .join("/");
}
exports.tasksUrl = tasksUrl;
/**
 * Generate TaskRouter activity url
 *
 * @param {string} workspaceSid workspace sid
 * @param {string} [activitySid] activity sid or '**' for all activities
 * @returns {string} generated url
 */
function activitiesUrl(workspaceSid, activitySid) {
    return [workspacesUrl(workspaceSid), "Activities", activitySid]
        .filter((item) => typeof item === "string")
        .join("/");
}
exports.activitiesUrl = activitiesUrl;
/**
 * Generate TaskRouter worker url
 *
 * @param {string} workspaceSid workspace sid
 * @param {string} [workerSid] worker sid or '**' for all workers
 * @returns {string} generated url
 */
function workersUrl(workspaceSid, workerSid) {
    return [workspacesUrl(workspaceSid), "Workers", workerSid]
        .filter((item) => typeof item === "string")
        .join("/");
}
exports.workersUrl = workersUrl;
/**
 * Generate TaskRouter worker reservation url
 *
 * @param {string} workspaceSid workspace sid
 * @param {string} workerSid worker sid
 * @param {string} [reservationSid] reservation sid or '**' for all reservations
 * @returns {string} generated url
 */
function reservationsUrl(workspaceSid, workerSid, reservationSid) {
    return [workersUrl(workspaceSid, workerSid), "Reservations", reservationSid]
        .filter((item) => typeof item === "string")
        .join("/");
}
exports.reservationsUrl = reservationsUrl;

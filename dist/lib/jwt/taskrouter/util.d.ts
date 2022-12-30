import { Policy } from "./TaskRouterCapability";
/**
 * Build the default Policies for a worker
 *
 * @param {string} version TaskRouter version
 * @param {string} workspaceSid workspace sid
 * @param {string} workerSid worker sid
 * @returns {Array<Policy>} list of Policies
 */
export declare function defaultWorkerPolicies(version: string, workspaceSid: string, workerSid: string): Policy[];
/**
 * Build the default Event Bridge Policies
 *
 * @param {string} accountSid account sid
 * @param {string} channelId channel id
 * @returns {Array<Policy>} list of Policies
 */
export declare function defaultEventBridgePolicies(accountSid: string, channelId: string): Policy[];
/**
 * Generate TaskRouter workspace url
 *
 * @param {string} [workspaceSid] workspace sid or '**' for all workspaces
 * @return {string} generated url
 */
export declare function workspacesUrl(workspaceSid?: string): string;
/**
 * Generate TaskRouter task queue url
 *
 * @param {string} workspaceSid workspace sid
 * @param {string} [taskQueueSid] task queue sid or '**' for all task queues
 * @return {string} generated url
 */
export declare function taskQueuesUrl(workspaceSid: string, taskQueueSid?: string): string;
/**
 * Generate TaskRouter task url
 *
 * @param {string} workspaceSid workspace sid
 * @param {string} [taskSid] task sid or '**' for all tasks
 * @returns {string} generated url
 */
export declare function tasksUrl(workspaceSid: string, taskSid?: string): string;
/**
 * Generate TaskRouter activity url
 *
 * @param {string} workspaceSid workspace sid
 * @param {string} [activitySid] activity sid or '**' for all activities
 * @returns {string} generated url
 */
export declare function activitiesUrl(workspaceSid: string, activitySid?: string): string;
/**
 * Generate TaskRouter worker url
 *
 * @param {string} workspaceSid workspace sid
 * @param {string} [workerSid] worker sid or '**' for all workers
 * @returns {string} generated url
 */
export declare function workersUrl(workspaceSid: string, workerSid?: string): string;
/**
 * Generate TaskRouter worker reservation url
 *
 * @param {string} workspaceSid workspace sid
 * @param {string} workerSid worker sid
 * @param {string} [reservationSid] reservation sid or '**' for all reservations
 * @returns {string} generated url
 */
export declare function reservationsUrl(workspaceSid: string, workerSid: string, reservationSid?: string): string;

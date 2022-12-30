export interface TaskRouterCapabilityOptions {
    accountSid: string;
    authToken: string;
    workspaceSid: string;
    channelId: string;
    friendlyName?: string;
    ttl?: number;
    version?: string;
}
export interface PolicyOptions {
    /** Policy URL */
    url?: string;
    /** HTTP Method */
    method?: string;
    /** Request query filter allowances */
    queryFilter?: object;
    /** Request post filter allowances */
    postFilter?: object;
    /** Allow the policy */
    allow?: boolean;
}
export interface PolicyPayload {
    url: string;
    method: string;
    query_filter: object;
    post_filter: object;
    allow: boolean;
}
/**
 * Create a new Policy
 *
 * @constructor
 * @param {object} options - ...
 * @param {string} [options.url] - Policy URL
 * @param {string} [options.method] - HTTP Method
 * @param {object} [options.queryFilter] - Request query filter allowances
 * @param {object} [options.postFilter] - Request post filter allowances
 * @param {boolean} [options.allowed] - Allow the policy
 */
export declare class Policy {
    url?: string;
    method: string;
    queryFilter: object;
    postFilter: object;
    allow: boolean;
    constructor(options?: PolicyOptions);
    payload(): PolicyPayload;
}
/**
 * @constructor
 * @param {object} options - ...
 * @param {string} options.accountSid - account sid
 * @param {string} options.authToken - auth token
 * @param {string} options.workspaceSid - workspace sid
 * @param {string} options.channelId - taskrouter channel id
 * @param {string} [options.friendlyName] - friendly name for the jwt
 * @param {number} [options.ttl] - time to live
 * @param {string} [options.version] - taskrouter version
 */
export default class TaskRouterCapability {
    accountSid: string;
    authToken: string;
    workspaceSid: string;
    channelId: string;
    ttl: number;
    version: string;
    policies: Policy[];
    friendlyName?: string;
    constructor(options: TaskRouterCapabilityOptions);
    static Policy: typeof Policy;
    addPolicy(policy: Policy): void;
    toJwt(): string;
}

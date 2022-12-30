export declare abstract class Grant<TOptions, TPayload, TKey> {
    key: TKey;
    constructor(opts?: TOptions);
    abstract toPayload(): TPayload;
}
export interface TaskRouterGrantOptions {
    workspaceSid?: string;
    workerSid?: string;
    role?: string;
}
export interface TaskRouterGrantPayload {
    workspace_sid?: string;
    worker_sid?: string;
    role?: string;
}
export interface ChatGrantOptions {
    serviceSid?: string;
    endpointId?: string;
    deploymentRoleSid?: string;
    pushCredentialSid?: string;
}
export interface ChatGrantPayload {
    service_sid?: string;
    endpoint_id?: string;
    deployment_role_sid?: string;
    push_credential_sid?: string;
}
export interface VideoGrantOptions {
    room?: string;
}
export interface VideoGrantPayload {
    room?: string;
}
export interface SyncGrantOptions {
    serviceSid?: string;
    endpointId?: string;
}
export interface SyncGrantPayload {
    service_sid?: string;
    endpoint_id?: string;
}
export interface VoiceGrantOptions {
    incomingAllow?: boolean;
    outgoingApplicationSid?: string;
    outgoingApplicationParams?: object;
    pushCredentialSid?: string;
    endpointId?: string;
}
export interface VoiceGrantPayload {
    incoming?: {
        allow: boolean;
    };
    outgoing?: {
        application_sid: string;
        params?: object;
    };
    push_credential_sid?: string;
    endpoint_id?: string;
}
export interface PlaybackGrantOptions {
    grant?: object;
}
export interface PlaybackGrantPayload {
    grant?: object;
}
export interface AccessTokenOptions {
    /**
     * Time to live in seconds
     */
    ttl?: number;
    /**
     * The identity of the first person
     */
    identity?: string;
    /**
     * Time from epoch in seconds for not before value
     */
    nbf?: number;
    /**
     * The region value associated with this account
     */
    region?: string;
}
declare type ALGORITHMS = "HS256" | "HS384" | "HS512";
/**
 * @constructor
 * @param {object} options - ...
 * @param {string} options.workspaceSid - The workspace unique ID
 * @param {string} options.workerSid - The worker unique ID
 * @param {string} options.role - The role of the grant
 */
declare class TaskRouterGrant extends Grant<TaskRouterGrantOptions, TaskRouterGrantPayload, "task_router"> implements TaskRouterGrantOptions {
    workspaceSid?: string;
    workerSid?: string;
    role?: string;
    constructor(options?: TaskRouterGrantOptions);
    toPayload(): TaskRouterGrantPayload;
}
/**
 * @constructor
 * @param {object} options - ...
 * @param {string} options.serviceSid - The service unique ID
 * @param {string} options.endpointId - The endpoint ID
 * @param {string} options.deploymentRoleSid - SID of the deployment role to be
 *                 assigned to the user
 * @param {string} options.pushCredentialSid - The Push Credentials SID
 */
export declare class ChatGrant extends Grant<ChatGrantOptions, ChatGrantPayload, "chat"> implements ChatGrantOptions {
    serviceSid?: string;
    endpointId?: string;
    deploymentRoleSid?: string;
    pushCredentialSid?: string;
    constructor(options?: ChatGrantOptions);
    toPayload(): ChatGrantPayload;
}
/**
 * @constructor
 * @param {object} options - ...
 * @param {string} options.room - The Room name or Room sid.
 */
declare class VideoGrant extends Grant<VideoGrantOptions, VideoGrantPayload, "video"> implements VideoGrantOptions {
    room?: string;
    constructor(options?: VideoGrantOptions);
    toPayload(): VideoGrantPayload;
}
/**
 * @constructor
 * @param {string} options.serviceSid - The service unique ID
 * @param {string} options.endpointId - The endpoint ID
 */
declare class SyncGrant extends Grant<SyncGrantOptions, SyncGrantPayload, "data_sync"> implements SyncGrantOptions {
    serviceSid?: string;
    endpointId?: string;
    constructor(options?: SyncGrantOptions);
    toPayload(): SyncGrantPayload;
}
/**
 * @constructor
 * @param {object} options - ...
 * @param {boolean} options.incomingAllow - Whether or not this endpoint is allowed to receive incoming calls as grants.identity
 * @param {string} options.outgoingApplicationSid - application sid to call when placing outgoing call
 * @param {object} options.outgoingApplicationParams - request params to pass to the application
 * @param {string} options.pushCredentialSid - Push Credential Sid to use when registering to receive incoming call notifications
 * @param {string} options.endpointId - Specify an endpoint identifier for this device, which will allow the developer
 *                 to direct calls to a specific endpoint when multiple devices are associated with a single identity
 */
declare class VoiceGrant extends Grant<VoiceGrantOptions, VoiceGrantPayload, "voice"> implements VoiceGrantOptions {
    incomingAllow?: boolean;
    outgoingApplicationSid?: string;
    outgoingApplicationParams?: object;
    pushCredentialSid?: string;
    endpointId?: string;
    constructor(options?: VoiceGrantOptions);
    toPayload(): VoiceGrantPayload;
}
/**
 * @constructor
 * @param {object} options - ...
 * @param {string} options.grant - The PlaybackGrant retrieved from Twilio's API
 */
declare class PlaybackGrant extends Grant<PlaybackGrantOptions, PlaybackGrantPayload, "player"> implements PlaybackGrantOptions {
    grant?: object;
    constructor(options?: PlaybackGrantOptions);
    toPayload(): PlaybackGrantPayload;
}
/**
 * @constructor
 * @param {string} accountSid - The account's unique ID to which access is scoped
 * @param {string} keySid - The signing key's unique ID
 * @param {string} secret - The secret to sign the token with
 * @param {object} options - ...
 * @param {number} [options.ttl=3600] - Time to live in seconds
 * @param {string} [options.identity] - The identity of the first person
 * @param {number} [options.nbf] - Time from epoch in seconds for not before value
 * @param {string} [options.region] - The region value associated with this account
 */
export default class AccessToken implements AccessTokenOptions {
    static DEFAULT_ALGORITHM: "HS256";
    static ALGORITHMS: ALGORITHMS[];
    static ChatGrant: typeof ChatGrant;
    static VoiceGrant: typeof VoiceGrant;
    static SyncGrant: typeof SyncGrant;
    static VideoGrant: typeof VideoGrant;
    static TaskRouterGrant: typeof TaskRouterGrant;
    static PlaybackGrant: typeof PlaybackGrant;
    accountSid: string;
    keySid: string;
    secret: string;
    ttl: number;
    identity?: string;
    nbf?: number;
    region?: string;
    grants: Grant<any, any, any>[];
    constructor(accountSid: any, keySid: any, secret: any, options?: any);
    addGrant<T extends Grant<any, any, any>>(grant: T): void;
    toJwt(algorithm?: ALGORITHMS): string;
}
export {};

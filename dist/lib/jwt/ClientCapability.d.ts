export interface Scope {
    scope: string;
    payload(): string;
}
export interface OutgoingClientScopeOptions {
    applicationSid: string;
    clientName?: string;
    params?: object;
}
export interface ClientCapabilityOptions {
    accountSid: string;
    authToken: string;
    ttl?: number;
}
/**
 * @constructor
 * @param filters
 */
export declare class EventStreamScope implements Scope {
    scope: string;
    filters: object;
    constructor(filters?: object);
    payload(): string;
}
/**
 * @constructor
 * @param clientName
 */
export declare class IncomingClientScope implements Scope {
    scope: string;
    clientName: string;
    constructor(clientName: string);
    payload(): string;
}
/**
 * @constructor
 * @param {object} options - ...
 * @param {string} options.applicationSid - the application sid
 * @param {string} [options.clientName] - the client name
 * @param {object} [options.params] - parameters
 */
export declare class OutgoingClientScope implements Scope {
    scope: string;
    applicationSid: string;
    clientName?: string;
    params?: object;
    constructor(options: OutgoingClientScopeOptions);
    payload(): string;
}
/**
 * @constructor
 * @param options
 */
export default class ClientCapability {
    static EventStreamScope: typeof EventStreamScope;
    static IncomingClientScope: typeof IncomingClientScope;
    static OutgoingClientScope: typeof OutgoingClientScope;
    accountSid: string;
    authToken: string;
    ttl: number;
    scopes: Scope[];
    constructor(options: ClientCapabilityOptions);
    addScope(scope: Scope): void;
    toJwt(): string;
}

/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
declare type UserStateType = "active" | "deactivated";
/**
 * Options to pass to update a UserInstance
 *
 * @property { string } [friendlyName] The string that you assigned to describe the User.
 * @property { string } [avatar] The avatar URL which will be shown in Frontline application.
 * @property { UserStateType } [state]
 * @property { boolean } [isAvailable] Whether the User is available for new conversations. Set to `false` to prevent User from receiving new inbound conversations if you are using [Pool Routing](https://www.twilio.com/docs/frontline/handle-incoming-conversations#3-pool-routing).
 */
export interface UserContextUpdateOptions {
    friendlyName?: string;
    avatar?: string;
    state?: UserStateType;
    isAvailable?: boolean;
}
export interface UserContext {
    /**
     * Fetch a UserInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserInstance
     */
    fetch(callback?: (error: Error | null, item?: UserInstance) => any): Promise<UserInstance>;
    /**
     * Update a UserInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserInstance
     */
    update(callback?: (error: Error | null, item?: UserInstance) => any): Promise<UserInstance>;
    /**
     * Update a UserInstance
     *
     * @param { UserContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserInstance
     */
    update(params: UserContextUpdateOptions, callback?: (error: Error | null, item?: UserInstance) => any): Promise<UserInstance>;
    update(params?: any, callback?: any): Promise<UserInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserContextSolution {
    sid?: string;
}
export declare class UserContextImpl implements UserContext {
    protected _version: V1;
    protected _solution: UserContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    fetch(callback?: any): Promise<UserInstance>;
    update(params?: any, callback?: any): Promise<UserInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): UserContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface UserResource {
    sid?: string | null;
    identity?: string | null;
    friendly_name?: string | null;
    avatar?: string | null;
    state?: UserStateType;
    is_available?: boolean | null;
    url?: string | null;
}
export declare class UserInstance {
    protected _version: V1;
    protected _solution: UserContextSolution;
    protected _context?: UserContext;
    constructor(_version: V1, payload: UserResource, sid?: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The string that identifies the resource\'s User
     */
    identity?: string | null;
    /**
     * The string that you assigned to describe the User
     */
    friendlyName?: string | null;
    /**
     * The avatar URL which will be shown in Frontline application
     */
    avatar?: string | null;
    state?: UserStateType;
    /**
     * Whether the User is available for new conversations
     */
    isAvailable?: boolean | null;
    /**
     * An absolute URL for this user.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a UserInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserInstance
     */
    fetch(callback?: (error: Error | null, item?: UserInstance) => any): Promise<UserInstance>;
    /**
     * Update a UserInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserInstance
     */
    update(callback?: (error: Error | null, item?: UserInstance) => any): Promise<UserInstance>;
    /**
     * Update a UserInstance
     *
     * @param { UserContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserInstance
     */
    update(params: UserContextUpdateOptions, callback?: (error: Error | null, item?: UserInstance) => any): Promise<UserInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        identity: string | null | undefined;
        friendlyName: string | null | undefined;
        avatar: string | null | undefined;
        state: UserStateType | undefined;
        isAvailable: boolean | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface UserListInstance {
    (sid: string): UserContext;
    get(sid: string): UserContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserSolution {
}
export declare function UserListInstance(version: V1): UserListInstance;
export {};

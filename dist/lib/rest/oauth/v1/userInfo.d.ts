/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export interface UserInfoContext {
    /**
     * Fetch a UserInfoInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserInfoInstance
     */
    fetch(callback?: (error: Error | null, item?: UserInfoInstance) => any): Promise<UserInfoInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserInfoContextSolution {
}
export declare class UserInfoContextImpl implements UserInfoContext {
    protected _version: V1;
    protected _solution: UserInfoContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    fetch(callback?: any): Promise<UserInfoInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): UserInfoContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface UserInfoResource {
    user_sid?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    friendly_name?: string | null;
    email?: string | null;
    url?: string | null;
}
export declare class UserInfoInstance {
    protected _version: V1;
    protected _solution: UserInfoContextSolution;
    protected _context?: UserInfoContext;
    constructor(_version: V1, payload: UserInfoResource);
    /**
     * The user sid
     */
    userSid?: string | null;
    /**
     * The first name of the end-user
     */
    firstName?: string | null;
    /**
     * The last name of the end-user
     */
    lastName?: string | null;
    /**
     * The friendly name of the end-user
     */
    friendlyName?: string | null;
    /**
     * The end-user\'s preferred email address
     */
    email?: string | null;
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a UserInfoInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserInfoInstance
     */
    fetch(callback?: (error: Error | null, item?: UserInfoInstance) => any): Promise<UserInfoInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        userSid: string | null | undefined;
        firstName: string | null | undefined;
        lastName: string | null | undefined;
        friendlyName: string | null | undefined;
        email: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface UserInfoListInstance {
    (): UserInfoContext;
    get(): UserInfoContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserInfoSolution {
}
export declare function UserInfoListInstance(version: V1): UserInfoListInstance;
export {};

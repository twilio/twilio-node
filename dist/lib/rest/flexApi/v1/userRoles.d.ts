/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to fetch a UserRolesInstance
 *
 * @property { string } [token] The Token HTTP request header
 */
export interface UserRolesContextFetchOptions {
    token?: string;
}
export interface UserRolesContext {
    /**
     * Fetch a UserRolesInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserRolesInstance
     */
    fetch(callback?: (error: Error | null, item?: UserRolesInstance) => any): Promise<UserRolesInstance>;
    /**
     * Fetch a UserRolesInstance
     *
     * @param { UserRolesContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserRolesInstance
     */
    fetch(params: UserRolesContextFetchOptions, callback?: (error: Error | null, item?: UserRolesInstance) => any): Promise<UserRolesInstance>;
    fetch(params?: any, callback?: any): Promise<UserRolesInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserRolesContextSolution {
}
export declare class UserRolesContextImpl implements UserRolesContext {
    protected _version: V1;
    protected _solution: UserRolesContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    fetch(params?: any, callback?: any): Promise<UserRolesInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): UserRolesContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface UserRolesResource {
    roles?: Array<string> | null;
    url?: string | null;
}
export declare class UserRolesInstance {
    protected _version: V1;
    protected _solution: UserRolesContextSolution;
    protected _context?: UserRolesContext;
    constructor(_version: V1, payload: UserRolesResource);
    /**
     * Flex Insights roles for the user
     */
    roles?: Array<string> | null;
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a UserRolesInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserRolesInstance
     */
    fetch(callback?: (error: Error | null, item?: UserRolesInstance) => any): Promise<UserRolesInstance>;
    /**
     * Fetch a UserRolesInstance
     *
     * @param { UserRolesContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserRolesInstance
     */
    fetch(params: UserRolesContextFetchOptions, callback?: (error: Error | null, item?: UserRolesInstance) => any): Promise<UserRolesInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        roles: string[] | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface UserRolesListInstance {
    (): UserRolesContext;
    get(): UserRolesContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserRolesSolution {
}
export declare function UserRolesListInstance(version: V1): UserRolesListInstance;
export {};

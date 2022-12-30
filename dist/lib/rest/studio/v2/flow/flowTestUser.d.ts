/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../../V2";
/**
 * Options to pass to update a FlowTestUserInstance
 *
 * @property { Array<string> } testUsers List of test user identities that can test draft versions of the flow.
 */
export interface FlowTestUserContextUpdateOptions {
    testUsers: Array<string>;
}
export interface FlowTestUserContext {
    /**
     * Fetch a FlowTestUserInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlowTestUserInstance
     */
    fetch(callback?: (error: Error | null, item?: FlowTestUserInstance) => any): Promise<FlowTestUserInstance>;
    /**
     * Update a FlowTestUserInstance
     *
     * @param { FlowTestUserContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlowTestUserInstance
     */
    update(params: FlowTestUserContextUpdateOptions, callback?: (error: Error | null, item?: FlowTestUserInstance) => any): Promise<FlowTestUserInstance>;
    update(params: any, callback?: any): Promise<FlowTestUserInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FlowTestUserContextSolution {
    sid?: string;
}
export declare class FlowTestUserContextImpl implements FlowTestUserContext {
    protected _version: V2;
    protected _solution: FlowTestUserContextSolution;
    protected _uri: string;
    constructor(_version: V2, sid: string);
    fetch(callback?: any): Promise<FlowTestUserInstance>;
    update(params: any, callback?: any): Promise<FlowTestUserInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FlowTestUserContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FlowTestUserResource {
    sid?: string | null;
    test_users?: Array<string> | null;
    url?: string | null;
}
export declare class FlowTestUserInstance {
    protected _version: V2;
    protected _solution: FlowTestUserContextSolution;
    protected _context?: FlowTestUserContext;
    constructor(_version: V2, payload: FlowTestUserResource, sid: string);
    /**
     * Unique identifier of the flow.
     */
    sid?: string | null;
    /**
     * List of test user identities that can test draft versions of the flow.
     */
    testUsers?: Array<string> | null;
    /**
     * The URL of this resource.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a FlowTestUserInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlowTestUserInstance
     */
    fetch(callback?: (error: Error | null, item?: FlowTestUserInstance) => any): Promise<FlowTestUserInstance>;
    /**
     * Update a FlowTestUserInstance
     *
     * @param { FlowTestUserContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FlowTestUserInstance
     */
    update(params: FlowTestUserContextUpdateOptions, callback?: (error: Error | null, item?: FlowTestUserInstance) => any): Promise<FlowTestUserInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        testUsers: string[] | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FlowTestUserListInstance {
    (): FlowTestUserContext;
    get(): FlowTestUserContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FlowTestUserSolution {
    sid?: string;
}
export declare function FlowTestUserListInstance(version: V2, sid: string): FlowTestUserListInstance;
export {};

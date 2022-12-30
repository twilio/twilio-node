/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
/**
 * Options to pass to update a DefaultsInstance
 *
 * @property { any } [defaults] A JSON string that describes the default task links for the `assistant_initiation`, `collect`, and `fallback` situations.
 */
export interface DefaultsContextUpdateOptions {
    defaults?: any;
}
export interface DefaultsContext {
    /**
     * Fetch a DefaultsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DefaultsInstance
     */
    fetch(callback?: (error: Error | null, item?: DefaultsInstance) => any): Promise<DefaultsInstance>;
    /**
     * Update a DefaultsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DefaultsInstance
     */
    update(callback?: (error: Error | null, item?: DefaultsInstance) => any): Promise<DefaultsInstance>;
    /**
     * Update a DefaultsInstance
     *
     * @param { DefaultsContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DefaultsInstance
     */
    update(params: DefaultsContextUpdateOptions, callback?: (error: Error | null, item?: DefaultsInstance) => any): Promise<DefaultsInstance>;
    update(params?: any, callback?: any): Promise<DefaultsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DefaultsContextSolution {
    assistantSid?: string;
}
export declare class DefaultsContextImpl implements DefaultsContext {
    protected _version: V1;
    protected _solution: DefaultsContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string);
    fetch(callback?: any): Promise<DefaultsInstance>;
    update(params?: any, callback?: any): Promise<DefaultsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): DefaultsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface DefaultsResource {
    account_sid?: string | null;
    assistant_sid?: string | null;
    url?: string | null;
    data?: any | null;
}
export declare class DefaultsInstance {
    protected _version: V1;
    protected _solution: DefaultsContextSolution;
    protected _context?: DefaultsContext;
    constructor(_version: V1, payload: DefaultsResource, assistantSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Assistant that is the parent of the resource
     */
    assistantSid?: string | null;
    /**
     * The absolute URL of the Defaults resource
     */
    url?: string | null;
    /**
     * The JSON string that describes the default task links
     */
    data?: any | null;
    private get _proxy();
    /**
     * Fetch a DefaultsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DefaultsInstance
     */
    fetch(callback?: (error: Error | null, item?: DefaultsInstance) => any): Promise<DefaultsInstance>;
    /**
     * Update a DefaultsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DefaultsInstance
     */
    update(callback?: (error: Error | null, item?: DefaultsInstance) => any): Promise<DefaultsInstance>;
    /**
     * Update a DefaultsInstance
     *
     * @param { DefaultsContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DefaultsInstance
     */
    update(params: DefaultsContextUpdateOptions, callback?: (error: Error | null, item?: DefaultsInstance) => any): Promise<DefaultsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        assistantSid: string | null | undefined;
        url: string | null | undefined;
        data: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface DefaultsListInstance {
    (): DefaultsContext;
    get(): DefaultsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DefaultsSolution {
    assistantSid?: string;
}
export declare function DefaultsListInstance(version: V1, assistantSid: string): DefaultsListInstance;
export {};

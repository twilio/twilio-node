/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Understand from "../../Understand";
/**
 * Options to pass to update a StyleSheetInstance
 *
 * @property { any } [styleSheet] The JSON Style sheet string
 */
export interface StyleSheetContextUpdateOptions {
    styleSheet?: any;
}
export interface StyleSheetContext {
    /**
     * Fetch a StyleSheetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed StyleSheetInstance
     */
    fetch(callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
    /**
     * Update a StyleSheetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed StyleSheetInstance
     */
    update(callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
    /**
     * Update a StyleSheetInstance
     *
     * @param { StyleSheetContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed StyleSheetInstance
     */
    update(params: StyleSheetContextUpdateOptions, callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
    update(params?: any, callback?: any): Promise<StyleSheetInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface StyleSheetContextSolution {
    assistantSid?: string;
}
export declare class StyleSheetContextImpl implements StyleSheetContext {
    protected _version: Understand;
    protected _solution: StyleSheetContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string);
    fetch(callback?: any): Promise<StyleSheetInstance>;
    update(params?: any, callback?: any): Promise<StyleSheetInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): StyleSheetContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface StyleSheetResource {
    account_sid?: string | null;
    assistant_sid?: string | null;
    url?: string | null;
    data?: any | null;
}
export declare class StyleSheetInstance {
    protected _version: Understand;
    protected _solution: StyleSheetContextSolution;
    protected _context?: StyleSheetContext;
    constructor(_version: Understand, payload: StyleSheetResource, assistantSid: string);
    /**
     * The unique ID of the Account that created this Assistant
     */
    accountSid?: string | null;
    /**
     * The unique ID of the Assistant
     */
    assistantSid?: string | null;
    url?: string | null;
    /**
     * The JSON style sheet object
     */
    data?: any | null;
    private get _proxy();
    /**
     * Fetch a StyleSheetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed StyleSheetInstance
     */
    fetch(callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
    /**
     * Update a StyleSheetInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed StyleSheetInstance
     */
    update(callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
    /**
     * Update a StyleSheetInstance
     *
     * @param { StyleSheetContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed StyleSheetInstance
     */
    update(params: StyleSheetContextUpdateOptions, callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
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
export interface StyleSheetListInstance {
    (): StyleSheetContext;
    get(): StyleSheetContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface StyleSheetSolution {
    assistantSid?: string;
}
export declare function StyleSheetListInstance(version: Understand, assistantSid: string): StyleSheetListInstance;
export {};

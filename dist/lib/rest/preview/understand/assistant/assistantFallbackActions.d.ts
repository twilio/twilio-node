/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Understand from "../../Understand";
/**
 * Options to pass to update a AssistantFallbackActionsInstance
 *
 * @property { any } [fallbackActions]
 */
export interface AssistantFallbackActionsContextUpdateOptions {
    fallbackActions?: any;
}
export interface AssistantFallbackActionsContext {
    /**
     * Fetch a AssistantFallbackActionsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantFallbackActionsInstance
     */
    fetch(callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
    /**
     * Update a AssistantFallbackActionsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantFallbackActionsInstance
     */
    update(callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
    /**
     * Update a AssistantFallbackActionsInstance
     *
     * @param { AssistantFallbackActionsContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantFallbackActionsInstance
     */
    update(params: AssistantFallbackActionsContextUpdateOptions, callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
    update(params?: any, callback?: any): Promise<AssistantFallbackActionsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssistantFallbackActionsContextSolution {
    assistantSid?: string;
}
export declare class AssistantFallbackActionsContextImpl implements AssistantFallbackActionsContext {
    protected _version: Understand;
    protected _solution: AssistantFallbackActionsContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string);
    fetch(callback?: any): Promise<AssistantFallbackActionsInstance>;
    update(params?: any, callback?: any): Promise<AssistantFallbackActionsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AssistantFallbackActionsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AssistantFallbackActionsResource {
    account_sid?: string | null;
    assistant_sid?: string | null;
    url?: string | null;
    data?: any | null;
}
export declare class AssistantFallbackActionsInstance {
    protected _version: Understand;
    protected _solution: AssistantFallbackActionsContextSolution;
    protected _context?: AssistantFallbackActionsContext;
    constructor(_version: Understand, payload: AssistantFallbackActionsResource, assistantSid: string);
    accountSid?: string | null;
    assistantSid?: string | null;
    url?: string | null;
    data?: any | null;
    private get _proxy();
    /**
     * Fetch a AssistantFallbackActionsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantFallbackActionsInstance
     */
    fetch(callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
    /**
     * Update a AssistantFallbackActionsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantFallbackActionsInstance
     */
    update(callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
    /**
     * Update a AssistantFallbackActionsInstance
     *
     * @param { AssistantFallbackActionsContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantFallbackActionsInstance
     */
    update(params: AssistantFallbackActionsContextUpdateOptions, callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
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
export interface AssistantFallbackActionsListInstance {
    (): AssistantFallbackActionsContext;
    get(): AssistantFallbackActionsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssistantFallbackActionsSolution {
    assistantSid?: string;
}
export declare function AssistantFallbackActionsListInstance(version: Understand, assistantSid: string): AssistantFallbackActionsListInstance;
export {};

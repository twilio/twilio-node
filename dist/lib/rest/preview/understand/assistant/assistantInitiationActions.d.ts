/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Understand from "../../Understand";
/**
 * Options to pass to update a AssistantInitiationActionsInstance
 *
 * @property { any } [initiationActions]
 */
export interface AssistantInitiationActionsContextUpdateOptions {
    initiationActions?: any;
}
export interface AssistantInitiationActionsContext {
    /**
     * Fetch a AssistantInitiationActionsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantInitiationActionsInstance
     */
    fetch(callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
    /**
     * Update a AssistantInitiationActionsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantInitiationActionsInstance
     */
    update(callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
    /**
     * Update a AssistantInitiationActionsInstance
     *
     * @param { AssistantInitiationActionsContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantInitiationActionsInstance
     */
    update(params: AssistantInitiationActionsContextUpdateOptions, callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
    update(params?: any, callback?: any): Promise<AssistantInitiationActionsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssistantInitiationActionsContextSolution {
    assistantSid?: string;
}
export declare class AssistantInitiationActionsContextImpl implements AssistantInitiationActionsContext {
    protected _version: Understand;
    protected _solution: AssistantInitiationActionsContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string);
    fetch(callback?: any): Promise<AssistantInitiationActionsInstance>;
    update(params?: any, callback?: any): Promise<AssistantInitiationActionsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AssistantInitiationActionsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AssistantInitiationActionsResource {
    account_sid?: string | null;
    assistant_sid?: string | null;
    url?: string | null;
    data?: any | null;
}
export declare class AssistantInitiationActionsInstance {
    protected _version: Understand;
    protected _solution: AssistantInitiationActionsContextSolution;
    protected _context?: AssistantInitiationActionsContext;
    constructor(_version: Understand, payload: AssistantInitiationActionsResource, assistantSid: string);
    accountSid?: string | null;
    assistantSid?: string | null;
    url?: string | null;
    data?: any | null;
    private get _proxy();
    /**
     * Fetch a AssistantInitiationActionsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantInitiationActionsInstance
     */
    fetch(callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
    /**
     * Update a AssistantInitiationActionsInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantInitiationActionsInstance
     */
    update(callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
    /**
     * Update a AssistantInitiationActionsInstance
     *
     * @param { AssistantInitiationActionsContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed AssistantInitiationActionsInstance
     */
    update(params: AssistantInitiationActionsContextUpdateOptions, callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
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
export interface AssistantInitiationActionsListInstance {
    (): AssistantInitiationActionsContext;
    get(): AssistantInitiationActionsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssistantInitiationActionsSolution {
    assistantSid?: string;
}
export declare function AssistantInitiationActionsListInstance(version: Understand, assistantSid: string): AssistantInitiationActionsListInstance;
export {};

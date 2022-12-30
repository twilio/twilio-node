/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to fetch a SettingInstance
 *
 * @property { string } [subaccountSid]
 */
export interface SettingContextFetchOptions {
    subaccountSid?: string;
}
/**
 * Options to pass to update a SettingInstance
 *
 * @property { boolean } [advancedFeatures]
 * @property { boolean } [voiceTrace]
 * @property { string } [subaccountSid]
 */
export interface SettingContextUpdateOptions {
    advancedFeatures?: boolean;
    voiceTrace?: boolean;
    subaccountSid?: string;
}
export interface SettingContext {
    /**
     * Fetch a SettingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SettingInstance
     */
    fetch(callback?: (error: Error | null, item?: SettingInstance) => any): Promise<SettingInstance>;
    /**
     * Fetch a SettingInstance
     *
     * @param { SettingContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SettingInstance
     */
    fetch(params: SettingContextFetchOptions, callback?: (error: Error | null, item?: SettingInstance) => any): Promise<SettingInstance>;
    fetch(params?: any, callback?: any): Promise<SettingInstance>;
    /**
     * Update a SettingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SettingInstance
     */
    update(callback?: (error: Error | null, item?: SettingInstance) => any): Promise<SettingInstance>;
    /**
     * Update a SettingInstance
     *
     * @param { SettingContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SettingInstance
     */
    update(params: SettingContextUpdateOptions, callback?: (error: Error | null, item?: SettingInstance) => any): Promise<SettingInstance>;
    update(params?: any, callback?: any): Promise<SettingInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SettingContextSolution {
}
export declare class SettingContextImpl implements SettingContext {
    protected _version: V1;
    protected _solution: SettingContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    fetch(params?: any, callback?: any): Promise<SettingInstance>;
    update(params?: any, callback?: any): Promise<SettingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SettingContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SettingResource {
    account_sid?: string | null;
    advanced_features?: boolean | null;
    voice_trace?: boolean | null;
    url?: string | null;
}
export declare class SettingInstance {
    protected _version: V1;
    protected _solution: SettingContextSolution;
    protected _context?: SettingContext;
    constructor(_version: V1, payload: SettingResource);
    accountSid?: string | null;
    advancedFeatures?: boolean | null;
    voiceTrace?: boolean | null;
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a SettingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SettingInstance
     */
    fetch(callback?: (error: Error | null, item?: SettingInstance) => any): Promise<SettingInstance>;
    /**
     * Fetch a SettingInstance
     *
     * @param { SettingContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SettingInstance
     */
    fetch(params: SettingContextFetchOptions, callback?: (error: Error | null, item?: SettingInstance) => any): Promise<SettingInstance>;
    /**
     * Update a SettingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SettingInstance
     */
    update(callback?: (error: Error | null, item?: SettingInstance) => any): Promise<SettingInstance>;
    /**
     * Update a SettingInstance
     *
     * @param { SettingContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SettingInstance
     */
    update(params: SettingContextUpdateOptions, callback?: (error: Error | null, item?: SettingInstance) => any): Promise<SettingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        advancedFeatures: boolean | null | undefined;
        voiceTrace: boolean | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SettingListInstance {
    (): SettingContext;
    get(): SettingContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SettingSolution {
}
export declare function SettingListInstance(version: V1): SettingListInstance;
export {};

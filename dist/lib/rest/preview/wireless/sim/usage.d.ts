/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Wireless from "../../Wireless";
/**
 * Options to pass to fetch a UsageInstance
 *
 * @property { string } [end]
 * @property { string } [start]
 */
export interface UsageContextFetchOptions {
    end?: string;
    start?: string;
}
export interface UsageContext {
    /**
     * Fetch a UsageInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UsageInstance
     */
    fetch(callback?: (error: Error | null, item?: UsageInstance) => any): Promise<UsageInstance>;
    /**
     * Fetch a UsageInstance
     *
     * @param { UsageContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UsageInstance
     */
    fetch(params: UsageContextFetchOptions, callback?: (error: Error | null, item?: UsageInstance) => any): Promise<UsageInstance>;
    fetch(params?: any, callback?: any): Promise<UsageInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UsageContextSolution {
    simSid?: string;
}
export declare class UsageContextImpl implements UsageContext {
    protected _version: Wireless;
    protected _solution: UsageContextSolution;
    protected _uri: string;
    constructor(_version: Wireless, simSid: string);
    fetch(params?: any, callback?: any): Promise<UsageInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): UsageContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface UsageResource {
    sim_sid?: string | null;
    sim_unique_name?: string | null;
    account_sid?: string | null;
    period?: any | null;
    commands_usage?: any | null;
    commands_costs?: any | null;
    data_usage?: any | null;
    data_costs?: any | null;
    url?: string | null;
}
export declare class UsageInstance {
    protected _version: Wireless;
    protected _solution: UsageContextSolution;
    protected _context?: UsageContext;
    constructor(_version: Wireless, payload: UsageResource, simSid: string);
    simSid?: string | null;
    simUniqueName?: string | null;
    accountSid?: string | null;
    period?: any | null;
    commandsUsage?: any | null;
    commandsCosts?: any | null;
    dataUsage?: any | null;
    dataCosts?: any | null;
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a UsageInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UsageInstance
     */
    fetch(callback?: (error: Error | null, item?: UsageInstance) => any): Promise<UsageInstance>;
    /**
     * Fetch a UsageInstance
     *
     * @param { UsageContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UsageInstance
     */
    fetch(params: UsageContextFetchOptions, callback?: (error: Error | null, item?: UsageInstance) => any): Promise<UsageInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        simSid: string | null | undefined;
        simUniqueName: string | null | undefined;
        accountSid: string | null | undefined;
        period: any;
        commandsUsage: any;
        commandsCosts: any;
        dataUsage: any;
        dataCosts: any;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface UsageListInstance {
    (): UsageContext;
    get(): UsageContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UsageSolution {
    simSid?: string;
}
export declare function UsageListInstance(version: Wireless, simSid: string): UsageListInstance;
export {};

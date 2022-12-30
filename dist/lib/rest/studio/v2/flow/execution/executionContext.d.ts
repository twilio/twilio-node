/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../../../V2";
export interface ExecutionContextContext {
    /**
     * Fetch a ExecutionContextInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExecutionContextInstance
     */
    fetch(callback?: (error: Error | null, item?: ExecutionContextInstance) => any): Promise<ExecutionContextInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ExecutionContextContextSolution {
    flowSid?: string;
    executionSid?: string;
}
export declare class ExecutionContextContextImpl implements ExecutionContextContext {
    protected _version: V2;
    protected _solution: ExecutionContextContextSolution;
    protected _uri: string;
    constructor(_version: V2, flowSid: string, executionSid: string);
    fetch(callback?: any): Promise<ExecutionContextInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ExecutionContextContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ExecutionContextResource {
    account_sid?: string | null;
    context?: any | null;
    flow_sid?: string | null;
    execution_sid?: string | null;
    url?: string | null;
}
export declare class ExecutionContextInstance {
    protected _version: V2;
    protected _solution: ExecutionContextContextSolution;
    protected _context?: ExecutionContextContext;
    constructor(_version: V2, payload: ExecutionContextResource, flowSid: string, executionSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The current state of the flow
     */
    context?: any | null;
    /**
     * The SID of the Flow
     */
    flowSid?: string | null;
    /**
     * The SID of the Execution
     */
    executionSid?: string | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a ExecutionContextInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExecutionContextInstance
     */
    fetch(callback?: (error: Error | null, item?: ExecutionContextInstance) => any): Promise<ExecutionContextInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        context: any;
        flowSid: string | null | undefined;
        executionSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ExecutionContextListInstance {
    (): ExecutionContextContext;
    get(): ExecutionContextContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ExecutionContextSolution {
    flowSid?: string;
    executionSid?: string;
}
export declare function ExecutionContextListInstance(version: V2, flowSid: string, executionSid: string): ExecutionContextListInstance;
export {};

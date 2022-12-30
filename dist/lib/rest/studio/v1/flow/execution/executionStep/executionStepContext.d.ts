/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../../V1";
export interface ExecutionStepContextContext {
    /**
     * Fetch a ExecutionStepContextInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExecutionStepContextInstance
     */
    fetch(callback?: (error: Error | null, item?: ExecutionStepContextInstance) => any): Promise<ExecutionStepContextInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ExecutionStepContextContextSolution {
    flowSid?: string;
    executionSid?: string;
    stepSid?: string;
}
export declare class ExecutionStepContextContextImpl implements ExecutionStepContextContext {
    protected _version: V1;
    protected _solution: ExecutionStepContextContextSolution;
    protected _uri: string;
    constructor(_version: V1, flowSid: string, executionSid: string, stepSid: string);
    fetch(callback?: any): Promise<ExecutionStepContextInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ExecutionStepContextContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ExecutionStepContextResource {
    account_sid?: string | null;
    context?: any | null;
    execution_sid?: string | null;
    flow_sid?: string | null;
    step_sid?: string | null;
    url?: string | null;
}
export declare class ExecutionStepContextInstance {
    protected _version: V1;
    protected _solution: ExecutionStepContextContextSolution;
    protected _context?: ExecutionStepContextContext;
    constructor(_version: V1, payload: ExecutionStepContextResource, flowSid: string, executionSid: string, stepSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The current state of the flow
     */
    context?: any | null;
    /**
     * The SID of the Execution
     */
    executionSid?: string | null;
    /**
     * The SID of the Flow
     */
    flowSid?: string | null;
    /**
     * Step SID
     */
    stepSid?: string | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a ExecutionStepContextInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ExecutionStepContextInstance
     */
    fetch(callback?: (error: Error | null, item?: ExecutionStepContextInstance) => any): Promise<ExecutionStepContextInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        context: any;
        executionSid: string | null | undefined;
        flowSid: string | null | undefined;
        stepSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ExecutionStepContextListInstance {
    (): ExecutionStepContextContext;
    get(): ExecutionStepContextContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ExecutionStepContextSolution {
    flowSid?: string;
    executionSid?: string;
    stepSid?: string;
}
export declare function ExecutionStepContextListInstance(version: V1, flowSid: string, executionSid: string, stepSid: string): ExecutionStepContextListInstance;
export {};

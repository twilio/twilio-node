/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../../V1";
export interface StepContextContext {
    /**
     * Fetch a StepContextInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed StepContextInstance
     */
    fetch(callback?: (error: Error | null, item?: StepContextInstance) => any): Promise<StepContextInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface StepContextContextSolution {
    flowSid?: string;
    engagementSid?: string;
    stepSid?: string;
}
export declare class StepContextContextImpl implements StepContextContext {
    protected _version: V1;
    protected _solution: StepContextContextSolution;
    protected _uri: string;
    constructor(_version: V1, flowSid: string, engagementSid: string, stepSid: string);
    fetch(callback?: any): Promise<StepContextInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): StepContextContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface StepContextResource {
    account_sid?: string | null;
    context?: any | null;
    engagement_sid?: string | null;
    flow_sid?: string | null;
    step_sid?: string | null;
    url?: string | null;
}
export declare class StepContextInstance {
    protected _version: V1;
    protected _solution: StepContextContextSolution;
    protected _context?: StepContextContext;
    constructor(_version: V1, payload: StepContextResource, flowSid: string, engagementSid: string, stepSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The current state of the flow
     */
    context?: any | null;
    /**
     * The SID of the Engagement
     */
    engagementSid?: string | null;
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
     * Fetch a StepContextInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed StepContextInstance
     */
    fetch(callback?: (error: Error | null, item?: StepContextInstance) => any): Promise<StepContextInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        context: any;
        engagementSid: string | null | undefined;
        flowSid: string | null | undefined;
        stepSid: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface StepContextListInstance {
    (): StepContextContext;
    get(): StepContextContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface StepContextSolution {
    flowSid?: string;
    engagementSid?: string;
    stepSid?: string;
}
export declare function StepContextListInstance(version: V1, flowSid: string, engagementSid: string, stepSid: string): StepContextListInstance;
export {};

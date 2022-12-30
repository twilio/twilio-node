/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
export interface EngagementContextContext {
    /**
     * Fetch a EngagementContextInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EngagementContextInstance
     */
    fetch(callback?: (error: Error | null, item?: EngagementContextInstance) => any): Promise<EngagementContextInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EngagementContextContextSolution {
    flowSid?: string;
    engagementSid?: string;
}
export declare class EngagementContextContextImpl implements EngagementContextContext {
    protected _version: V1;
    protected _solution: EngagementContextContextSolution;
    protected _uri: string;
    constructor(_version: V1, flowSid: string, engagementSid: string);
    fetch(callback?: any): Promise<EngagementContextInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): EngagementContextContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface EngagementContextResource {
    account_sid?: string | null;
    context?: any | null;
    engagement_sid?: string | null;
    flow_sid?: string | null;
    url?: string | null;
}
export declare class EngagementContextInstance {
    protected _version: V1;
    protected _solution: EngagementContextContextSolution;
    protected _context?: EngagementContextContext;
    constructor(_version: V1, payload: EngagementContextResource, flowSid: string, engagementSid: string);
    /**
     * Account SID
     */
    accountSid?: string | null;
    /**
     * Flow state
     */
    context?: any | null;
    /**
     * Engagement SID
     */
    engagementSid?: string | null;
    /**
     * Flow SID
     */
    flowSid?: string | null;
    /**
     * The URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a EngagementContextInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed EngagementContextInstance
     */
    fetch(callback?: (error: Error | null, item?: EngagementContextInstance) => any): Promise<EngagementContextInstance>;
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
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface EngagementContextListInstance {
    (): EngagementContextContext;
    get(): EngagementContextContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface EngagementContextSolution {
    flowSid?: string;
    engagementSid?: string;
}
export declare function EngagementContextListInstance(version: V1, flowSid: string, engagementSid: string): EngagementContextListInstance;
export {};

/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
declare type BuildStatusStatus = "building" | "completed" | "failed";
export interface BuildStatusContext {
    /**
     * Fetch a BuildStatusInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BuildStatusInstance
     */
    fetch(callback?: (error: Error | null, item?: BuildStatusInstance) => any): Promise<BuildStatusInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BuildStatusContextSolution {
    serviceSid?: string;
    sid?: string;
}
export declare class BuildStatusContextImpl implements BuildStatusContext {
    protected _version: V1;
    protected _solution: BuildStatusContextSolution;
    protected _uri: string;
    constructor(_version: V1, serviceSid: string, sid: string);
    fetch(callback?: any): Promise<BuildStatusInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): BuildStatusContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface BuildStatusResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    status?: BuildStatusStatus;
    url?: string | null;
}
export declare class BuildStatusInstance {
    protected _version: V1;
    protected _solution: BuildStatusContextSolution;
    protected _context?: BuildStatusContext;
    constructor(_version: V1, payload: BuildStatusResource, serviceSid: string, sid: string);
    /**
     * The unique string that identifies the Build resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the Build resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the Build resource is associated with
     */
    serviceSid?: string | null;
    status?: BuildStatusStatus;
    /**
     * The absolute URL of the Build Status resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a BuildStatusInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BuildStatusInstance
     */
    fetch(callback?: (error: Error | null, item?: BuildStatusInstance) => any): Promise<BuildStatusInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        status: BuildStatusStatus | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface BuildStatusListInstance {
    (): BuildStatusContext;
    get(): BuildStatusContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BuildStatusSolution {
    serviceSid?: string;
    sid?: string;
}
export declare function BuildStatusListInstance(version: V1, serviceSid: string, sid: string): BuildStatusListInstance;
export {};

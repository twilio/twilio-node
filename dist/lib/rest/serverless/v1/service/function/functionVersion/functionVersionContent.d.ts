/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../../V1";
export interface FunctionVersionContentContext {
    /**
     * Fetch a FunctionVersionContentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FunctionVersionContentInstance
     */
    fetch(callback?: (error: Error | null, item?: FunctionVersionContentInstance) => any): Promise<FunctionVersionContentInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FunctionVersionContentContextSolution {
    serviceSid?: string;
    functionSid?: string;
    sid?: string;
}
export declare class FunctionVersionContentContextImpl implements FunctionVersionContentContext {
    protected _version: V1;
    protected _solution: FunctionVersionContentContextSolution;
    protected _uri: string;
    constructor(_version: V1, serviceSid: string, functionSid: string, sid: string);
    fetch(callback?: any): Promise<FunctionVersionContentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FunctionVersionContentContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FunctionVersionContentResource {
    sid?: string | null;
    account_sid?: string | null;
    service_sid?: string | null;
    function_sid?: string | null;
    content?: string | null;
    url?: string | null;
}
export declare class FunctionVersionContentInstance {
    protected _version: V1;
    protected _solution: FunctionVersionContentContextSolution;
    protected _context?: FunctionVersionContentContext;
    constructor(_version: V1, payload: FunctionVersionContentResource, serviceSid: string, functionSid: string, sid: string);
    /**
     * The unique string that identifies the Function Version resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the Function Version resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Service that the Function Version resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The SID of the Function that is the parent of the Function Version
     */
    functionSid?: string | null;
    /**
     * The content of the Function Version resource
     */
    content?: string | null;
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a FunctionVersionContentInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FunctionVersionContentInstance
     */
    fetch(callback?: (error: Error | null, item?: FunctionVersionContentInstance) => any): Promise<FunctionVersionContentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        serviceSid: string | null | undefined;
        functionSid: string | null | undefined;
        content: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FunctionVersionContentListInstance {
    (): FunctionVersionContentContext;
    get(): FunctionVersionContentContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FunctionVersionContentSolution {
    serviceSid?: string;
    functionSid?: string;
    sid?: string;
}
export declare function FunctionVersionContentListInstance(version: V1, serviceSid: string, functionSid: string, sid: string): FunctionVersionContentListInstance;
export {};

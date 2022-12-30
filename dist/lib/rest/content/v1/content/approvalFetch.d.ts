/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
export interface ApprovalFetchContext {
    /**
     * Fetch a ApprovalFetchInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ApprovalFetchInstance
     */
    fetch(callback?: (error: Error | null, item?: ApprovalFetchInstance) => any): Promise<ApprovalFetchInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ApprovalFetchContextSolution {
    sid?: string;
}
export declare class ApprovalFetchContextImpl implements ApprovalFetchContext {
    protected _version: V1;
    protected _solution: ApprovalFetchContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    fetch(callback?: any): Promise<ApprovalFetchInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ApprovalFetchContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ApprovalFetchResource {
    sid?: string | null;
    account_sid?: string | null;
    whatsapp?: any | null;
    url?: string | null;
}
export declare class ApprovalFetchInstance {
    protected _version: V1;
    protected _solution: ApprovalFetchContextSolution;
    protected _context?: ApprovalFetchContext;
    constructor(_version: V1, payload: ApprovalFetchResource, sid: string);
    /**
     * The unique string that identifies the Content resource
     */
    sid?: string | null;
    /**
     * The SID of the Account that created the Content resource
     */
    accountSid?: string | null;
    /**
     * Contains the whatsapp approval information for the Content resource
     */
    whatsapp?: any | null;
    /**
     * The URL of the resource, relative to `https://content.twilio.com`
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a ApprovalFetchInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ApprovalFetchInstance
     */
    fetch(callback?: (error: Error | null, item?: ApprovalFetchInstance) => any): Promise<ApprovalFetchInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        whatsapp: any;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ApprovalFetchListInstance {
    (): ApprovalFetchContext;
    get(): ApprovalFetchContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ApprovalFetchSolution {
    sid?: string;
}
export declare function ApprovalFetchListInstance(version: V1, sid: string): ApprovalFetchListInstance;
export {};

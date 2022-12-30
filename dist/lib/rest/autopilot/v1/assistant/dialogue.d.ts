/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
export interface DialogueContext {
    /**
     * Fetch a DialogueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DialogueInstance
     */
    fetch(callback?: (error: Error | null, item?: DialogueInstance) => any): Promise<DialogueInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DialogueContextSolution {
    assistantSid?: string;
    sid?: string;
}
export declare class DialogueContextImpl implements DialogueContext {
    protected _version: V1;
    protected _solution: DialogueContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string, sid: string);
    fetch(callback?: any): Promise<DialogueInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): DialogueContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface DialogueResource {
    account_sid?: string | null;
    assistant_sid?: string | null;
    sid?: string | null;
    data?: any | null;
    url?: string | null;
}
export declare class DialogueInstance {
    protected _version: V1;
    protected _solution: DialogueContextSolution;
    protected _context?: DialogueContext;
    constructor(_version: V1, payload: DialogueResource, assistantSid: string, sid?: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Assistant that is the parent of the resource
     */
    assistantSid?: string | null;
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The JSON string that describes the dialogue session object
     */
    data?: any | null;
    /**
     * The absolute URL of the Dialogue resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a DialogueInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed DialogueInstance
     */
    fetch(callback?: (error: Error | null, item?: DialogueInstance) => any): Promise<DialogueInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        assistantSid: string | null | undefined;
        sid: string | null | undefined;
        data: any;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface DialogueListInstance {
    (sid: string): DialogueContext;
    get(sid: string): DialogueContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DialogueSolution {
    assistantSid?: string;
}
export declare function DialogueListInstance(version: V1, assistantSid: string): DialogueListInstance;
export {};

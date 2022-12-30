/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Understand from "../../Understand";
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
    protected _version: Understand;
    protected _solution: DialogueContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string, sid: string);
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
    protected _version: Understand;
    protected _solution: DialogueContextSolution;
    protected _context?: DialogueContext;
    constructor(_version: Understand, payload: DialogueResource, assistantSid: string, sid?: string);
    /**
     * The unique ID of the Account that created this Field.
     */
    accountSid?: string | null;
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid?: string | null;
    /**
     * The unique ID of the Dialogue
     */
    sid?: string | null;
    /**
     * The dialogue memory object as json
     */
    data?: any | null;
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
export declare function DialogueListInstance(version: Understand, assistantSid: string): DialogueListInstance;
export {};

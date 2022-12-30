/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../V2";
/**
 * Options to pass to create a SafelistInstance
 *
 * @property { string } phoneNumber The phone number to be added in SafeList. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
 */
export interface SafelistListInstanceCreateOptions {
    phoneNumber: string;
}
export interface SafelistContext {
    /**
     * Remove a SafelistInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SafelistInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SafelistInstance
     */
    fetch(callback?: (error: Error | null, item?: SafelistInstance) => any): Promise<SafelistInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SafelistContextSolution {
    phoneNumber?: string;
}
export declare class SafelistContextImpl implements SafelistContext {
    protected _version: V2;
    protected _solution: SafelistContextSolution;
    protected _uri: string;
    constructor(_version: V2, phoneNumber: string);
    remove(callback?: any): Promise<boolean>;
    fetch(callback?: any): Promise<SafelistInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SafelistContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SafelistResource {
    sid?: string | null;
    phone_number?: string | null;
    url?: string | null;
}
export declare class SafelistInstance {
    protected _version: V2;
    protected _solution: SafelistContextSolution;
    protected _context?: SafelistContext;
    constructor(_version: V2, payload: SafelistResource, phoneNumber?: string);
    /**
     * The unique string that identifies the resource.
     */
    sid?: string | null;
    /**
     * The phone number in SafeList.
     */
    phoneNumber?: string | null;
    /**
     * The absolute URL of the SafeList resource.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Remove a SafelistInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SafelistInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SafelistInstance
     */
    fetch(callback?: (error: Error | null, item?: SafelistInstance) => any): Promise<SafelistInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        phoneNumber: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SafelistListInstance {
    (phoneNumber: string): SafelistContext;
    get(phoneNumber: string): SafelistContext;
    /**
     * Create a SafelistInstance
     *
     * @param { SafelistListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SafelistInstance
     */
    create(params: SafelistListInstanceCreateOptions, callback?: (error: Error | null, item?: SafelistInstance) => any): Promise<SafelistInstance>;
    create(params: any, callback?: any): Promise<SafelistInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SafelistSolution {
}
export declare function SafelistListInstance(version: V2): SafelistListInstance;
export {};

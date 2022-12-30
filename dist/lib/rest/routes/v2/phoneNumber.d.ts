/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../V2";
/**
 * Options to pass to update a PhoneNumberInstance
 *
 * @property { string } [voiceRegion] The Inbound Processing Region used for this phone number for voice
 * @property { string } [friendlyName] A human readable description of this resource, up to 64 characters.
 */
export interface PhoneNumberContextUpdateOptions {
    voiceRegion?: string;
    friendlyName?: string;
}
export interface PhoneNumberContext {
    /**
     * Fetch a PhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PhoneNumberInstance
     */
    fetch(callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
    /**
     * Update a PhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PhoneNumberInstance
     */
    update(callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
    /**
     * Update a PhoneNumberInstance
     *
     * @param { PhoneNumberContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PhoneNumberInstance
     */
    update(params: PhoneNumberContextUpdateOptions, callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
    update(params?: any, callback?: any): Promise<PhoneNumberInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PhoneNumberContextSolution {
    phoneNumber?: string;
}
export declare class PhoneNumberContextImpl implements PhoneNumberContext {
    protected _version: V2;
    protected _solution: PhoneNumberContextSolution;
    protected _uri: string;
    constructor(_version: V2, phoneNumber: string);
    fetch(callback?: any): Promise<PhoneNumberInstance>;
    update(params?: any, callback?: any): Promise<PhoneNumberInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PhoneNumberContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PhoneNumberResource {
    phone_number?: string | null;
    url?: string | null;
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    voice_region?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
}
export declare class PhoneNumberInstance {
    protected _version: V2;
    protected _solution: PhoneNumberContextSolution;
    protected _context?: PhoneNumberContext;
    constructor(_version: V2, payload: PhoneNumberResource, phoneNumber?: string);
    /**
     * The phone number
     */
    phoneNumber?: string | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    /**
     * A string that uniquely identifies the Inbound Processing Region assignments for this phone number.
     */
    sid?: string | null;
    /**
     * Account Sid.
     */
    accountSid?: string | null;
    /**
     * A human readable description of the Inbound Processing Region assignments for this phone number.
     */
    friendlyName?: string | null;
    /**
     * The Inbound Processing Region used for this phone number for voice.
     */
    voiceRegion?: string | null;
    /**
     * The date that this phone number was assigned an Inbound Processing Region.
     */
    dateCreated?: Date | null;
    /**
     * The date that the Inbound Processing Region was updated for this phone number.
     */
    dateUpdated?: Date | null;
    private get _proxy();
    /**
     * Fetch a PhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PhoneNumberInstance
     */
    fetch(callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
    /**
     * Update a PhoneNumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PhoneNumberInstance
     */
    update(callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
    /**
     * Update a PhoneNumberInstance
     *
     * @param { PhoneNumberContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PhoneNumberInstance
     */
    update(params: PhoneNumberContextUpdateOptions, callback?: (error: Error | null, item?: PhoneNumberInstance) => any): Promise<PhoneNumberInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        phoneNumber: string | null | undefined;
        url: string | null | undefined;
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        friendlyName: string | null | undefined;
        voiceRegion: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PhoneNumberListInstance {
    (phoneNumber: string): PhoneNumberContext;
    get(phoneNumber: string): PhoneNumberContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PhoneNumberSolution {
}
export declare function PhoneNumberListInstance(version: V2): PhoneNumberListInstance;
export {};

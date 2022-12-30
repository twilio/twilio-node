/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../V2";
/**
 * Options to pass to update a SipDomainInstance
 *
 * @property { string } [voiceRegion]
 * @property { string } [friendlyName]
 */
export interface SipDomainContextUpdateOptions {
    voiceRegion?: string;
    friendlyName?: string;
}
export interface SipDomainContext {
    /**
     * Fetch a SipDomainInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SipDomainInstance
     */
    fetch(callback?: (error: Error | null, item?: SipDomainInstance) => any): Promise<SipDomainInstance>;
    /**
     * Update a SipDomainInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SipDomainInstance
     */
    update(callback?: (error: Error | null, item?: SipDomainInstance) => any): Promise<SipDomainInstance>;
    /**
     * Update a SipDomainInstance
     *
     * @param { SipDomainContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SipDomainInstance
     */
    update(params: SipDomainContextUpdateOptions, callback?: (error: Error | null, item?: SipDomainInstance) => any): Promise<SipDomainInstance>;
    update(params?: any, callback?: any): Promise<SipDomainInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SipDomainContextSolution {
    sipDomain?: string;
}
export declare class SipDomainContextImpl implements SipDomainContext {
    protected _version: V2;
    protected _solution: SipDomainContextSolution;
    protected _uri: string;
    constructor(_version: V2, sipDomain: string);
    fetch(callback?: any): Promise<SipDomainInstance>;
    update(params?: any, callback?: any): Promise<SipDomainInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SipDomainContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SipDomainResource {
    sip_domain?: string | null;
    url?: string | null;
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    voice_region?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
}
export declare class SipDomainInstance {
    protected _version: V2;
    protected _solution: SipDomainContextSolution;
    protected _context?: SipDomainContext;
    constructor(_version: V2, payload: SipDomainResource, sipDomain?: string);
    sipDomain?: string | null;
    url?: string | null;
    sid?: string | null;
    accountSid?: string | null;
    friendlyName?: string | null;
    voiceRegion?: string | null;
    dateCreated?: Date | null;
    dateUpdated?: Date | null;
    private get _proxy();
    /**
     * Fetch a SipDomainInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SipDomainInstance
     */
    fetch(callback?: (error: Error | null, item?: SipDomainInstance) => any): Promise<SipDomainInstance>;
    /**
     * Update a SipDomainInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SipDomainInstance
     */
    update(callback?: (error: Error | null, item?: SipDomainInstance) => any): Promise<SipDomainInstance>;
    /**
     * Update a SipDomainInstance
     *
     * @param { SipDomainContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SipDomainInstance
     */
    update(params: SipDomainContextUpdateOptions, callback?: (error: Error | null, item?: SipDomainInstance) => any): Promise<SipDomainInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sipDomain: string | null | undefined;
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
export interface SipDomainListInstance {
    (sipDomain: string): SipDomainContext;
    get(sipDomain: string): SipDomainContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SipDomainSolution {
}
export declare function SipDomainListInstance(version: V2): SipDomainListInstance;
export {};

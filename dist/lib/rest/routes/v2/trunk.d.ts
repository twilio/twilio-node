/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../V2";
/**
 * Options to pass to update a TrunkInstance
 *
 * @property { string } [voiceRegion] The Inbound Processing Region used for this SIP Trunk for voice
 * @property { string } [friendlyName] A human readable description of this resource, up to 64 characters.
 */
export interface TrunkContextUpdateOptions {
    voiceRegion?: string;
    friendlyName?: string;
}
export interface TrunkContext {
    /**
     * Fetch a TrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrunkInstance
     */
    fetch(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
    /**
     * Update a TrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrunkInstance
     */
    update(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
    /**
     * Update a TrunkInstance
     *
     * @param { TrunkContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrunkInstance
     */
    update(params: TrunkContextUpdateOptions, callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
    update(params?: any, callback?: any): Promise<TrunkInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TrunkContextSolution {
    sipTrunkDomain?: string;
}
export declare class TrunkContextImpl implements TrunkContext {
    protected _version: V2;
    protected _solution: TrunkContextSolution;
    protected _uri: string;
    constructor(_version: V2, sipTrunkDomain: string);
    fetch(callback?: any): Promise<TrunkInstance>;
    update(params?: any, callback?: any): Promise<TrunkInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TrunkContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TrunkResource {
    sip_trunk_domain?: string | null;
    url?: string | null;
    sid?: string | null;
    account_sid?: string | null;
    friendly_name?: string | null;
    voice_region?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
}
export declare class TrunkInstance {
    protected _version: V2;
    protected _solution: TrunkContextSolution;
    protected _context?: TrunkContext;
    constructor(_version: V2, payload: TrunkResource, sipTrunkDomain?: string);
    /**
     * The SIP Trunk
     */
    sipTrunkDomain?: string | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    /**
     * A string that uniquely identifies the Inbound Processing Region assignments for this SIP Trunk.
     */
    sid?: string | null;
    /**
     * Account Sid.
     */
    accountSid?: string | null;
    /**
     * A human readable description of the Inbound Processing Region assignments for this SIP Trunk.
     */
    friendlyName?: string | null;
    /**
     * The Inbound Processing Region used for this SIP Trunk for voice.
     */
    voiceRegion?: string | null;
    /**
     * The date that this SIP Trunk was assigned an Inbound Processing Region.
     */
    dateCreated?: Date | null;
    /**
     * The date that the Inbound Processing Region was updated for this SIP Trunk.
     */
    dateUpdated?: Date | null;
    private get _proxy();
    /**
     * Fetch a TrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrunkInstance
     */
    fetch(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
    /**
     * Update a TrunkInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrunkInstance
     */
    update(callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
    /**
     * Update a TrunkInstance
     *
     * @param { TrunkContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed TrunkInstance
     */
    update(params: TrunkContextUpdateOptions, callback?: (error: Error | null, item?: TrunkInstance) => any): Promise<TrunkInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sipTrunkDomain: string | null | undefined;
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
export interface TrunkListInstance {
    (sipTrunkDomain: string): TrunkContext;
    get(sipTrunkDomain: string): TrunkContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TrunkSolution {
}
export declare function TrunkListInstance(version: V2): TrunkListInstance;
export {};

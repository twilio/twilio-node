/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../../V2010";
declare type StreamStatus = "in-progress" | "stopped";
declare type StreamTrack = "inbound_track" | "outbound_track" | "both_tracks";
declare type StreamUpdateStatus = "stopped";
/**
 * Options to pass to update a StreamInstance
 *
 * @property { StreamUpdateStatus } status
 */
export interface StreamContextUpdateOptions {
    status: StreamUpdateStatus;
}
/**
 * Options to pass to create a StreamInstance
 *
 * @property { string } url Relative or absolute url where WebSocket connection will be established.
 * @property { string } [name] The user-specified name of this Stream, if one was given when the Stream was created. This may be used to stop the Stream.
 * @property { StreamTrack } [track]
 * @property { string } [statusCallback] Absolute URL of the status callback.
 * @property { string } [statusCallbackMethod] The http method for the status_callback (one of GET, POST).
 * @property { string } [parameter1.name] Parameter name
 * @property { string } [parameter1.value] Parameter value
 * @property { string } [parameter2.name] Parameter name
 * @property { string } [parameter2.value] Parameter value
 * @property { string } [parameter3.name] Parameter name
 * @property { string } [parameter3.value] Parameter value
 * @property { string } [parameter4.name] Parameter name
 * @property { string } [parameter4.value] Parameter value
 * @property { string } [parameter5.name] Parameter name
 * @property { string } [parameter5.value] Parameter value
 * @property { string } [parameter6.name] Parameter name
 * @property { string } [parameter6.value] Parameter value
 * @property { string } [parameter7.name] Parameter name
 * @property { string } [parameter7.value] Parameter value
 * @property { string } [parameter8.name] Parameter name
 * @property { string } [parameter8.value] Parameter value
 * @property { string } [parameter9.name] Parameter name
 * @property { string } [parameter9.value] Parameter value
 * @property { string } [parameter10.name] Parameter name
 * @property { string } [parameter10.value] Parameter value
 * @property { string } [parameter11.name] Parameter name
 * @property { string } [parameter11.value] Parameter value
 * @property { string } [parameter12.name] Parameter name
 * @property { string } [parameter12.value] Parameter value
 * @property { string } [parameter13.name] Parameter name
 * @property { string } [parameter13.value] Parameter value
 * @property { string } [parameter14.name] Parameter name
 * @property { string } [parameter14.value] Parameter value
 * @property { string } [parameter15.name] Parameter name
 * @property { string } [parameter15.value] Parameter value
 * @property { string } [parameter16.name] Parameter name
 * @property { string } [parameter16.value] Parameter value
 * @property { string } [parameter17.name] Parameter name
 * @property { string } [parameter17.value] Parameter value
 * @property { string } [parameter18.name] Parameter name
 * @property { string } [parameter18.value] Parameter value
 * @property { string } [parameter19.name] Parameter name
 * @property { string } [parameter19.value] Parameter value
 * @property { string } [parameter20.name] Parameter name
 * @property { string } [parameter20.value] Parameter value
 * @property { string } [parameter21.name] Parameter name
 * @property { string } [parameter21.value] Parameter value
 * @property { string } [parameter22.name] Parameter name
 * @property { string } [parameter22.value] Parameter value
 * @property { string } [parameter23.name] Parameter name
 * @property { string } [parameter23.value] Parameter value
 * @property { string } [parameter24.name] Parameter name
 * @property { string } [parameter24.value] Parameter value
 * @property { string } [parameter25.name] Parameter name
 * @property { string } [parameter25.value] Parameter value
 * @property { string } [parameter26.name] Parameter name
 * @property { string } [parameter26.value] Parameter value
 * @property { string } [parameter27.name] Parameter name
 * @property { string } [parameter27.value] Parameter value
 * @property { string } [parameter28.name] Parameter name
 * @property { string } [parameter28.value] Parameter value
 * @property { string } [parameter29.name] Parameter name
 * @property { string } [parameter29.value] Parameter value
 * @property { string } [parameter30.name] Parameter name
 * @property { string } [parameter30.value] Parameter value
 * @property { string } [parameter31.name] Parameter name
 * @property { string } [parameter31.value] Parameter value
 * @property { string } [parameter32.name] Parameter name
 * @property { string } [parameter32.value] Parameter value
 * @property { string } [parameter33.name] Parameter name
 * @property { string } [parameter33.value] Parameter value
 * @property { string } [parameter34.name] Parameter name
 * @property { string } [parameter34.value] Parameter value
 * @property { string } [parameter35.name] Parameter name
 * @property { string } [parameter35.value] Parameter value
 * @property { string } [parameter36.name] Parameter name
 * @property { string } [parameter36.value] Parameter value
 * @property { string } [parameter37.name] Parameter name
 * @property { string } [parameter37.value] Parameter value
 * @property { string } [parameter38.name] Parameter name
 * @property { string } [parameter38.value] Parameter value
 * @property { string } [parameter39.name] Parameter name
 * @property { string } [parameter39.value] Parameter value
 * @property { string } [parameter40.name] Parameter name
 * @property { string } [parameter40.value] Parameter value
 * @property { string } [parameter41.name] Parameter name
 * @property { string } [parameter41.value] Parameter value
 * @property { string } [parameter42.name] Parameter name
 * @property { string } [parameter42.value] Parameter value
 * @property { string } [parameter43.name] Parameter name
 * @property { string } [parameter43.value] Parameter value
 * @property { string } [parameter44.name] Parameter name
 * @property { string } [parameter44.value] Parameter value
 * @property { string } [parameter45.name] Parameter name
 * @property { string } [parameter45.value] Parameter value
 * @property { string } [parameter46.name] Parameter name
 * @property { string } [parameter46.value] Parameter value
 * @property { string } [parameter47.name] Parameter name
 * @property { string } [parameter47.value] Parameter value
 * @property { string } [parameter48.name] Parameter name
 * @property { string } [parameter48.value] Parameter value
 * @property { string } [parameter49.name] Parameter name
 * @property { string } [parameter49.value] Parameter value
 * @property { string } [parameter50.name] Parameter name
 * @property { string } [parameter50.value] Parameter value
 * @property { string } [parameter51.name] Parameter name
 * @property { string } [parameter51.value] Parameter value
 * @property { string } [parameter52.name] Parameter name
 * @property { string } [parameter52.value] Parameter value
 * @property { string } [parameter53.name] Parameter name
 * @property { string } [parameter53.value] Parameter value
 * @property { string } [parameter54.name] Parameter name
 * @property { string } [parameter54.value] Parameter value
 * @property { string } [parameter55.name] Parameter name
 * @property { string } [parameter55.value] Parameter value
 * @property { string } [parameter56.name] Parameter name
 * @property { string } [parameter56.value] Parameter value
 * @property { string } [parameter57.name] Parameter name
 * @property { string } [parameter57.value] Parameter value
 * @property { string } [parameter58.name] Parameter name
 * @property { string } [parameter58.value] Parameter value
 * @property { string } [parameter59.name] Parameter name
 * @property { string } [parameter59.value] Parameter value
 * @property { string } [parameter60.name] Parameter name
 * @property { string } [parameter60.value] Parameter value
 * @property { string } [parameter61.name] Parameter name
 * @property { string } [parameter61.value] Parameter value
 * @property { string } [parameter62.name] Parameter name
 * @property { string } [parameter62.value] Parameter value
 * @property { string } [parameter63.name] Parameter name
 * @property { string } [parameter63.value] Parameter value
 * @property { string } [parameter64.name] Parameter name
 * @property { string } [parameter64.value] Parameter value
 * @property { string } [parameter65.name] Parameter name
 * @property { string } [parameter65.value] Parameter value
 * @property { string } [parameter66.name] Parameter name
 * @property { string } [parameter66.value] Parameter value
 * @property { string } [parameter67.name] Parameter name
 * @property { string } [parameter67.value] Parameter value
 * @property { string } [parameter68.name] Parameter name
 * @property { string } [parameter68.value] Parameter value
 * @property { string } [parameter69.name] Parameter name
 * @property { string } [parameter69.value] Parameter value
 * @property { string } [parameter70.name] Parameter name
 * @property { string } [parameter70.value] Parameter value
 * @property { string } [parameter71.name] Parameter name
 * @property { string } [parameter71.value] Parameter value
 * @property { string } [parameter72.name] Parameter name
 * @property { string } [parameter72.value] Parameter value
 * @property { string } [parameter73.name] Parameter name
 * @property { string } [parameter73.value] Parameter value
 * @property { string } [parameter74.name] Parameter name
 * @property { string } [parameter74.value] Parameter value
 * @property { string } [parameter75.name] Parameter name
 * @property { string } [parameter75.value] Parameter value
 * @property { string } [parameter76.name] Parameter name
 * @property { string } [parameter76.value] Parameter value
 * @property { string } [parameter77.name] Parameter name
 * @property { string } [parameter77.value] Parameter value
 * @property { string } [parameter78.name] Parameter name
 * @property { string } [parameter78.value] Parameter value
 * @property { string } [parameter79.name] Parameter name
 * @property { string } [parameter79.value] Parameter value
 * @property { string } [parameter80.name] Parameter name
 * @property { string } [parameter80.value] Parameter value
 * @property { string } [parameter81.name] Parameter name
 * @property { string } [parameter81.value] Parameter value
 * @property { string } [parameter82.name] Parameter name
 * @property { string } [parameter82.value] Parameter value
 * @property { string } [parameter83.name] Parameter name
 * @property { string } [parameter83.value] Parameter value
 * @property { string } [parameter84.name] Parameter name
 * @property { string } [parameter84.value] Parameter value
 * @property { string } [parameter85.name] Parameter name
 * @property { string } [parameter85.value] Parameter value
 * @property { string } [parameter86.name] Parameter name
 * @property { string } [parameter86.value] Parameter value
 * @property { string } [parameter87.name] Parameter name
 * @property { string } [parameter87.value] Parameter value
 * @property { string } [parameter88.name] Parameter name
 * @property { string } [parameter88.value] Parameter value
 * @property { string } [parameter89.name] Parameter name
 * @property { string } [parameter89.value] Parameter value
 * @property { string } [parameter90.name] Parameter name
 * @property { string } [parameter90.value] Parameter value
 * @property { string } [parameter91.name] Parameter name
 * @property { string } [parameter91.value] Parameter value
 * @property { string } [parameter92.name] Parameter name
 * @property { string } [parameter92.value] Parameter value
 * @property { string } [parameter93.name] Parameter name
 * @property { string } [parameter93.value] Parameter value
 * @property { string } [parameter94.name] Parameter name
 * @property { string } [parameter94.value] Parameter value
 * @property { string } [parameter95.name] Parameter name
 * @property { string } [parameter95.value] Parameter value
 * @property { string } [parameter96.name] Parameter name
 * @property { string } [parameter96.value] Parameter value
 * @property { string } [parameter97.name] Parameter name
 * @property { string } [parameter97.value] Parameter value
 * @property { string } [parameter98.name] Parameter name
 * @property { string } [parameter98.value] Parameter value
 * @property { string } [parameter99.name] Parameter name
 * @property { string } [parameter99.value] Parameter value
 */
export interface StreamListInstanceCreateOptions {
    url: string;
    name?: string;
    track?: StreamTrack;
    statusCallback?: string;
    statusCallbackMethod?: string;
    "parameter1.name"?: string;
    "parameter1.value"?: string;
    "parameter2.name"?: string;
    "parameter2.value"?: string;
    "parameter3.name"?: string;
    "parameter3.value"?: string;
    "parameter4.name"?: string;
    "parameter4.value"?: string;
    "parameter5.name"?: string;
    "parameter5.value"?: string;
    "parameter6.name"?: string;
    "parameter6.value"?: string;
    "parameter7.name"?: string;
    "parameter7.value"?: string;
    "parameter8.name"?: string;
    "parameter8.value"?: string;
    "parameter9.name"?: string;
    "parameter9.value"?: string;
    "parameter10.name"?: string;
    "parameter10.value"?: string;
    "parameter11.name"?: string;
    "parameter11.value"?: string;
    "parameter12.name"?: string;
    "parameter12.value"?: string;
    "parameter13.name"?: string;
    "parameter13.value"?: string;
    "parameter14.name"?: string;
    "parameter14.value"?: string;
    "parameter15.name"?: string;
    "parameter15.value"?: string;
    "parameter16.name"?: string;
    "parameter16.value"?: string;
    "parameter17.name"?: string;
    "parameter17.value"?: string;
    "parameter18.name"?: string;
    "parameter18.value"?: string;
    "parameter19.name"?: string;
    "parameter19.value"?: string;
    "parameter20.name"?: string;
    "parameter20.value"?: string;
    "parameter21.name"?: string;
    "parameter21.value"?: string;
    "parameter22.name"?: string;
    "parameter22.value"?: string;
    "parameter23.name"?: string;
    "parameter23.value"?: string;
    "parameter24.name"?: string;
    "parameter24.value"?: string;
    "parameter25.name"?: string;
    "parameter25.value"?: string;
    "parameter26.name"?: string;
    "parameter26.value"?: string;
    "parameter27.name"?: string;
    "parameter27.value"?: string;
    "parameter28.name"?: string;
    "parameter28.value"?: string;
    "parameter29.name"?: string;
    "parameter29.value"?: string;
    "parameter30.name"?: string;
    "parameter30.value"?: string;
    "parameter31.name"?: string;
    "parameter31.value"?: string;
    "parameter32.name"?: string;
    "parameter32.value"?: string;
    "parameter33.name"?: string;
    "parameter33.value"?: string;
    "parameter34.name"?: string;
    "parameter34.value"?: string;
    "parameter35.name"?: string;
    "parameter35.value"?: string;
    "parameter36.name"?: string;
    "parameter36.value"?: string;
    "parameter37.name"?: string;
    "parameter37.value"?: string;
    "parameter38.name"?: string;
    "parameter38.value"?: string;
    "parameter39.name"?: string;
    "parameter39.value"?: string;
    "parameter40.name"?: string;
    "parameter40.value"?: string;
    "parameter41.name"?: string;
    "parameter41.value"?: string;
    "parameter42.name"?: string;
    "parameter42.value"?: string;
    "parameter43.name"?: string;
    "parameter43.value"?: string;
    "parameter44.name"?: string;
    "parameter44.value"?: string;
    "parameter45.name"?: string;
    "parameter45.value"?: string;
    "parameter46.name"?: string;
    "parameter46.value"?: string;
    "parameter47.name"?: string;
    "parameter47.value"?: string;
    "parameter48.name"?: string;
    "parameter48.value"?: string;
    "parameter49.name"?: string;
    "parameter49.value"?: string;
    "parameter50.name"?: string;
    "parameter50.value"?: string;
    "parameter51.name"?: string;
    "parameter51.value"?: string;
    "parameter52.name"?: string;
    "parameter52.value"?: string;
    "parameter53.name"?: string;
    "parameter53.value"?: string;
    "parameter54.name"?: string;
    "parameter54.value"?: string;
    "parameter55.name"?: string;
    "parameter55.value"?: string;
    "parameter56.name"?: string;
    "parameter56.value"?: string;
    "parameter57.name"?: string;
    "parameter57.value"?: string;
    "parameter58.name"?: string;
    "parameter58.value"?: string;
    "parameter59.name"?: string;
    "parameter59.value"?: string;
    "parameter60.name"?: string;
    "parameter60.value"?: string;
    "parameter61.name"?: string;
    "parameter61.value"?: string;
    "parameter62.name"?: string;
    "parameter62.value"?: string;
    "parameter63.name"?: string;
    "parameter63.value"?: string;
    "parameter64.name"?: string;
    "parameter64.value"?: string;
    "parameter65.name"?: string;
    "parameter65.value"?: string;
    "parameter66.name"?: string;
    "parameter66.value"?: string;
    "parameter67.name"?: string;
    "parameter67.value"?: string;
    "parameter68.name"?: string;
    "parameter68.value"?: string;
    "parameter69.name"?: string;
    "parameter69.value"?: string;
    "parameter70.name"?: string;
    "parameter70.value"?: string;
    "parameter71.name"?: string;
    "parameter71.value"?: string;
    "parameter72.name"?: string;
    "parameter72.value"?: string;
    "parameter73.name"?: string;
    "parameter73.value"?: string;
    "parameter74.name"?: string;
    "parameter74.value"?: string;
    "parameter75.name"?: string;
    "parameter75.value"?: string;
    "parameter76.name"?: string;
    "parameter76.value"?: string;
    "parameter77.name"?: string;
    "parameter77.value"?: string;
    "parameter78.name"?: string;
    "parameter78.value"?: string;
    "parameter79.name"?: string;
    "parameter79.value"?: string;
    "parameter80.name"?: string;
    "parameter80.value"?: string;
    "parameter81.name"?: string;
    "parameter81.value"?: string;
    "parameter82.name"?: string;
    "parameter82.value"?: string;
    "parameter83.name"?: string;
    "parameter83.value"?: string;
    "parameter84.name"?: string;
    "parameter84.value"?: string;
    "parameter85.name"?: string;
    "parameter85.value"?: string;
    "parameter86.name"?: string;
    "parameter86.value"?: string;
    "parameter87.name"?: string;
    "parameter87.value"?: string;
    "parameter88.name"?: string;
    "parameter88.value"?: string;
    "parameter89.name"?: string;
    "parameter89.value"?: string;
    "parameter90.name"?: string;
    "parameter90.value"?: string;
    "parameter91.name"?: string;
    "parameter91.value"?: string;
    "parameter92.name"?: string;
    "parameter92.value"?: string;
    "parameter93.name"?: string;
    "parameter93.value"?: string;
    "parameter94.name"?: string;
    "parameter94.value"?: string;
    "parameter95.name"?: string;
    "parameter95.value"?: string;
    "parameter96.name"?: string;
    "parameter96.value"?: string;
    "parameter97.name"?: string;
    "parameter97.value"?: string;
    "parameter98.name"?: string;
    "parameter98.value"?: string;
    "parameter99.name"?: string;
    "parameter99.value"?: string;
}
export interface StreamContext {
    /**
     * Update a StreamInstance
     *
     * @param { StreamContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed StreamInstance
     */
    update(params: StreamContextUpdateOptions, callback?: (error: Error | null, item?: StreamInstance) => any): Promise<StreamInstance>;
    update(params: any, callback?: any): Promise<StreamInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface StreamContextSolution {
    accountSid?: string;
    callSid?: string;
    sid?: string;
}
export declare class StreamContextImpl implements StreamContext {
    protected _version: V2010;
    protected _solution: StreamContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, callSid: string, sid: string);
    update(params: any, callback?: any): Promise<StreamInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): StreamContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface StreamResource {
    sid?: string | null;
    account_sid?: string | null;
    call_sid?: string | null;
    name?: string | null;
    status?: StreamStatus;
    date_updated?: Date | null;
    uri?: string | null;
}
export declare class StreamInstance {
    protected _version: V2010;
    protected _solution: StreamContextSolution;
    protected _context?: StreamContext;
    constructor(_version: V2010, payload: StreamResource, accountSid: string, callSid: string, sid?: string);
    /**
     * The SID of the Stream resource.
     */
    sid?: string | null;
    /**
     * The SID of the Account that created this resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Call the resource is associated with
     */
    callSid?: string | null;
    /**
     * The name of this resource
     */
    name?: string | null;
    status?: StreamStatus;
    /**
     * The RFC 2822 date and time in GMT that this resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    private get _proxy();
    /**
     * Update a StreamInstance
     *
     * @param { StreamContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed StreamInstance
     */
    update(params: StreamContextUpdateOptions, callback?: (error: Error | null, item?: StreamInstance) => any): Promise<StreamInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        accountSid: string | null | undefined;
        callSid: string | null | undefined;
        name: string | null | undefined;
        status: StreamStatus | undefined;
        dateUpdated: Date | null | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface StreamListInstance {
    (sid: string): StreamContext;
    get(sid: string): StreamContext;
    /**
     * Create a StreamInstance
     *
     * @param { StreamListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed StreamInstance
     */
    create(params: StreamListInstanceCreateOptions, callback?: (error: Error | null, item?: StreamInstance) => any): Promise<StreamInstance>;
    create(params: any, callback?: any): Promise<StreamInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface StreamSolution {
    accountSid?: string;
    callSid?: string;
}
export declare function StreamListInstance(version: V2010, accountSid: string, callSid: string): StreamListInstance;
export {};

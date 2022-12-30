/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
declare type RecordingRecordingMode = "do-not-record" | "record-from-ringing" | "record-from-answer" | "record-from-ringing-dual" | "record-from-answer-dual";
declare type RecordingRecordingTrim = "trim-silence" | "do-not-trim";
/**
 * Options to pass to update a RecordingInstance
 *
 * @property { RecordingRecordingMode } [mode]
 * @property { RecordingRecordingTrim } [trim]
 */
export interface RecordingContextUpdateOptions {
    mode?: RecordingRecordingMode;
    trim?: RecordingRecordingTrim;
}
export interface RecordingContext {
    /**
     * Fetch a RecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingInstance
     */
    fetch(callback?: (error: Error | null, item?: RecordingInstance) => any): Promise<RecordingInstance>;
    /**
     * Update a RecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingInstance
     */
    update(callback?: (error: Error | null, item?: RecordingInstance) => any): Promise<RecordingInstance>;
    /**
     * Update a RecordingInstance
     *
     * @param { RecordingContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingInstance
     */
    update(params: RecordingContextUpdateOptions, callback?: (error: Error | null, item?: RecordingInstance) => any): Promise<RecordingInstance>;
    update(params?: any, callback?: any): Promise<RecordingInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RecordingContextSolution {
    trunkSid?: string;
}
export declare class RecordingContextImpl implements RecordingContext {
    protected _version: V1;
    protected _solution: RecordingContextSolution;
    protected _uri: string;
    constructor(_version: V1, trunkSid: string);
    fetch(callback?: any): Promise<RecordingInstance>;
    update(params?: any, callback?: any): Promise<RecordingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): RecordingContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface RecordingResource {
    mode?: RecordingRecordingMode;
    trim?: RecordingRecordingTrim;
}
export declare class RecordingInstance {
    protected _version: V1;
    protected _solution: RecordingContextSolution;
    protected _context?: RecordingContext;
    constructor(_version: V1, payload: RecordingResource, trunkSid: string);
    mode?: RecordingRecordingMode;
    trim?: RecordingRecordingTrim;
    private get _proxy();
    /**
     * Fetch a RecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingInstance
     */
    fetch(callback?: (error: Error | null, item?: RecordingInstance) => any): Promise<RecordingInstance>;
    /**
     * Update a RecordingInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingInstance
     */
    update(callback?: (error: Error | null, item?: RecordingInstance) => any): Promise<RecordingInstance>;
    /**
     * Update a RecordingInstance
     *
     * @param { RecordingContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed RecordingInstance
     */
    update(params: RecordingContextUpdateOptions, callback?: (error: Error | null, item?: RecordingInstance) => any): Promise<RecordingInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        mode: RecordingRecordingMode | undefined;
        trim: RecordingRecordingTrim | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface RecordingListInstance {
    (): RecordingContext;
    get(): RecordingContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RecordingSolution {
    trunkSid?: string;
}
export declare function RecordingListInstance(version: V1, trunkSid: string): RecordingListInstance;
export {};

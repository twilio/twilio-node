/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
/**
 * Options to pass to create a StreamMessageInstance
 *
 * @property { any } data A JSON string that represents an arbitrary, schema-less object that makes up the Stream Message body. Can be up to 4 KiB in length.
 */
export interface StreamMessageListInstanceCreateOptions {
    data: any;
}
export interface StreamMessageListInstance {
    /**
     * Create a StreamMessageInstance
     *
     * @param { StreamMessageListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed StreamMessageInstance
     */
    create(params: StreamMessageListInstanceCreateOptions, callback?: (error: Error | null, item?: StreamMessageInstance) => any): Promise<StreamMessageInstance>;
    create(params: any, callback?: any): Promise<StreamMessageInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface StreamMessageSolution {
    serviceSid?: string;
    streamSid?: string;
}
export declare function StreamMessageListInstance(version: V1, serviceSid: string, streamSid: string): StreamMessageListInstance;
interface StreamMessageResource {
    sid?: string | null;
    data?: any | null;
}
export declare class StreamMessageInstance {
    protected _version: V1;
    constructor(_version: V1, payload: StreamMessageResource, serviceSid: string, streamSid: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * Stream Message body
     */
    data?: any | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        data: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};

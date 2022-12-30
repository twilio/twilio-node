/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
export interface SinkTestListInstance {
    /**
     * Create a SinkTestInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SinkTestInstance
     */
    create(callback?: (error: Error | null, item?: SinkTestInstance) => any): Promise<SinkTestInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SinkTestSolution {
    sid?: string;
}
export declare function SinkTestListInstance(version: V1, sid: string): SinkTestListInstance;
interface SinkTestResource {
    result?: string | null;
}
export declare class SinkTestInstance {
    protected _version: V1;
    constructor(_version: V1, payload: SinkTestResource, sid: string);
    /**
     * Feedback indicating whether the test event was generated.
     */
    result?: string | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        result: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};

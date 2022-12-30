/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
/**
 * Options to pass to create a SinkValidateInstance
 *
 * @property { string } testId A 34 character string that uniquely identifies the test event for a Sink being validated.
 */
export interface SinkValidateListInstanceCreateOptions {
    testId: string;
}
export interface SinkValidateListInstance {
    /**
     * Create a SinkValidateInstance
     *
     * @param { SinkValidateListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed SinkValidateInstance
     */
    create(params: SinkValidateListInstanceCreateOptions, callback?: (error: Error | null, item?: SinkValidateInstance) => any): Promise<SinkValidateInstance>;
    create(params: any, callback?: any): Promise<SinkValidateInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SinkValidateSolution {
    sid?: string;
}
export declare function SinkValidateListInstance(version: V1, sid: string): SinkValidateListInstance;
interface SinkValidateResource {
    result?: string | null;
}
export declare class SinkValidateInstance {
    protected _version: V1;
    constructor(_version: V1, payload: SinkValidateResource, sid: string);
    /**
     * Feedback indicating whether the given Sink was validated.
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

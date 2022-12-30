/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../V2";
declare type VerificationAttemptsSummaryChannels = "sms" | "call" | "email" | "whatsapp";
/**
 * Options to pass to fetch a VerificationAttemptsSummaryInstance
 *
 * @property { string } [verifyServiceSid] Filter used to consider only Verification Attempts of the given verify service on the summary aggregation.
 * @property { Date } [dateCreatedAfter] Datetime filter used to consider only Verification Attempts created after this datetime on the summary aggregation. Given as GMT in RFC 2822 format.
 * @property { Date } [dateCreatedBefore] Datetime filter used to consider only Verification Attempts created before this datetime on the summary aggregation. Given as GMT in RFC 2822 format.
 * @property { string } [country] Filter used to consider only Verification Attempts sent to the specified destination country on the summary aggregation.
 * @property { VerificationAttemptsSummaryChannels } [channel] Filter Verification Attempts considered on the summary aggregation by communication channel. Valid values are `SMS` and `CALL`
 * @property { string } [destinationPrefix] Filter the Verification Attempts considered on the summary aggregation by Destination prefix. It is the prefix of a phone number in E.164 format.
 */
export interface VerificationAttemptsSummaryContextFetchOptions {
    verifyServiceSid?: string;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    country?: string;
    channel?: VerificationAttemptsSummaryChannels;
    destinationPrefix?: string;
}
export interface VerificationAttemptsSummaryContext {
    /**
     * Fetch a VerificationAttemptsSummaryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VerificationAttemptsSummaryInstance
     */
    fetch(callback?: (error: Error | null, item?: VerificationAttemptsSummaryInstance) => any): Promise<VerificationAttemptsSummaryInstance>;
    /**
     * Fetch a VerificationAttemptsSummaryInstance
     *
     * @param { VerificationAttemptsSummaryContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VerificationAttemptsSummaryInstance
     */
    fetch(params: VerificationAttemptsSummaryContextFetchOptions, callback?: (error: Error | null, item?: VerificationAttemptsSummaryInstance) => any): Promise<VerificationAttemptsSummaryInstance>;
    fetch(params?: any, callback?: any): Promise<VerificationAttemptsSummaryInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface VerificationAttemptsSummaryContextSolution {
}
export declare class VerificationAttemptsSummaryContextImpl implements VerificationAttemptsSummaryContext {
    protected _version: V2;
    protected _solution: VerificationAttemptsSummaryContextSolution;
    protected _uri: string;
    constructor(_version: V2);
    fetch(params?: any, callback?: any): Promise<VerificationAttemptsSummaryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): VerificationAttemptsSummaryContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface VerificationAttemptsSummaryResource {
    total_attempts?: number | null;
    total_converted?: number | null;
    total_unconverted?: number | null;
    conversion_rate_percentage?: number | null;
    url?: string | null;
}
export declare class VerificationAttemptsSummaryInstance {
    protected _version: V2;
    protected _solution: VerificationAttemptsSummaryContextSolution;
    protected _context?: VerificationAttemptsSummaryContext;
    constructor(_version: V2, payload: VerificationAttemptsSummaryResource);
    /**
     * Total of attempts made.
     */
    totalAttempts?: number | null;
    /**
     * Total of attempts confirmed by the end user.
     */
    totalConverted?: number | null;
    /**
     * Total of attempts made that were not confirmed by the end user.
     */
    totalUnconverted?: number | null;
    /**
     * Percentage of the confirmed messages over the total.
     */
    conversionRatePercentage?: number | null;
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a VerificationAttemptsSummaryInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VerificationAttemptsSummaryInstance
     */
    fetch(callback?: (error: Error | null, item?: VerificationAttemptsSummaryInstance) => any): Promise<VerificationAttemptsSummaryInstance>;
    /**
     * Fetch a VerificationAttemptsSummaryInstance
     *
     * @param { VerificationAttemptsSummaryContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VerificationAttemptsSummaryInstance
     */
    fetch(params: VerificationAttemptsSummaryContextFetchOptions, callback?: (error: Error | null, item?: VerificationAttemptsSummaryInstance) => any): Promise<VerificationAttemptsSummaryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        totalAttempts: number | null | undefined;
        totalConverted: number | null | undefined;
        totalUnconverted: number | null | undefined;
        conversionRatePercentage: number | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface VerificationAttemptsSummaryListInstance {
    (): VerificationAttemptsSummaryContext;
    get(): VerificationAttemptsSummaryContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface VerificationAttemptsSummarySolution {
}
export declare function VerificationAttemptsSummaryListInstance(version: V2): VerificationAttemptsSummaryListInstance;
export {};

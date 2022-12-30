/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../../V2";
declare type VerificationCheckChannel = "sms" | "call" | "email" | "whatsapp" | "sna";
/**
 * Options to pass to create a VerificationCheckInstance
 *
 * @property { string } [code] The 4-10 character string being verified.
 * @property { string } [to] The phone number or [email](https://www.twilio.com/docs/verify/email) to verify. Either this parameter or the `verification_sid` must be specified. Phone numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
 * @property { string } [verificationSid] A SID that uniquely identifies the Verification Check. Either this parameter or the `to` phone number/[email](https://www.twilio.com/docs/verify/email) must be specified.
 * @property { string } [amount] The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
 * @property { string } [payee] The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
 */
export interface VerificationCheckListInstanceCreateOptions {
    code?: string;
    to?: string;
    verificationSid?: string;
    amount?: string;
    payee?: string;
}
export interface VerificationCheckListInstance {
    /**
     * Create a VerificationCheckInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VerificationCheckInstance
     */
    create(callback?: (error: Error | null, item?: VerificationCheckInstance) => any): Promise<VerificationCheckInstance>;
    /**
     * Create a VerificationCheckInstance
     *
     * @param { VerificationCheckListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed VerificationCheckInstance
     */
    create(params: VerificationCheckListInstanceCreateOptions, callback?: (error: Error | null, item?: VerificationCheckInstance) => any): Promise<VerificationCheckInstance>;
    create(params?: any, callback?: any): Promise<VerificationCheckInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface VerificationCheckSolution {
    serviceSid?: string;
}
export declare function VerificationCheckListInstance(version: V2, serviceSid: string): VerificationCheckListInstance;
interface VerificationCheckResource {
    sid?: string | null;
    service_sid?: string | null;
    account_sid?: string | null;
    to?: string | null;
    channel?: VerificationCheckChannel;
    status?: string | null;
    valid?: boolean | null;
    amount?: string | null;
    payee?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    sna_attempts_error_codes?: Array<any> | null;
}
export declare class VerificationCheckInstance {
    protected _version: V2;
    constructor(_version: V2, payload: VerificationCheckResource, serviceSid: string);
    /**
     * The unique string that identifies the resource
     */
    sid?: string | null;
    /**
     * The SID of the Service that the resource is associated with
     */
    serviceSid?: string | null;
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The phone number or email being verified
     */
    to?: string | null;
    channel?: VerificationCheckChannel;
    /**
     * The status of the verification resource
     */
    status?: string | null;
    /**
     * Whether the verification was successful
     */
    valid?: boolean | null;
    /**
     * The amount of the associated PSD2 compliant transaction.
     */
    amount?: string | null;
    /**
     * The payee of the associated PSD2 compliant transaction
     */
    payee?: string | null;
    /**
     * The ISO 8601 date and time in GMT when the Verification Check resource was created
     */
    dateCreated?: Date | null;
    /**
     * The ISO 8601 date and time in GMT when the Verification Check resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * List of error codes as a result of attempting a verification using the `sna` channel.
     */
    snaAttemptsErrorCodes?: Array<any> | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string | null | undefined;
        serviceSid: string | null | undefined;
        accountSid: string | null | undefined;
        to: string | null | undefined;
        channel: VerificationCheckChannel | undefined;
        status: string | null | undefined;
        valid: boolean | null | undefined;
        amount: string | null | undefined;
        payee: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        snaAttemptsErrorCodes: any[] | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};

/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../V2010";
/**
 * Options to pass to create a ValidationRequestInstance
 *
 * @property { string } phoneNumber The phone number to verify in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
 * @property { string } [friendlyName] A descriptive string that you create to describe the new caller ID resource. It can be up to 64 characters long. The default value is a formatted version of the phone number.
 * @property { number } [callDelay] The number of seconds to delay before initiating the verification call. Can be an integer between `0` and `60`, inclusive. The default is `0`.
 * @property { string } [extension] The digits to dial after connecting the verification call.
 * @property { string } [statusCallback] The URL we should call using the `status_callback_method` to send status information about the verification process to your application.
 * @property { string } [statusCallbackMethod] The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`, and the default is `POST`.
 */
export interface ValidationRequestListInstanceCreateOptions {
    phoneNumber: string;
    friendlyName?: string;
    callDelay?: number;
    extension?: string;
    statusCallback?: string;
    statusCallbackMethod?: string;
}
export interface ValidationRequestListInstance {
    /**
     * Create a ValidationRequestInstance
     *
     * @param { ValidationRequestListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ValidationRequestInstance
     */
    create(params: ValidationRequestListInstanceCreateOptions, callback?: (error: Error | null, item?: ValidationRequestInstance) => any): Promise<ValidationRequestInstance>;
    create(params: any, callback?: any): Promise<ValidationRequestInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ValidationRequestSolution {
    accountSid?: string;
}
export declare function ValidationRequestListInstance(version: V2010, accountSid: string): ValidationRequestListInstance;
interface ValidationRequestResource {
    account_sid?: string | null;
    call_sid?: string | null;
    friendly_name?: string | null;
    phone_number?: string | null;
    validation_code?: string | null;
}
export declare class ValidationRequestInstance {
    protected _version: V2010;
    constructor(_version: V2010, payload: ValidationRequestResource, accountSid: string);
    /**
     * The SID of the Account that created the resource
     */
    accountSid?: string | null;
    /**
     * The SID of the Call the resource is associated with
     */
    callSid?: string | null;
    /**
     * The string that you assigned to describe the resource
     */
    friendlyName?: string | null;
    /**
     * The phone number to verify in E.164 format
     */
    phoneNumber?: string | null;
    /**
     * The 6 digit validation code that someone must enter to validate the Caller ID  when `phone_number` is called
     */
    validationCode?: string | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        callSid: string | null | undefined;
        friendlyName: string | null | undefined;
        phoneNumber: string | null | undefined;
        validationCode: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};

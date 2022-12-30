/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../../V2010";
declare type PaymentsBankAccountType = "consumer-checking" | "consumer-savings" | "commercial-checking";
declare type PaymentsCapture = "payment-card-number" | "expiration-date" | "security-code" | "postal-code" | "bank-routing-number" | "bank-account-number";
declare type PaymentsPaymentMethod = "credit-card" | "ach-debit";
declare type PaymentsStatus = "complete" | "cancel";
declare type PaymentsTokenType = "one-time" | "reusable";
/**
 * Options to pass to update a PaymentInstance
 *
 * @property { string } idempotencyKey A unique token that will be used to ensure that multiple API calls with the same information do not result in multiple transactions. This should be a unique string value per API call and can be a randomly generated.
 * @property { string } statusCallback Provide an absolute or relative URL to receive status updates regarding your Pay session. Read more about the [Update](https://www.twilio.com/docs/voice/api/payment-resource#statuscallback-update) and [Complete/Cancel](https://www.twilio.com/docs/voice/api/payment-resource#statuscallback-cancelcomplete) POST requests.
 * @property { PaymentsCapture } [capture]
 * @property { PaymentsStatus } [status]
 */
export interface PaymentContextUpdateOptions {
    idempotencyKey: string;
    statusCallback: string;
    capture?: PaymentsCapture;
    status?: PaymentsStatus;
}
/**
 * Options to pass to create a PaymentInstance
 *
 * @property { string } idempotencyKey A unique token that will be used to ensure that multiple API calls with the same information do not result in multiple transactions. This should be a unique string value per API call and can be a randomly generated.
 * @property { string } statusCallback Provide an absolute or relative URL to receive status updates regarding your Pay session. Read more about the [expected StatusCallback values](https://www.twilio.com/docs/voice/api/payment-resource#statuscallback)
 * @property { PaymentsBankAccountType } [bankAccountType]
 * @property { number } [chargeAmount] A positive decimal value less than 1,000,000 to charge against the credit card or bank account. Default currency can be overwritten with `currency` field. Leave blank or set to 0 to tokenize.
 * @property { string } [currency] The currency of the `charge_amount`, formatted as [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format. The default value is `USD` and all values allowed from the Pay Connector are accepted.
 * @property { string } [description] The description can be used to provide more details regarding the transaction. This information is submitted along with the payment details to the Payment Connector which are then posted on the transactions.
 * @property { string } [input] A list of inputs that should be accepted. Currently only `dtmf` is supported. All digits captured during a pay session are redacted from the logs.
 * @property { number } [minPostalCodeLength] A positive integer that is used to validate the length of the `PostalCode` inputted by the user. User must enter this many digits.
 * @property { any } [parameter] A single-level JSON object used to pass custom parameters to payment processors. (Required for ACH payments). The information that has to be included here depends on the <Pay> Connector. [Read more](https://www.twilio.com/console/voice/pay-connectors).
 * @property { string } [paymentConnector] This is the unique name corresponding to the Pay Connector installed in the Twilio Add-ons. Learn more about [<Pay> Connectors](https://www.twilio.com/console/voice/pay-connectors). The default value is `Default`.
 * @property { PaymentsPaymentMethod } [paymentMethod]
 * @property { boolean } [postalCode] Indicates whether the credit card postal code (zip code) is a required piece of payment information that must be provided by the caller. The default is `true`.
 * @property { boolean } [securityCode] Indicates whether the credit card security code is a required piece of payment information that must be provided by the caller. The default is `true`.
 * @property { number } [timeout] The number of seconds that <Pay> should wait for the caller to press a digit between each subsequent digit, after the first one, before moving on to validate the digits captured. The default is `5`, maximum is `600`.
 * @property { PaymentsTokenType } [tokenType]
 * @property { string } [validCardTypes] Credit card types separated by space that Pay should accept. The default value is `visa mastercard amex`
 */
export interface PaymentListInstanceCreateOptions {
    idempotencyKey: string;
    statusCallback: string;
    bankAccountType?: PaymentsBankAccountType;
    chargeAmount?: number;
    currency?: string;
    description?: string;
    input?: string;
    minPostalCodeLength?: number;
    parameter?: any;
    paymentConnector?: string;
    paymentMethod?: PaymentsPaymentMethod;
    postalCode?: boolean;
    securityCode?: boolean;
    timeout?: number;
    tokenType?: PaymentsTokenType;
    validCardTypes?: string;
}
export interface PaymentContext {
    /**
     * Update a PaymentInstance
     *
     * @param { PaymentContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PaymentInstance
     */
    update(params: PaymentContextUpdateOptions, callback?: (error: Error | null, item?: PaymentInstance) => any): Promise<PaymentInstance>;
    update(params: any, callback?: any): Promise<PaymentInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PaymentContextSolution {
    accountSid?: string;
    callSid?: string;
    sid?: string;
}
export declare class PaymentContextImpl implements PaymentContext {
    protected _version: V2010;
    protected _solution: PaymentContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, callSid: string, sid: string);
    update(params: any, callback?: any): Promise<PaymentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PaymentContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PaymentResource {
    account_sid?: string | null;
    call_sid?: string | null;
    sid?: string | null;
    date_created?: Date | null;
    date_updated?: Date | null;
    uri?: string | null;
}
export declare class PaymentInstance {
    protected _version: V2010;
    protected _solution: PaymentContextSolution;
    protected _context?: PaymentContext;
    constructor(_version: V2010, payload: PaymentResource, accountSid: string, callSid: string, sid?: string);
    /**
     * The SID of the Account that created the Payments resource.
     */
    accountSid?: string | null;
    /**
     * The SID of the Call the resource is associated with.
     */
    callSid?: string | null;
    /**
     * The SID of the Payments resource.
     */
    sid?: string | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was created
     */
    dateCreated?: Date | null;
    /**
     * The RFC 2822 date and time in GMT that the resource was last updated
     */
    dateUpdated?: Date | null;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`
     */
    uri?: string | null;
    private get _proxy();
    /**
     * Update a PaymentInstance
     *
     * @param { PaymentContextUpdateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PaymentInstance
     */
    update(params: PaymentContextUpdateOptions, callback?: (error: Error | null, item?: PaymentInstance) => any): Promise<PaymentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        callSid: string | null | undefined;
        sid: string | null | undefined;
        dateCreated: Date | null | undefined;
        dateUpdated: Date | null | undefined;
        uri: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PaymentListInstance {
    (sid: string): PaymentContext;
    get(sid: string): PaymentContext;
    /**
     * Create a PaymentInstance
     *
     * @param { PaymentListInstanceCreateOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed PaymentInstance
     */
    create(params: PaymentListInstanceCreateOptions, callback?: (error: Error | null, item?: PaymentInstance) => any): Promise<PaymentInstance>;
    create(params: any, callback?: any): Promise<PaymentInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PaymentSolution {
    accountSid?: string;
    callSid?: string;
}
export declare function PaymentListInstance(version: V2010, accountSid: string, callSid: string): PaymentListInstance;
export {};

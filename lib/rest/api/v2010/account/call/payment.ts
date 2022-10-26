/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");



type PaymentsTokenType = 'one-time'|'reusable';

type PaymentsBankAccountType = 'consumer-checking'|'consumer-savings'|'commercial-checking';

type PaymentsPaymentMethod = 'credit-card'|'ach-debit';

type PaymentsStatus = 'complete'|'cancel';

type PaymentsCapture = 'payment-card-number'|'expiration-date'|'security-code'|'postal-code'|'bank-routing-number'|'bank-account-number';


/**
 * Options to pass to create a PaymentInstance
 *
 * @property { string } idempotencyKey A unique token that will be used to ensure that multiple API calls with the same information do not result in multiple transactions. This should be a unique string value per API call and can be a randomly generated.
 * @property { string } statusCallback Provide an absolute or relative URL to receive status updates regarding your Pay session. Read more about the [expected StatusCallback values](https://www.twilio.com/docs/voice/api/payment-resource#statuscallback)
 * @property { PaymentsBankAccountType } [bankAccountType] 
 * @property { number } [chargeAmount] A positive decimal value less than 1,000,000 to charge against the credit card or bank account. Default currency can be overwritten with &#x60;currency&#x60; field. Leave blank or set to 0 to tokenize.
 * @property { string } [currency] The currency of the &#x60;charge_amount&#x60;, formatted as [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format. The default value is &#x60;USD&#x60; and all values allowed from the Pay Connector are accepted.
 * @property { string } [description] The description can be used to provide more details regarding the transaction. This information is submitted along with the payment details to the Payment Connector which are then posted on the transactions.
 * @property { string } [input] A list of inputs that should be accepted. Currently only &#x60;dtmf&#x60; is supported. All digits captured during a pay session are redacted from the logs.
 * @property { number } [minPostalCodeLength] A positive integer that is used to validate the length of the &#x60;PostalCode&#x60; inputted by the user. User must enter this many digits.
 * @property { any } [parameter] A single-level JSON object used to pass custom parameters to payment processors. (Required for ACH payments). The information that has to be included here depends on the &lt;Pay&gt; Connector. [Read more](https://www.twilio.com/console/voice/pay-connectors).
 * @property { string } [paymentConnector] This is the unique name corresponding to the Pay Connector installed in the Twilio Add-ons. Learn more about [&lt;Pay&gt; Connectors](https://www.twilio.com/console/voice/pay-connectors). The default value is &#x60;Default&#x60;.
 * @property { PaymentsPaymentMethod } [paymentMethod] 
 * @property { boolean } [postalCode] Indicates whether the credit card postal code (zip code) is a required piece of payment information that must be provided by the caller. The default is &#x60;true&#x60;.
 * @property { boolean } [securityCode] Indicates whether the credit card security code is a required piece of payment information that must be provided by the caller. The default is &#x60;true&#x60;.
 * @property { number } [timeout] The number of seconds that &lt;Pay&gt; should wait for the caller to press a digit between each subsequent digit, after the first one, before moving on to validate the digits captured. The default is &#x60;5&#x60;, maximum is &#x60;600&#x60;.
 * @property { PaymentsTokenType } [tokenType] 
 * @property { string } [validCardTypes] Credit card types separated by space that Pay should accept. The default value is &#x60;visa mastercard amex&#x60;
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
  create(params: any, callback?: any): Promise<PaymentInstance>


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

interface PaymentListInstanceImpl extends PaymentListInstance {}
class PaymentListInstanceImpl implements PaymentListInstance {
  _version?: V2010;
  _solution?: PaymentSolution;
  _uri?: string;

}

export function PaymentListInstance(version: V2010, accountSid: string, callSid: string): PaymentListInstance {
  const instance = ((sid) => instance.get(sid)) as PaymentListInstanceImpl;

  instance.get = function get(sid): PaymentContext {
    return new PaymentContextImpl(version, accountSid, callSid, sid);
  }

  instance._version = version;
  instance._solution = { accountSid, callSid };
  instance._uri = `/Accounts/${accountSid}/Calls/${callSid}/Payments.json`;

  instance.create = function create(params: any, callback?: any): Promise<PaymentInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.idempotencyKey === null || params.idempotencyKey === undefined) {
      throw new Error('Required parameter "params.idempotencyKey" missing.');
    }

    if (params.statusCallback === null || params.statusCallback === undefined) {
      throw new Error('Required parameter "params.statusCallback" missing.');
    }

    const data: any = {};

    data['IdempotencyKey'] = params.idempotencyKey;
    data['StatusCallback'] = params.statusCallback;
    if (params.bankAccountType !== undefined) data['BankAccountType'] = params.bankAccountType;
    if (params.chargeAmount !== undefined) data['ChargeAmount'] = params.chargeAmount;
    if (params.currency !== undefined) data['Currency'] = params.currency;
    if (params.description !== undefined) data['Description'] = params.description;
    if (params.input !== undefined) data['Input'] = params.input;
    if (params.minPostalCodeLength !== undefined) data['MinPostalCodeLength'] = params.minPostalCodeLength;
    if (params.parameter !== undefined) data['Parameter'] = params.parameter;
    if (params.paymentConnector !== undefined) data['PaymentConnector'] = params.paymentConnector;
    if (params.paymentMethod !== undefined) data['PaymentMethod'] = params.paymentMethod;
    if (params.postalCode !== undefined) data['PostalCode'] = serialize.bool(params.postalCode);
    if (params.securityCode !== undefined) data['SecurityCode'] = serialize.bool(params.securityCode);
    if (params.timeout !== undefined) data['Timeout'] = params.timeout;
    if (params.tokenType !== undefined) data['TokenType'] = params.tokenType;
    if (params.validCardTypes !== undefined) data['ValidCardTypes'] = params.validCardTypes;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new PaymentInstance(operationVersion, payload, this._solution.accountSid, this._solution.callSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
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
  update(params: any, callback?: any): Promise<PaymentInstance>


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

export class PaymentContextImpl implements PaymentContext {
  protected _solution: PaymentContextSolution;
  protected _uri: string;


  constructor(protected _version: V2010, accountSid: string, callSid: string, sid: string) {
    this._solution = { accountSid, callSid, sid };
    this._uri = `/Accounts/${accountSid}/Calls/${callSid}/Payments/${sid}.json`;
  }

  update(params: any, callback?: any): Promise<PaymentInstance> {
      if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.idempotencyKey === null || params.idempotencyKey === undefined) {
      throw new Error('Required parameter "params.idempotencyKey" missing.');
    }

    if (params.statusCallback === null || params.statusCallback === undefined) {
      throw new Error('Required parameter "params.statusCallback" missing.');
    }

    const data: any = {};

    data['IdempotencyKey'] = params.idempotencyKey;
    data['StatusCallback'] = params.statusCallback;
    if (params.capture !== undefined) data['Capture'] = params.capture;
    if (params.status !== undefined) data['Status'] = params.status;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new PaymentInstance(operationVersion, payload, this._solution.accountSid, this._solution.callSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface PaymentPayload extends PaymentResource{
}

interface PaymentResource {
  account_sid?: string | null;
  call_sid?: string | null;
  sid?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  uri?: string | null;
}

export class PaymentInstance {
  protected _solution: PaymentContextSolution;
  protected _context?: PaymentContext;

  constructor(protected _version: V2010, payload: PaymentPayload, accountSid: string, callSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.callSid = payload.call_sid;
    this.sid = payload.sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.uri = payload.uri;

    this._solution = { accountSid, callSid, sid: sid || this.sid };
  }

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
  dateCreated?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: string | null;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;

  private get _proxy(): PaymentContext {
    this._context = this._context || new PaymentContextImpl(this._version, this._solution.accountSid, this._solution.callSid, this._solution.sid);
    return this._context;
  }

  /**
   * Update a PaymentInstance
   *
   * @param { PaymentContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed PaymentInstance
   */
  update(params: PaymentContextUpdateOptions, callback?: (error: Error | null, item?: PaymentInstance) => any): Promise<PaymentInstance>;
  update(params: any, callback?: any): Promise<PaymentInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      callSid: this.callSid, 
      sid: this.sid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      uri: this.uri
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}




/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trusthub
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to update a ComplianceInquiriesInstance
 */
export interface ComplianceInquiriesContextUpdateOptions {
  /** The unique SID identifier of the Primary Customer Profile that should be used as a parent. Only necessary when creating a secondary Customer Profile. */
  primaryProfileSid: string;
  /** Theme id for styling the inquiry form. */
  themeSetId?: string;
}

/**
 * Options to pass to create a ComplianceInquiriesInstance
 */
export interface ComplianceInquiriesListInstanceCreateOptions {
  /** The unique SID identifier of the Primary Customer Profile that should be used as a parent. Only necessary when creating a secondary Customer Profile. */
  primaryProfileSid: string;
  /** The email address that approval status updates will be sent to. If not specified, the email address associated with your primary customer profile will be used. */
  notificationEmail?: string;
  /** Theme id for styling the inquiry form. */
  themeSetId?: string;
}

export interface ComplianceInquiriesContext {
  /**
   * Update a ComplianceInquiriesInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ComplianceInquiriesInstance
   */
  update(
    params: ComplianceInquiriesContextUpdateOptions,
    callback?: (error: Error | null, item?: ComplianceInquiriesInstance) => any
  ): Promise<ComplianceInquiriesInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ComplianceInquiriesContextSolution {
  customerId: string;
}

export class ComplianceInquiriesContextImpl
  implements ComplianceInquiriesContext
{
  protected _solution: ComplianceInquiriesContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, customerId: string) {
    if (!isValidPathParam(customerId)) {
      throw new Error("Parameter 'customerId' is not valid.");
    }

    this._solution = { customerId };
    this._uri = `/ComplianceInquiries/Customers/${customerId}/Initialize`;
  }

  update(
    params: ComplianceInquiriesContextUpdateOptions,
    callback?: (error: Error | null, item?: ComplianceInquiriesInstance) => any
  ): Promise<ComplianceInquiriesInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["primaryProfileSid"] === null ||
      params["primaryProfileSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['primaryProfileSid']\" missing."
      );
    }

    let data: any = {};

    data["PrimaryProfileSid"] = params["primaryProfileSid"];
    if (params["themeSetId"] !== undefined)
      data["ThemeSetId"] = params["themeSetId"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ComplianceInquiriesInstance(
          operationVersion,
          payload,
          instance._solution.customerId
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
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

interface ComplianceInquiriesPayload extends ComplianceInquiriesResource {}

interface ComplianceInquiriesResource {
  inquiry_id: string;
  inquiry_session_token: string;
  customer_id: string;
  url: string;
}

export class ComplianceInquiriesInstance {
  protected _solution: ComplianceInquiriesContextSolution;
  protected _context?: ComplianceInquiriesContext;

  constructor(
    protected _version: V1,
    payload: ComplianceInquiriesResource,
    customerId?: string
  ) {
    this.inquiryId = payload.inquiry_id;
    this.inquirySessionToken = payload.inquiry_session_token;
    this.customerId = payload.customer_id;
    this.url = payload.url;

    this._solution = { customerId: customerId || this.customerId };
  }

  /**
   * The unique ID used to start an embedded compliance registration session.
   */
  inquiryId: string;
  /**
   * The session token used to start an embedded compliance registration session.
   */
  inquirySessionToken: string;
  /**
   * The CustomerID matching the Customer Profile that should be resumed or resubmitted for editing.
   */
  customerId: string;
  /**
   * The URL of this resource.
   */
  url: string;

  private get _proxy(): ComplianceInquiriesContext {
    this._context =
      this._context ||
      new ComplianceInquiriesContextImpl(
        this._version,
        this._solution.customerId
      );
    return this._context;
  }

  /**
   * Update a ComplianceInquiriesInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ComplianceInquiriesInstance
   */
  update(
    params: ComplianceInquiriesContextUpdateOptions,
    callback?: (error: Error | null, item?: ComplianceInquiriesInstance) => any
  ): Promise<ComplianceInquiriesInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: ComplianceInquiriesInstance) => any
  ): Promise<ComplianceInquiriesInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      inquiryId: this.inquiryId,
      inquirySessionToken: this.inquirySessionToken,
      customerId: this.customerId,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ComplianceInquiriesSolution {}

export interface ComplianceInquiriesListInstance {
  _version: V1;
  _solution: ComplianceInquiriesSolution;
  _uri: string;

  (customerId: string): ComplianceInquiriesContext;
  get(customerId: string): ComplianceInquiriesContext;

  /**
   * Create a ComplianceInquiriesInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ComplianceInquiriesInstance
   */
  create(
    params: ComplianceInquiriesListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ComplianceInquiriesInstance) => any
  ): Promise<ComplianceInquiriesInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ComplianceInquiriesListInstance(
  version: V1
): ComplianceInquiriesListInstance {
  const instance = ((customerId) =>
    instance.get(customerId)) as ComplianceInquiriesListInstance;

  instance.get = function get(customerId): ComplianceInquiriesContext {
    return new ComplianceInquiriesContextImpl(version, customerId);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/ComplianceInquiries/Customers/Initialize`;

  instance.create = function create(
    params: ComplianceInquiriesListInstanceCreateOptions,
    callback?: (error: Error | null, items: ComplianceInquiriesInstance) => any
  ): Promise<ComplianceInquiriesInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["primaryProfileSid"] === null ||
      params["primaryProfileSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['primaryProfileSid']\" missing."
      );
    }

    let data: any = {};

    data["PrimaryProfileSid"] = params["primaryProfileSid"];
    if (params["notificationEmail"] !== undefined)
      data["NotificationEmail"] = params["notificationEmail"];
    if (params["themeSetId"] !== undefined)
      data["ThemeSetId"] = params["themeSetId"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new ComplianceInquiriesInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

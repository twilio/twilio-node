/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
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
 * Options to pass to create a SigningRequestConfigurationInstance
 */
export interface SigningRequestConfigurationListInstanceCreateOptions {
  /**  */
  body?: object;
}

export interface SigningRequestConfigurationSolution {}

export interface SigningRequestConfigurationListInstance {
  _version: V1;
  _solution: SigningRequestConfigurationSolution;
  _uri: string;

  /**
   * Create a SigningRequestConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SigningRequestConfigurationInstance
   */
  create(
    callback?: (
      error: Error | null,
      item?: SigningRequestConfigurationInstance
    ) => any
  ): Promise<SigningRequestConfigurationInstance>;
  /**
   * Create a SigningRequestConfigurationInstance
   *
   * @param params - Body for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SigningRequestConfigurationInstance
   */
  create(
    params: object,
    callback?: (
      error: Error | null,
      item?: SigningRequestConfigurationInstance
    ) => any
  ): Promise<SigningRequestConfigurationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SigningRequestConfigurationListInstance(
  version: V1
): SigningRequestConfigurationListInstance {
  const instance = {} as SigningRequestConfigurationListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/SigningRequest/Configuration`;

  instance.create = function create(
    params?:
      | object
      | ((
          error: Error | null,
          items: SigningRequestConfigurationInstance
        ) => any),
    callback?: (
      error: Error | null,
      items: SigningRequestConfigurationInstance
    ) => any
  ): Promise<SigningRequestConfigurationInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    data = params;

    const headers: any = {};
    headers["Content-Type"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SigningRequestConfigurationInstance(operationVersion, payload)
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

interface SigningRequestConfigurationPayload
  extends SigningRequestConfigurationResource {}

interface SigningRequestConfigurationResource {
  logo_sid: string;
  friendly_name: string;
  product: string;
  country: string;
  email_subject: string;
  email_message: string;
  url_redirection: string;
  url: string;
}

export class SigningRequestConfigurationInstance {
  constructor(
    protected _version: V1,
    payload: SigningRequestConfigurationResource
  ) {
    this.logoSid = payload.logo_sid;
    this.friendlyName = payload.friendly_name;
    this.product = payload.product;
    this.country = payload.country;
    this.emailSubject = payload.email_subject;
    this.emailMessage = payload.email_message;
    this.urlRedirection = payload.url_redirection;
    this.url = payload.url;
  }

  /**
   * The SID of the document  that includes the logo that will appear in the LOA. To upload documents follow the following guide: https://www.twilio.com/docs/phone-numbers/regulatory/getting-started/create-new-bundle-public-rest-apis#supporting-document-create
   */
  logoSid: string;
  /**
   * This is the string that you assigned as a friendly name for describing the creation of the configuration.
   */
  friendlyName: string;
  /**
   * The product or service for which is requesting the signature.
   */
  product: string;
  /**
   * The country ISO code to apply the configuration.
   */
  country: string;
  /**
   * Subject of the email that the end client will receive ex: “Twilio Hosting Request”, maximum length of 255 characters.
   */
  emailSubject: string;
  /**
   * Content of the email that the end client will receive ex: “This is a Hosting request from Twilio, please check the document and sign it”, maximum length of 5,000 characters.
   */
  emailMessage: string;
  /**
   * Url the end client will be redirected after signing a document.
   */
  urlRedirection: string;
  url: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      logoSid: this.logoSid,
      friendlyName: this.friendlyName,
      product: this.product,
      country: this.country,
      emailSubject: this.emailSubject,
      emailMessage: this.emailMessage,
      urlRedirection: this.urlRedirection,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

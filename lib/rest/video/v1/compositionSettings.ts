/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Video
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

/**
 * Options to pass to create a CompositionSettingsInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the resource and show to the user in the console
 * @property { string } [awsCredentialsSid] The SID of the stored Credential resource.
 * @property { string } [encryptionKeySid] The SID of the Public Key resource to use for encryption.
 * @property { string } [awsS3Url] The URL of the AWS S3 bucket where the compositions should be stored. We only support DNS-compliant URLs like &#x60;https://documentation-example-twilio-bucket/compositions&#x60;, where &#x60;compositions&#x60; is the path in which you want the compositions to be stored. This URL accepts only URI-valid characters, as described in the &lt;a href&#x3D;\\\&#39;https://tools.ietf.org/html/rfc3986#section-2\\\&#39;&gt;RFC 3986&lt;/a&gt;.
 * @property { boolean } [awsStorageEnabled] Whether all compositions should be written to the &#x60;aws_s3_url&#x60;. When &#x60;false&#x60;, all compositions are stored in our cloud.
 * @property { boolean } [encryptionEnabled] Whether all compositions should be stored in an encrypted form. The default is &#x60;false&#x60;.
 */
export interface CompositionSettingsContextCreateOptions {
  friendlyName: string;
  awsCredentialsSid?: string;
  encryptionKeySid?: string;
  awsS3Url?: string;
  awsStorageEnabled?: boolean;
  encryptionEnabled?: boolean;
}

export interface CompositionSettingsContext {
  /**
   * Create a CompositionSettingsInstance
   *
   * @param { CompositionSettingsContextCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CompositionSettingsInstance
   */
  create(
    params: CompositionSettingsContextCreateOptions,
    callback?: (error: Error | null, item?: CompositionSettingsInstance) => any
  ): Promise<CompositionSettingsInstance>;
  create(params: any, callback?: any): Promise<CompositionSettingsInstance>;

  /**
   * Fetch a CompositionSettingsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CompositionSettingsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CompositionSettingsInstance) => any
  ): Promise<CompositionSettingsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CompositionSettingsContextSolution {}

export class CompositionSettingsContextImpl
  implements CompositionSettingsContext
{
  protected _solution: CompositionSettingsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1) {
    this._solution = {};
    this._uri = `/CompositionSettings/Default`;
  }

  create(params: any, callback?: any): Promise<CompositionSettingsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];
    if (params["awsCredentialsSid"] !== undefined)
      data["AwsCredentialsSid"] = params["awsCredentialsSid"];
    if (params["encryptionKeySid"] !== undefined)
      data["EncryptionKeySid"] = params["encryptionKeySid"];
    if (params["awsS3Url"] !== undefined) data["AwsS3Url"] = params["awsS3Url"];
    if (params["awsStorageEnabled"] !== undefined)
      data["AwsStorageEnabled"] = serialize.bool(params["awsStorageEnabled"]);
    if (params["encryptionEnabled"] !== undefined)
      data["EncryptionEnabled"] = serialize.bool(params["encryptionEnabled"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new CompositionSettingsInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<CompositionSettingsInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) => new CompositionSettingsInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
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

interface CompositionSettingsPayload extends CompositionSettingsResource {}

interface CompositionSettingsResource {
  account_sid?: string | null;
  friendly_name?: string | null;
  aws_credentials_sid?: string | null;
  aws_s3_url?: string | null;
  aws_storage_enabled?: boolean | null;
  encryption_key_sid?: string | null;
  encryption_enabled?: boolean | null;
  url?: string | null;
}

export class CompositionSettingsInstance {
  protected _solution: CompositionSettingsContextSolution;
  protected _context?: CompositionSettingsContext;

  constructor(protected _version: V1, payload: CompositionSettingsPayload) {
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.awsCredentialsSid = payload.aws_credentials_sid;
    this.awsS3Url = payload.aws_s3_url;
    this.awsStorageEnabled = payload.aws_storage_enabled;
    this.encryptionKeySid = payload.encryption_key_sid;
    this.encryptionEnabled = payload.encryption_enabled;
    this.url = payload.url;

    this._solution = {};
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * The SID of the stored Credential resource
   */
  awsCredentialsSid?: string | null;
  /**
   * The URL of the AWS S3 bucket where the compositions are stored
   */
  awsS3Url?: string | null;
  /**
   * Whether all compositions are written to the aws_s3_url
   */
  awsStorageEnabled?: boolean | null;
  /**
   * The SID of the Public Key resource used for encryption
   */
  encryptionKeySid?: string | null;
  /**
   * Whether all compositions are stored in an encrypted form
   */
  encryptionEnabled?: boolean | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): CompositionSettingsContext {
    this._context =
      this._context || new CompositionSettingsContextImpl(this._version);
    return this._context;
  }

  /**
   * Create a CompositionSettingsInstance
   *
   * @param { CompositionSettingsContextCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CompositionSettingsInstance
   */
  create(
    params: CompositionSettingsContextCreateOptions,
    callback?: (error: Error | null, item?: CompositionSettingsInstance) => any
  ): Promise<CompositionSettingsInstance>;
  create(params: any, callback?: any): Promise<CompositionSettingsInstance> {
    return this._proxy.create(params, callback);
  }

  /**
   * Fetch a CompositionSettingsInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CompositionSettingsInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CompositionSettingsInstance) => any
  ): Promise<CompositionSettingsInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      friendlyName: this.friendlyName,
      awsCredentialsSid: this.awsCredentialsSid,
      awsS3Url: this.awsS3Url,
      awsStorageEnabled: this.awsStorageEnabled,
      encryptionKeySid: this.encryptionKeySid,
      encryptionEnabled: this.encryptionEnabled,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CompositionSettingsListInstance {
  (): CompositionSettingsContext;
  get(): CompositionSettingsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CompositionSettingsSolution {}

interface CompositionSettingsListInstanceImpl
  extends CompositionSettingsListInstance {}
class CompositionSettingsListInstanceImpl
  implements CompositionSettingsListInstance
{
  _version?: V1;
  _solution?: CompositionSettingsSolution;
  _uri?: string;
}

export function CompositionSettingsListInstance(
  version: V1
): CompositionSettingsListInstance {
  const instance = (() =>
    instance.get()) as CompositionSettingsListInstanceImpl;

  instance.get = function get(): CompositionSettingsContext {
    return new CompositionSettingsContextImpl(version);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}

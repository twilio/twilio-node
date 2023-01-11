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
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to create a CompositionSettingsInstance
 */
export interface CompositionSettingsContextCreateOptions {
  /** A descriptive string that you create to describe the resource and show to the user in the console */
  friendlyName: string;
  /** The SID of the stored Credential resource. */
  awsCredentialsSid?: string;
  /** The SID of the Public Key resource to use for encryption. */
  encryptionKeySid?: string;
  /** The URL of the AWS S3 bucket where the compositions should be stored. We only support DNS-compliant URLs like `https://documentation-example-twilio-bucket/compositions`, where `compositions` is the path in which you want the compositions to be stored. This URL accepts only URI-valid characters, as described in the <a href=\\\'https://tools.ietf.org/html/rfc3986#section-2\\\'>RFC 3986</a>. */
  awsS3Url?: string;
  /** Whether all compositions should be written to the `aws_s3_url`. When `false`, all compositions are stored in our cloud. */
  awsStorageEnabled?: boolean;
  /** Whether all compositions should be stored in an encrypted form. The default is `false`. */
  encryptionEnabled?: boolean;
}

export interface CompositionSettingsContext {
  /**
   * Create a CompositionSettingsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CompositionSettingsInstance
   */
  create(
    params: CompositionSettingsContextCreateOptions,
    callback?: (error: Error | null, item?: CompositionSettingsInstance) => any
  ): Promise<CompositionSettingsInstance>;

  /**
   * Fetch a CompositionSettingsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CompositionSettingsInstance
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

  create(
    params: CompositionSettingsContextCreateOptions,
    callback?: (error: Error | null, item?: CompositionSettingsInstance) => any
  ): Promise<CompositionSettingsInstance> {
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

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new CompositionSettingsInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: CompositionSettingsInstance) => any
  ): Promise<CompositionSettingsInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) => new CompositionSettingsInstance(operationVersion, payload)
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

interface CompositionSettingsPayload extends CompositionSettingsResource {}

interface CompositionSettingsResource {
  account_sid: string;
  friendly_name: string;
  aws_credentials_sid: string;
  aws_s3_url: string;
  aws_storage_enabled: boolean;
  encryption_key_sid: string;
  encryption_enabled: boolean;
  url: string;
}

export class CompositionSettingsInstance {
  protected _solution: CompositionSettingsContextSolution;
  protected _context?: CompositionSettingsContext;

  constructor(protected _version: V1, payload: CompositionSettingsResource) {
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
  accountSid: string;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName: string;
  /**
   * The SID of the stored Credential resource
   */
  awsCredentialsSid: string;
  /**
   * The URL of the AWS S3 bucket where the compositions are stored
   */
  awsS3Url: string;
  /**
   * Whether all compositions are written to the aws_s3_url
   */
  awsStorageEnabled: boolean;
  /**
   * The SID of the Public Key resource used for encryption
   */
  encryptionKeySid: string;
  /**
   * Whether all compositions are stored in an encrypted form
   */
  encryptionEnabled: boolean;
  /**
   * The absolute URL of the resource
   */
  url: string;

  private get _proxy(): CompositionSettingsContext {
    this._context =
      this._context || new CompositionSettingsContextImpl(this._version);
    return this._context;
  }

  /**
   * Create a CompositionSettingsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CompositionSettingsInstance
   */
  create(
    params: CompositionSettingsContextCreateOptions,
    callback?: (error: Error | null, item?: CompositionSettingsInstance) => any
  ): Promise<CompositionSettingsInstance>;

  create(
    params?: any,
    callback?: (error: Error | null, item?: CompositionSettingsInstance) => any
  ): Promise<CompositionSettingsInstance> {
    return this._proxy.create(params, callback);
  }

  /**
   * Fetch a CompositionSettingsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CompositionSettingsInstance
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

export interface CompositionSettingsSolution {}

export interface CompositionSettingsListInstance {
  _version: V1;
  _solution: CompositionSettingsSolution;
  _uri: string;

  (): CompositionSettingsContext;
  get(): CompositionSettingsContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function CompositionSettingsListInstance(
  version: V1
): CompositionSettingsListInstance {
  const instance = (() => instance.get()) as CompositionSettingsListInstance;

  instance.get = function get(): CompositionSettingsContext {
    return new CompositionSettingsContextImpl(version);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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

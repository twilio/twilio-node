/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Bulkexports
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
 * Options to pass to update a ExportConfigurationInstance
 *
 * @property { boolean } [enabled] If true, Twilio will automatically generate every day\\\'s file when the day is over.
 * @property { string } [webhookUrl] Stores the URL destination for the method specified in webhook_method.
 * @property { string } [webhookMethod] Sets whether Twilio should call a webhook URL when the automatic generation is complete, using GET or POST. The actual destination is set in the webhook_url
 */
export interface ExportConfigurationContextUpdateOptions {
  enabled?: boolean;
  webhookUrl?: string;
  webhookMethod?: string;
}

export interface ExportConfigurationContext {
  /**
   * Fetch a ExportConfigurationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExportConfigurationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ExportConfigurationInstance) => any
  ): Promise<ExportConfigurationInstance>;

  /**
   * Update a ExportConfigurationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExportConfigurationInstance
   */
  update(
    callback?: (error: Error | null, item?: ExportConfigurationInstance) => any
  ): Promise<ExportConfigurationInstance>;
  /**
   * Update a ExportConfigurationInstance
   *
   * @param { ExportConfigurationContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExportConfigurationInstance
   */
  update(
    params: ExportConfigurationContextUpdateOptions,
    callback?: (error: Error | null, item?: ExportConfigurationInstance) => any
  ): Promise<ExportConfigurationInstance>;
  update(params?: any, callback?: any): Promise<ExportConfigurationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ExportConfigurationContextSolution {
  resourceType: string;
}

export class ExportConfigurationContextImpl
  implements ExportConfigurationContext
{
  protected _solution: ExportConfigurationContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, resourceType: string) {
    if (!isValidPathParam(resourceType)) {
      throw new Error("Parameter 'resourceType' is not valid.");
    }

    this._solution = { resourceType };
    this._uri = `/Exports/${resourceType}/Configuration`;
  }

  fetch(callback?: any): Promise<ExportConfigurationInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ExportConfigurationInstance(
          operationVersion,
          payload,
          instance._solution.resourceType
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<ExportConfigurationInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["enabled"] !== undefined)
      data["Enabled"] = serialize.bool(params["enabled"]);
    if (params["webhookUrl"] !== undefined)
      data["WebhookUrl"] = params["webhookUrl"];
    if (params["webhookMethod"] !== undefined)
      data["WebhookMethod"] = params["webhookMethod"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

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
        new ExportConfigurationInstance(
          operationVersion,
          payload,
          instance._solution.resourceType
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

interface ExportConfigurationPayload extends ExportConfigurationResource {}

interface ExportConfigurationResource {
  enabled?: boolean | null;
  webhook_url?: string | null;
  webhook_method?: string | null;
  resource_type?: string | null;
  url?: string | null;
}

export class ExportConfigurationInstance {
  protected _solution: ExportConfigurationContextSolution;
  protected _context?: ExportConfigurationContext;

  constructor(
    protected _version: V1,
    payload: ExportConfigurationResource,
    resourceType?: string
  ) {
    this.enabled = payload.enabled;
    this.webhookUrl = payload.webhook_url;
    this.webhookMethod = payload.webhook_method;
    this.resourceType = payload.resource_type;
    this.url = payload.url;

    this._solution = { resourceType: resourceType || this.resourceType };
  }

  /**
   * Whether files are automatically generated
   */
  enabled?: boolean | null;
  /**
   * URL targeted at export
   */
  webhookUrl?: string | null;
  /**
   * Whether to GET or POST to the webhook url
   */
  webhookMethod?: string | null;
  /**
   * The type of communication – Messages, Calls, Conferences, and Participants
   */
  resourceType?: string | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;

  private get _proxy(): ExportConfigurationContext {
    this._context =
      this._context ||
      new ExportConfigurationContextImpl(
        this._version,
        this._solution.resourceType
      );
    return this._context;
  }

  /**
   * Fetch a ExportConfigurationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExportConfigurationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ExportConfigurationInstance) => any
  ): Promise<ExportConfigurationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ExportConfigurationInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExportConfigurationInstance
   */
  update(
    callback?: (error: Error | null, item?: ExportConfigurationInstance) => any
  ): Promise<ExportConfigurationInstance>;
  /**
   * Update a ExportConfigurationInstance
   *
   * @param { ExportConfigurationContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExportConfigurationInstance
   */
  update(
    params: ExportConfigurationContextUpdateOptions,
    callback?: (error: Error | null, item?: ExportConfigurationInstance) => any
  ): Promise<ExportConfigurationInstance>;
  update(params?: any, callback?: any): Promise<ExportConfigurationInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      enabled: this.enabled,
      webhookUrl: this.webhookUrl,
      webhookMethod: this.webhookMethod,
      resourceType: this.resourceType,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ExportConfigurationSolution {}

export interface ExportConfigurationListInstance {
  _version: V1;
  _solution: ExportConfigurationSolution;
  _uri: string;

  (resourceType: string): ExportConfigurationContext;
  get(resourceType: string): ExportConfigurationContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ExportConfigurationListInstance(
  version: V1
): ExportConfigurationListInstance {
  const instance = ((resourceType) =>
    instance.get(resourceType)) as ExportConfigurationListInstance;

  instance.get = function get(resourceType): ExportConfigurationContext {
    return new ExportConfigurationContextImpl(version, resourceType);
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

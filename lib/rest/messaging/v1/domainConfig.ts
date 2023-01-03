/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
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
 * Options to pass to update a DomainConfigInstance
 *
 * @property { Array<string> } messagingServiceSids A list of messagingServiceSids (with prefix MG)
 * @property { string } [fallbackUrl] Any requests we receive to this domain that do not match an existing shortened message will be redirected to the fallback url. These will likely be either expired messages, random misdirected traffic, or intentional scraping.
 * @property { string } [callbackUrl] URL to receive click events to your webhook whenever the recipients click on the shortened links
 * @property { string } [messagingServiceSidsAction] An action type for messaging_service_sids operation (ADD, DELETE, REPLACE)
 */
export interface DomainConfigContextUpdateOptions {
  messagingServiceSids: Array<string>;
  fallbackUrl?: string;
  callbackUrl?: string;
  messagingServiceSidsAction?: string;
}

export interface DomainConfigContext {
  /**
   * Fetch a DomainConfigInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DomainConfigInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DomainConfigInstance) => any
  ): Promise<DomainConfigInstance>;

  /**
   * Update a DomainConfigInstance
   *
   * @param { DomainConfigContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DomainConfigInstance
   */
  update(
    params: DomainConfigContextUpdateOptions,
    callback?: (error: Error | null, item?: DomainConfigInstance) => any
  ): Promise<DomainConfigInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DomainConfigContextSolution {
  domainSid?: string;
}

export class DomainConfigContextImpl implements DomainConfigContext {
  protected _solution: DomainConfigContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, domainSid: string) {
    if (!isValidPathParam(domainSid)) {
      throw new Error("Parameter 'domainSid' is not valid.");
    }

    this._solution = { domainSid };
    this._uri = `/LinkShortening/Domains/${domainSid}/Config`;
  }

  fetch(
    callback?: (error: Error | null, item?: DomainConfigInstance) => any
  ): Promise<DomainConfigInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DomainConfigInstance(
          operationVersion,
          payload,
          this._solution.domainSid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params:
      | DomainConfigContextUpdateOptions
      | ((error: Error | null, item?: DomainConfigInstance) => any),
    callback?: (error: Error | null, item?: DomainConfigInstance) => any
  ): Promise<DomainConfigInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["messagingServiceSids"] === null ||
      params["messagingServiceSids"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['messagingServiceSids']\" missing."
      );
    }

    let data: any = {};

    data["MessagingServiceSids"] = serialize.map(
      params["messagingServiceSids"],
      (e) => e
    );
    if (params["fallbackUrl"] !== undefined)
      data["FallbackUrl"] = params["fallbackUrl"];
    if (params["callbackUrl"] !== undefined)
      data["CallbackUrl"] = params["callbackUrl"];
    if (params["messagingServiceSidsAction"] !== undefined)
      data["MessagingServiceSidsAction"] = params["messagingServiceSidsAction"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DomainConfigInstance(
          operationVersion,
          payload,
          this._solution.domainSid
        )
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

interface DomainConfigPayload extends DomainConfigResource {}

interface DomainConfigResource {
  domain_sid?: string | null;
  config_sid?: string | null;
  messaging_service_sids?: Array<string> | null;
  fallback_url?: string | null;
  callback_url?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class DomainConfigInstance {
  protected _solution: DomainConfigContextSolution;
  protected _context?: DomainConfigContext;

  constructor(
    protected _version: V1,
    payload: DomainConfigResource,
    domainSid?: string
  ) {
    this.domainSid = payload.domain_sid;
    this.configSid = payload.config_sid;
    this.messagingServiceSids = payload.messaging_service_sids;
    this.fallbackUrl = payload.fallback_url;
    this.callbackUrl = payload.callback_url;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { domainSid: domainSid || this.domainSid };
  }

  /**
   * The unique string that we created to identify the Domain resource.
   */
  domainSid?: string | null;
  /**
   * The unique string that we created to identify the Domain config (prefix ZK).
   */
  configSid?: string | null;
  /**
   * A list of messagingServiceSids (with prefix MG).
   */
  messagingServiceSids?: Array<string> | null;
  /**
   * We will redirect requests to urls we are unable to identify to this url.
   */
  fallbackUrl?: string | null;
  /**
   * URL to receive click events to your webhook whenever the recipients click on the shortened links.
   */
  callbackUrl?: string | null;
  /**
   * Date this Domain Config was created.
   */
  dateCreated?: Date | null;
  /**
   * Date that this Domain Config was last updated.
   */
  dateUpdated?: Date | null;
  url?: string | null;

  private get _proxy(): DomainConfigContext {
    this._context =
      this._context ||
      new DomainConfigContextImpl(this._version, this._solution.domainSid);
    return this._context;
  }

  /**
   * Fetch a DomainConfigInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DomainConfigInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DomainConfigInstance) => any
  ): Promise<DomainConfigInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a DomainConfigInstance
   *
   * @param { DomainConfigContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DomainConfigInstance
   */
  update(
    params: DomainConfigContextUpdateOptions,
    callback?: (error: Error | null, item?: DomainConfigInstance) => any
  ): Promise<DomainConfigInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      domainSid: this.domainSid,
      configSid: this.configSid,
      messagingServiceSids: this.messagingServiceSids,
      fallbackUrl: this.fallbackUrl,
      callbackUrl: this.callbackUrl,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface DomainConfigListInstance {
  (domainSid: string): DomainConfigContext;
  get(domainSid: string): DomainConfigContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DomainConfigSolution {}

interface DomainConfigListInstanceImpl extends DomainConfigListInstance {}
class DomainConfigListInstanceImpl implements DomainConfigListInstance {
  _version?: V1;
  _solution?: DomainConfigSolution;
  _uri?: string;
}

export function DomainConfigListInstance(
  version: V1
): DomainConfigListInstance {
  const instance = ((domainSid) =>
    instance.get(domainSid)) as DomainConfigListInstanceImpl;

  instance.get = function get(domainSid): DomainConfigContext {
    return new DomainConfigContextImpl(version, domainSid);
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

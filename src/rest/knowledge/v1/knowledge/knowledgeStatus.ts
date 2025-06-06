/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Knowledge
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

export interface KnowledgeStatusContext {
  /**
   * Fetch a KnowledgeStatusInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed KnowledgeStatusInstance
   */
  fetch(
    callback?: (error: Error | null, item?: KnowledgeStatusInstance) => any
  ): Promise<KnowledgeStatusInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface KnowledgeStatusContextSolution {
  id: string;
}

export class KnowledgeStatusContextImpl implements KnowledgeStatusContext {
  protected _solution: KnowledgeStatusContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, id: string) {
    if (!isValidPathParam(id)) {
      throw new Error("Parameter 'id' is not valid.");
    }

    this._solution = { id };
    this._uri = `/Knowledge/${id}/Status`;
  }

  fetch(
    callback?: (error: Error | null, item?: KnowledgeStatusInstance) => any
  ): Promise<KnowledgeStatusInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new KnowledgeStatusInstance(
          operationVersion,
          payload,
          instance._solution.id
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

interface KnowledgeStatusPayload extends KnowledgeStatusResource {}

interface KnowledgeStatusResource {
  account_sid: string;
  status: string;
  last_status: string;
  date_updated: Date;
}

export class KnowledgeStatusInstance {
  protected _solution: KnowledgeStatusContextSolution;
  protected _context?: KnowledgeStatusContext;

  constructor(
    protected _version: V1,
    payload: KnowledgeStatusResource,
    id: string
  ) {
    this.accountSid = payload.account_sid;
    this.status = payload.status;
    this.lastStatus = payload.last_status;
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

    this._solution = { id };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Knowledge resource.
   */
  accountSid: string;
  /**
   * The status of processing the knowledge source (\'QUEUED\', \'PROCESSING\', \'COMPLETED\', \'FAILED\')
   */
  status: string;
  /**
   * The last status of processing the knowledge source (\'QUEUED\', \'PROCESSING\', \'COMPLETED\', \'FAILED\')
   */
  lastStatus: string;
  /**
   * The date and time in GMT when the Knowledge was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;

  private get _proxy(): KnowledgeStatusContext {
    this._context =
      this._context ||
      new KnowledgeStatusContextImpl(this._version, this._solution.id);
    return this._context;
  }

  /**
   * Fetch a KnowledgeStatusInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed KnowledgeStatusInstance
   */
  fetch(
    callback?: (error: Error | null, item?: KnowledgeStatusInstance) => any
  ): Promise<KnowledgeStatusInstance> {
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
      status: this.status,
      lastStatus: this.lastStatus,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface KnowledgeStatusSolution {
  id: string;
}

export interface KnowledgeStatusListInstance {
  _version: V1;
  _solution: KnowledgeStatusSolution;
  _uri: string;

  (): KnowledgeStatusContext;
  get(): KnowledgeStatusContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function KnowledgeStatusListInstance(
  version: V1,
  id: string
): KnowledgeStatusListInstance {
  if (!isValidPathParam(id)) {
    throw new Error("Parameter 'id' is not valid.");
  }

  const instance = (() => instance.get()) as KnowledgeStatusListInstance;

  instance.get = function get(): KnowledgeStatusContext {
    return new KnowledgeStatusContextImpl(version, id);
  };

  instance._version = version;
  instance._solution = { id };
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

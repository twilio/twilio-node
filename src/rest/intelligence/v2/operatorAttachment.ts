/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Intelligence
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

export interface OperatorAttachmentContext {
  /**
   * Create a OperatorAttachmentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OperatorAttachmentInstance
   */
  create(
    callback?: (error: Error | null, item?: OperatorAttachmentInstance) => any
  ): Promise<OperatorAttachmentInstance>;

  /**
   * Remove a OperatorAttachmentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface OperatorAttachmentContextSolution {
  serviceSid: string;
  operatorSid: string;
}

export class OperatorAttachmentContextImpl
  implements OperatorAttachmentContext
{
  protected _solution: OperatorAttachmentContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, serviceSid: string, operatorSid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(operatorSid)) {
      throw new Error("Parameter 'operatorSid' is not valid.");
    }

    this._solution = { serviceSid, operatorSid };
    this._uri = `/Services/${serviceSid}/Operators/${operatorSid}`;
  }

  create(
    callback?: (error: Error | null, item?: OperatorAttachmentInstance) => any
  ): Promise<OperatorAttachmentInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new OperatorAttachmentInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.operatorSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        headers,
      });

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

interface OperatorAttachmentPayload extends OperatorAttachmentResource {}

interface OperatorAttachmentResource {
  service_sid: string;
  operator_sid: string;
  url: string;
}

export class OperatorAttachmentInstance {
  protected _solution: OperatorAttachmentContextSolution;
  protected _context?: OperatorAttachmentContext;

  constructor(
    protected _version: V2,
    payload: OperatorAttachmentResource,
    serviceSid?: string,
    operatorSid?: string
  ) {
    this.serviceSid = payload.service_sid;
    this.operatorSid = payload.operator_sid;
    this.url = payload.url;

    this._solution = {
      serviceSid: serviceSid || this.serviceSid,
      operatorSid: operatorSid || this.operatorSid,
    };
  }

  /**
   * The unique SID identifier of the Service.
   */
  serviceSid: string;
  /**
   * The unique SID identifier of the Operator.
   */
  operatorSid: string;
  /**
   * The URL of this resource.
   */
  url: string;

  private get _proxy(): OperatorAttachmentContext {
    this._context =
      this._context ||
      new OperatorAttachmentContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.operatorSid
      );
    return this._context;
  }

  /**
   * Create a OperatorAttachmentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed OperatorAttachmentInstance
   */
  create(
    callback?: (error: Error | null, item?: OperatorAttachmentInstance) => any
  ): Promise<OperatorAttachmentInstance> {
    return this._proxy.create(callback);
  }

  /**
   * Remove a OperatorAttachmentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      serviceSid: this.serviceSid,
      operatorSid: this.operatorSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface OperatorAttachmentSolution {}

export interface OperatorAttachmentListInstance {
  _version: V2;
  _solution: OperatorAttachmentSolution;
  _uri: string;

  (serviceSid: string, operatorSid: string): OperatorAttachmentContext;
  get(serviceSid: string, operatorSid: string): OperatorAttachmentContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function OperatorAttachmentListInstance(
  version: V2
): OperatorAttachmentListInstance {
  const instance = ((serviceSid, operatorSid) =>
    instance.get(serviceSid, operatorSid)) as OperatorAttachmentListInstance;

  instance.get = function get(
    serviceSid,
    operatorSid
  ): OperatorAttachmentContext {
    return new OperatorAttachmentContextImpl(version, serviceSid, operatorSid);
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

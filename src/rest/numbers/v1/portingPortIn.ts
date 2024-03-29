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
 * Options to pass to create a PortingPortInInstance
 */
export interface PortingPortInListInstanceCreateOptions {
  /**  */
  body?: object;
}

export interface PortingPortInSolution {}

export interface PortingPortInListInstance {
  _version: V1;
  _solution: PortingPortInSolution;
  _uri: string;

  /**
   * Create a PortingPortInInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PortingPortInInstance
   */
  create(
    callback?: (error: Error | null, item?: PortingPortInInstance) => any
  ): Promise<PortingPortInInstance>;
  /**
   * Create a PortingPortInInstance
   *
   * @param params - Body for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PortingPortInInstance
   */
  create(
    params: object,
    callback?: (error: Error | null, item?: PortingPortInInstance) => any
  ): Promise<PortingPortInInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function PortingPortInListInstance(
  version: V1
): PortingPortInListInstance {
  const instance = {} as PortingPortInListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Porting/PortIn`;

  instance.create = function create(
    params?:
      | object
      | ((error: Error | null, items: PortingPortInInstance) => any),
    callback?: (error: Error | null, items: PortingPortInInstance) => any
  ): Promise<PortingPortInInstance> {
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
      (payload) => new PortingPortInInstance(operationVersion, payload)
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

interface PortingPortInPayload extends PortingPortInResource {}

interface PortingPortInResource {
  port_in_request_sid: string;
  url: string;
}

export class PortingPortInInstance {
  constructor(protected _version: V1, payload: PortingPortInResource) {
    this.portInRequestSid = payload.port_in_request_sid;
    this.url = payload.url;
  }

  /**
   * The SID of the Port In request. This is a unique identifier of the port in request.
   */
  portInRequestSid: string;
  url: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      portInRequestSid: this.portInRequestSid,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

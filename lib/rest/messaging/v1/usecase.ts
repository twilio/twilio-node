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

export interface UsecaseListInstance {
  /**
   * Fetch a UsecaseInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed UsecaseInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UsecaseInstance) => any
  ): Promise<UsecaseInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UsecaseSolution {}

interface UsecaseListInstanceImpl extends UsecaseListInstance {}
class UsecaseListInstanceImpl implements UsecaseListInstance {
  _version?: V1;
  _solution?: UsecaseSolution;
  _uri?: string;
}

export function UsecaseListInstance(version: V1): UsecaseListInstance {
  const instance = {} as UsecaseListInstanceImpl;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Services/Usecases`;

  instance.fetch = function fetch(callback?: any): Promise<UsecaseInstance> {
    let operationVersion = version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) => new UsecaseInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

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

interface UsecasePayload extends UsecaseResource {}

interface UsecaseResource {
  usecases?: Array<any> | null;
}

export class UsecaseInstance {
  constructor(protected _version: V1, payload: UsecasePayload) {
    this.usecases = payload.usecases;
  }

  /**
   * Human readable Messaging Service Use Case details
   */
  usecases?: Array<any> | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      usecases: this.usecases,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

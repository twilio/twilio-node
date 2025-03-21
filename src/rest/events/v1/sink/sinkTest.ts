/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Events
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

export interface SinkTestSolution {
  sid: string;
}

export interface SinkTestListInstance {
  _version: V1;
  _solution: SinkTestSolution;
  _uri: string;

  /**
   * Create a SinkTestInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SinkTestInstance
   */
  create(
    callback?: (error: Error | null, item?: SinkTestInstance) => any
  ): Promise<SinkTestInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SinkTestListInstance(
  version: V1,
  sid: string
): SinkTestListInstance {
  if (!isValidPathParam(sid)) {
    throw new Error("Parameter 'sid' is not valid.");
  }

  const instance = {} as SinkTestListInstance;

  instance._version = version;
  instance._solution = { sid };
  instance._uri = `/Sinks/${sid}/Test`;

  instance.create = function create(
    callback?: (error: Error | null, items: SinkTestInstance) => any
  ): Promise<SinkTestInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SinkTestInstance(operationVersion, payload, instance._solution.sid)
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

interface SinkTestPayload extends SinkTestResource {}

interface SinkTestResource {
  result: string;
}

export class SinkTestInstance {
  constructor(protected _version: V1, payload: SinkTestResource, sid: string) {
    this.result = payload.result;
  }

  /**
   * Feedback indicating whether the test event was generated.
   */
  result: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      result: this.result,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

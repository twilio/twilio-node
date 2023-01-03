/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
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

type FlowValidateStatus = "draft" | "published";

/**
 * Options to pass to update a FlowValidateInstance
 *
 * @property { string } friendlyName The string that you assigned to describe the Flow.
 * @property { FlowValidateStatus } status
 * @property { any } definition JSON representation of flow definition.
 * @property { string } [commitMessage] Description of change made in the revision.
 */
export interface FlowValidateListInstanceUpdateOptions {
  friendlyName: string;
  status: FlowValidateStatus;
  definition: any;
  commitMessage?: string;
}

export interface FlowValidateSolution {}

export interface FlowValidateListInstance {
  _version: V2;
  _solution: FlowValidateSolution;
  _uri: string;

  /**
   * Update a FlowValidateInstance
   *
   * @param { FlowValidateListInstanceUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlowValidateInstance
   */
  update(
    params: FlowValidateListInstanceUpdateOptions,
    callback?: (error: Error | null, item?: FlowValidateInstance) => any
  ): Promise<FlowValidateInstance>;
  update(params: any, callback?: any): Promise<FlowValidateInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function FlowValidateListInstance(
  version: V2
): FlowValidateListInstance {
  const instance = {} as FlowValidateListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Flows/Validate`;

  instance.update = function update(
    params: any,
    callback?: any
  ): Promise<FlowValidateInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    if (params["status"] === null || params["status"] === undefined) {
      throw new Error("Required parameter \"params['status']\" missing.");
    }

    if (params["definition"] === null || params["definition"] === undefined) {
      throw new Error("Required parameter \"params['definition']\" missing.");
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    data["Status"] = params["status"];

    data["Definition"] = serialize.object(params["definition"]);
    if (params["commitMessage"] !== undefined)
      data["CommitMessage"] = params["commitMessage"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new FlowValidateInstance(operationVersion, payload)
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

interface FlowValidatePayload extends FlowValidateResource {}

interface FlowValidateResource {
  valid?: boolean | null;
}

export class FlowValidateInstance {
  constructor(protected _version: V2, payload: FlowValidateResource) {
    this.valid = payload.valid;
  }

  /**
   * Boolean if the flow definition is valid
   */
  valid?: boolean | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      valid: this.valid,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

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
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");

type FlowValidateStatus = 'draft'|'published';


/**
 * Options to pass to create a FlowValidateInstance
 *
 * @property { string } friendlyName The string that you assigned to describe the Flow.
 * @property { FlowValidateStatus } status 
 * @property { any } definition JSON representation of flow definition.
 * @property { string } [commitMessage] Description of change made in the revision.
 */
export interface FlowValidateListInstanceCreateOptions {
  friendlyName: string;
  status: FlowValidateStatus;
  definition: any;
  commitMessage?: string;
}

export interface FlowValidateListInstance {


  /**
   * Create a FlowValidateInstance
   *
   * @param { FlowValidateListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlowValidateInstance
   */
  create(params: FlowValidateListInstanceCreateOptions, callback?: (error: Error | null, item?: FlowValidateInstance) => any): Promise<FlowValidateInstance>;
  create(params: any, callback?: any): Promise<FlowValidateInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FlowValidateSolution {
}

interface FlowValidateListInstanceImpl extends FlowValidateListInstance {}
class FlowValidateListInstanceImpl implements FlowValidateListInstance {
  _version?: V2;
  _solution?: FlowValidateSolution;
  _uri?: string;

}

export function FlowValidateListInstance(version: V2): FlowValidateListInstance {
  const instance = {} as FlowValidateListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Flows/Validate`;

  instance.create = function create(params: any, callback?: any): Promise<FlowValidateInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.friendlyName === null || params.friendlyName === undefined) {
      throw new Error('Required parameter "params.friendlyName" missing.');
    }

    if (params.status === null || params.status === undefined) {
      throw new Error('Required parameter "params.status" missing.');
    }

    if (params.definition === null || params.definition === undefined) {
      throw new Error('Required parameter "params.definition" missing.');
    }

    const data: any = {};

    data['FriendlyName'] = params.friendlyName;
    data['Status'] = params.status;
    data['Definition'] = params.definition;
    if (params.commitMessage !== undefined) data['CommitMessage'] = params.commitMessage;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new FlowValidateInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;



    }

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}

interface FlowValidatePayload extends FlowValidateResource, Page.TwilioResponsePayload {
}

interface FlowValidateResource {
  valid?: boolean | null;
}

export class FlowValidateInstance {

  constructor(protected _version: V2, payload: FlowValidatePayload) {
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
      valid: this.valid
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class FlowValidatePage extends Page<V2, FlowValidatePayload, FlowValidateResource, FlowValidateInstance> {
  /**
   * Initialize the FlowValidatePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: FlowValidateSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FlowValidateInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FlowValidatePayload): FlowValidateInstance {
    return new FlowValidateInstance(
      this._version,
      payload,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


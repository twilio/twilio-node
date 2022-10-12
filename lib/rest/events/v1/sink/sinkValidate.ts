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
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");


/**
 * Options to pass to create a SinkValidateInstance
 *
 * @property { string } testId A 34 character string that uniquely identifies the test event for a Sink being validated.
 */
export interface SinkValidateListInstanceCreateOptions {
  testId: string;
}

export interface SinkValidateListInstance {


  /**
   * Create a SinkValidateInstance
   *
   * @param { SinkValidateListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed SinkValidateInstance
   */
  create(params: SinkValidateListInstanceCreateOptions, callback?: (error: Error | null, item?: SinkValidateInstance) => any): Promise<SinkValidateInstance>;
  create(params: any, callback?: any): Promise<SinkValidateInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

interface SinkValidateListInstanceImpl extends SinkValidateListInstance {}
class SinkValidateListInstanceImpl implements SinkValidateListInstance {
  _version?: V1;
  _solution?: SinkValidateSolution;
  _uri?: string;

}

export function SinkValidateListInstance(version: V1, sid: string): SinkValidateListInstance {
  const instance = {} as SinkValidateListInstanceImpl;

  instance._version = version;
  instance._solution = { sid };
  instance._uri = `/Sinks/${sid}/Validate`;

  instance.create = function create(params: any, callback?: any): Promise<SinkValidateInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params.testId === null || params.testId === undefined) {
      throw new Error('Required parameter "params.testId" missing.');
    }

    const data: any = {};

    data['TestId'] = params.testId;

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new SinkValidateInstance(operationVersion, payload, this._solution.sid));
    

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

interface SinkValidatePayload extends SinkValidateResource, Page.TwilioResponsePayload {
}

interface SinkValidateResource {
  result?: string | null;
}

export class SinkValidateInstance {
  protected _solution: SinkValidateSolution;
  protected _context?: SinkValidateListInstance;

  constructor(protected _version: V1, payload: SinkValidatePayload, sid?: string) {
    this.result = payload.result;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * Feedback indicating whether the given Sink was validated.
   */
  result?: string | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      result: this.result
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
export interface SinkValidateSolution {
  sid?: string;
}

export class SinkValidatePage extends Page<V1, SinkValidatePayload, SinkValidateResource, SinkValidateInstance> {
  /**
   * Initialize the SinkValidatePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SinkValidateSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SinkValidateInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SinkValidatePayload): SinkValidateInstance {
    return new SinkValidateInstance(
      this._version,
      payload,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


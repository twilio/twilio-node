/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Sync
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");



/**
 * Options to pass to create a StreamMessageInstance
 *
 * @property { any } data A JSON string that represents an arbitrary, schema-less object that makes up the Stream Message body. Can be up to 4 KiB in length.
 */
export interface StreamMessageListInstanceCreateOptions {
  "data": any;
}

export interface StreamMessageListInstance {


  /**
   * Create a StreamMessageInstance
   *
   * @param { StreamMessageListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed StreamMessageInstance
   */
  create(params: StreamMessageListInstanceCreateOptions, callback?: (error: Error | null, item?: StreamMessageInstance) => any): Promise<StreamMessageInstance>;
  create(params: any, callback?: any): Promise<StreamMessageInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface StreamMessageSolution {
  serviceSid?: string;
  streamSid?: string;
}

interface StreamMessageListInstanceImpl extends StreamMessageListInstance {}
class StreamMessageListInstanceImpl implements StreamMessageListInstance {
  _version?: V1;
  _solution?: StreamMessageSolution;
  _uri?: string;

}

export function StreamMessageListInstance(version: V1, serviceSid: string, streamSid: string): StreamMessageListInstance {
  const instance = {} as StreamMessageListInstanceImpl;

  instance._version = version;
  instance._solution = { serviceSid, streamSid };
  instance._uri = `/Services/${serviceSid}/Streams/${streamSid}/Messages`;

  instance.create = function create(params: any, callback?: any): Promise<StreamMessageInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["data"] === null || params["data"] === undefined) {
      throw new Error('Required parameter "params[\'data\']" missing.');
    }

    const data: any = {};

    data["Data"] = serialize.object(params["data"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new StreamMessageInstance(operationVersion, payload, this._solution.serviceSid, this._solution.streamSid));
    

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

interface StreamMessagePayload extends StreamMessageResource{
}

interface StreamMessageResource {
  sid?: string | null;
  data?: any | null;
}

export class StreamMessageInstance {

  constructor(protected _version: V1, payload: StreamMessagePayload, serviceSid: string, streamSid?: string) {
    this.sid = payload.sid;
    this.data = payload.data;

  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * Stream Message body
   */
  data?: any | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      data: this.data
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}



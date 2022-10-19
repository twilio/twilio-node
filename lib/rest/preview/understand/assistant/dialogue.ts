/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import Understand from "../../Understand";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");


export interface DialogueListInstance {
  (sid: string): DialogueContext;
  get(sid: string): DialogueContext;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DialogueSolution {
  assistantSid?: string;
}

interface DialogueListInstanceImpl extends DialogueListInstance {}
class DialogueListInstanceImpl implements DialogueListInstance {
  _version?: Understand;
  _solution?: DialogueSolution;
  _uri?: string;

}

export function DialogueListInstance(version: Understand, assistantSid: string): DialogueListInstance {
  const instance = ((sid) => instance.get(sid)) as DialogueListInstanceImpl;

  instance.get = function get(sid): DialogueContext {
    return new DialogueContextImpl(version, assistantSid, sid);
  }

  instance._version = version;
  instance._solution = { assistantSid };
  instance._uri = `/Assistants/${assistantSid}/Dialogues`;

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}


export interface DialogueContext {


  /**
   * Fetch a DialogueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DialogueInstance
   */
  fetch(callback?: (error: Error | null, item?: DialogueInstance) => any): Promise<DialogueInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DialogueContextSolution {
  assistantSid?: string;
  sid?: string;
}

export class DialogueContextImpl implements DialogueContext {
  protected _solution: DialogueContextSolution;
  protected _uri: string;


  constructor(protected _version: Understand, assistantSid: string, sid: string) {
    this._solution = { assistantSid, sid };
    this._uri = `/Assistants/${assistantSid}/Dialogues/${sid}`;
  }

  fetch(callback?: any): Promise<DialogueInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new DialogueInstance(operationVersion, payload, this._solution.assistantSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
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

interface DialoguePayload extends DialogueResource, Page.TwilioResponsePayload {
}

interface DialogueResource {
  account_sid?: string | null;
  assistant_sid?: string | null;
  sid?: string | null;
  data?: any | null;
  url?: string | null;
}

export class DialogueInstance {
  protected _solution: DialogueContextSolution;
  protected _context?: DialogueContext;

  constructor(protected _version: Understand, payload: DialoguePayload, assistantSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.assistantSid = payload.assistant_sid;
    this.sid = payload.sid;
    this.data = payload.data;
    this.url = payload.url;

    this._solution = { assistantSid, sid: sid || this.sid };
  }

  /**
   * The unique ID of the Account that created this Field.
   */
  accountSid?: string | null;
  /**
   * The unique ID of the parent Assistant.
   */
  assistantSid?: string | null;
  /**
   * The unique ID of the Dialogue
   */
  sid?: string | null;
  /**
   * The dialogue memory object as json
   */
  data?: any | null;
  url?: string | null;

  private get _proxy(): DialogueContext {
    this._context = this._context || new DialogueContextImpl(this._version, this._solution.assistantSid, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a DialogueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DialogueInstance
   */
  fetch(callback?: (error: Error | null, item?: DialogueInstance) => any): Promise<DialogueInstance>
     {
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
      assistantSid: this.assistantSid, 
      sid: this.sid, 
      data: this.data, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class DialoguePage extends Page<Understand, DialoguePayload, DialogueResource, DialogueInstance> {
  /**
   * Initialize the DialoguePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Understand, response: Response<string>, solution: DialogueSolution) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DialogueInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DialoguePayload): DialogueInstance {
    return new DialogueInstance(
      this._version,
      payload,
      this._solution.assistantSid,
      this._solution.sid,
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


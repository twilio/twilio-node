/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Autopilot
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

export interface DialogueContext {
  /**
   * Fetch a DialogueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DialogueInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DialogueInstance) => any
  ): Promise<DialogueInstance>;

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

  constructor(protected _version: V1, assistantSid: string, sid: string) {
    if (!isValidPathParam(assistantSid)) {
      throw new Error("Parameter 'assistantSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { assistantSid, sid };
    this._uri = `/Assistants/${assistantSid}/Dialogues/${sid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: DialogueInstance) => any
  ): Promise<DialogueInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DialogueInstance(
          operationVersion,
          payload,
          this._solution.assistantSid,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
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

interface DialoguePayload extends DialogueResource {}

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

  constructor(
    protected _version: V1,
    payload: DialogueResource,
    assistantSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.assistantSid = payload.assistant_sid;
    this.sid = payload.sid;
    this.data = payload.data;
    this.url = payload.url;

    this._solution = { assistantSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Assistant that is the parent of the resource
   */
  assistantSid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The JSON string that describes the dialogue session object
   */
  data?: any | null;
  /**
   * The absolute URL of the Dialogue resource
   */
  url?: string | null;

  private get _proxy(): DialogueContext {
    this._context =
      this._context ||
      new DialogueContextImpl(
        this._version,
        this._solution.assistantSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a DialogueInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DialogueInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DialogueInstance) => any
  ): Promise<DialogueInstance> {
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
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

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
  _version?: V1;
  _solution?: DialogueSolution;
  _uri?: string;
}

export function DialogueListInstance(
  version: V1,
  assistantSid: string
): DialogueListInstance {
  if (!isValidPathParam(assistantSid)) {
    throw new Error("Parameter 'assistantSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as DialogueListInstanceImpl;

  instance.get = function get(sid): DialogueContext {
    return new DialogueContextImpl(version, assistantSid, sid);
  };

  instance._version = version;
  instance._solution = { assistantSid };
  instance._uri = ``;

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

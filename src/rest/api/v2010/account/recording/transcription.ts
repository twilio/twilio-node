/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

export type RecordingTranscriptionStatus =
  | "in-progress"
  | "completed"
  | "failed";

/**
 * Options to pass to each
 */
export interface TranscriptionListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: TranscriptionInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface TranscriptionListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface TranscriptionListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface TranscriptionContext {
  /**
   * Remove a TranscriptionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a TranscriptionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TranscriptionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TranscriptionInstance) => any
  ): Promise<TranscriptionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TranscriptionContextSolution {
  accountSid: string;
  recordingSid: string;
  sid: string;
}

export class TranscriptionContextImpl implements TranscriptionContext {
  protected _solution: TranscriptionContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2010,
    accountSid: string,
    recordingSid: string,
    sid: string
  ) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(recordingSid)) {
      throw new Error("Parameter 'recordingSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, recordingSid, sid };
    this._uri = `/Accounts/${accountSid}/Recordings/${recordingSid}/Transcriptions/${sid}.json`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: TranscriptionInstance) => any
  ): Promise<TranscriptionInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TranscriptionInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.recordingSid,
          instance._solution.sid
        )
    );

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

interface TranscriptionPayload extends TwilioResponsePayload {
  transcriptions: TranscriptionResource[];
}

interface TranscriptionResource {
  account_sid: string;
  api_version: string;
  date_created: Date;
  date_updated: Date;
  duration: string;
  price: number;
  price_unit: string;
  recording_sid: string;
  sid: string;
  status: RecordingTranscriptionStatus;
  transcription_text: string;
  type: string;
  uri: string;
}

export class TranscriptionInstance {
  protected _solution: TranscriptionContextSolution;
  protected _context?: TranscriptionContext;

  constructor(
    protected _version: V2010,
    payload: TranscriptionResource,
    accountSid: string,
    recordingSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.apiVersion = payload.api_version;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.duration = payload.duration;
    this.price = payload.price;
    this.priceUnit = payload.price_unit;
    this.recordingSid = payload.recording_sid;
    this.sid = payload.sid;
    this.status = payload.status;
    this.transcriptionText = payload.transcription_text;
    this.type = payload.type;
    this.uri = payload.uri;

    this._solution = { accountSid, recordingSid, sid: sid || this.sid };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Transcription resource.
   */
  accountSid: string;
  /**
   * The API version used to create the transcription.
   */
  apiVersion: string;
  /**
   * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The duration of the transcribed audio in seconds.
   */
  duration: string;
  /**
   * The charge for the transcript in the currency associated with the account. This value is populated after the transcript is complete so it may not be available immediately.
   */
  price: number;
  /**
   * The currency in which `price` is measured, in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
   */
  priceUnit: string;
  /**
   * The SID of the [Recording](https://www.twilio.com/docs/voice/api/recording) from which the transcription was created.
   */
  recordingSid: string;
  /**
   * The unique string that that we created to identify the Transcription resource.
   */
  sid: string;
  status: RecordingTranscriptionStatus;
  /**
   * The text content of the transcription.
   */
  transcriptionText: string;
  /**
   * The transcription type.
   */
  type: string;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`.
   */
  uri: string;

  private get _proxy(): TranscriptionContext {
    this._context =
      this._context ||
      new TranscriptionContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.recordingSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a TranscriptionInstance
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
   * Fetch a TranscriptionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TranscriptionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TranscriptionInstance) => any
  ): Promise<TranscriptionInstance> {
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
      apiVersion: this.apiVersion,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      duration: this.duration,
      price: this.price,
      priceUnit: this.priceUnit,
      recordingSid: this.recordingSid,
      sid: this.sid,
      status: this.status,
      transcriptionText: this.transcriptionText,
      type: this.type,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TranscriptionSolution {
  accountSid: string;
  recordingSid: string;
}

export interface TranscriptionListInstance {
  _version: V2010;
  _solution: TranscriptionSolution;
  _uri: string;

  (sid: string): TranscriptionContext;
  get(sid: string): TranscriptionContext;

  /**
   * Streams TranscriptionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TranscriptionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: TranscriptionInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: TranscriptionListInstanceEachOptions,
    callback?: (
      item: TranscriptionInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of TranscriptionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: TranscriptionPage) => any
  ): Promise<TranscriptionPage>;
  /**
   * Lists TranscriptionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TranscriptionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: TranscriptionInstance[]) => any
  ): Promise<TranscriptionInstance[]>;
  list(
    params: TranscriptionListInstanceOptions,
    callback?: (error: Error | null, items: TranscriptionInstance[]) => any
  ): Promise<TranscriptionInstance[]>;
  /**
   * Retrieve a single page of TranscriptionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TranscriptionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: TranscriptionPage) => any
  ): Promise<TranscriptionPage>;
  page(
    params: TranscriptionListInstancePageOptions,
    callback?: (error: Error | null, items: TranscriptionPage) => any
  ): Promise<TranscriptionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TranscriptionListInstance(
  version: V2010,
  accountSid: string,
  recordingSid: string
): TranscriptionListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(recordingSid)) {
    throw new Error("Parameter 'recordingSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as TranscriptionListInstance;

  instance.get = function get(sid): TranscriptionContext {
    return new TranscriptionContextImpl(version, accountSid, recordingSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid, recordingSid };
  instance._uri = `/Accounts/${accountSid}/Recordings/${recordingSid}/Transcriptions.json`;

  instance.page = function page(
    params?:
      | TranscriptionListInstancePageOptions
      | ((error: Error | null, items: TranscriptionPage) => any),
    callback?: (error: Error | null, items: TranscriptionPage) => any
  ): Promise<TranscriptionPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TranscriptionPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: TranscriptionPage) => any
  ): Promise<TranscriptionPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new TranscriptionPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
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

export class TranscriptionPage extends Page<
  V2010,
  TranscriptionPayload,
  TranscriptionResource,
  TranscriptionInstance
> {
  /**
   * Initialize the TranscriptionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: TranscriptionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TranscriptionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TranscriptionResource): TranscriptionInstance {
    return new TranscriptionInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.recordingSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

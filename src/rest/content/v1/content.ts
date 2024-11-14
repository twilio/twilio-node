/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Content
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { ApprovalCreateListInstance } from "./content/approvalCreate";
import { ApprovalFetchListInstance } from "./content/approvalFetch";

export class AuthenticationAction {
  "type": AuthenticationActionType;
  "copyCodeText": string;
}

export type AuthenticationActionType = "COPY_CODE";

export class CallToActionAction {
  "type": CallToActionActionType;
  "title": string;
  "url"?: string;
  "phone"?: string;
  "code"?: string;
}

export type CallToActionActionType =
  | "URL"
  | "PHONE_NUMBER"
  | "COPY_CODE"
  | "VOICE_CALL";

export class CardAction {
  "type": CardActionType;
  "title": string;
  "url"?: string;
  "phone"?: string;
  "id"?: string;
  "code"?: string;
}

export type CardActionType =
  | "URL"
  | "PHONE_NUMBER"
  | "QUICK_REPLY"
  | "COPY_CODE"
  | "VOICE_CALL";

export class CarouselAction {
  "type": CarouselActionType;
  "title": string;
  "url"?: string;
  "phone"?: string;
  "id"?: string;
}

export type CarouselActionType = "URL" | "PHONE_NUMBER" | "QUICK_REPLY";

export class CarouselCard {
  "title"?: string;
  "body"?: string;
  "media"?: string;
  "actions"?: Array<CarouselAction>;
}

export class CatalogItem {
  "id"?: string;
  "sectionTitle"?: string;
  "name"?: string;
  "mediaUrl"?: string;
  "price"?: number;
  "description"?: string;
}

/**
 * Content creation request body
 */
export class ContentCreateRequest {
  /**
   * User defined name of the content
   */
  "friendly_name"?: string;
  /**
   * Key value pairs of variable name to value
   */
  "variables"?: { [key: string]: string };
  /**
   * Language code for the content
   */
  "language": string;
  "types": Types;
}

export class FlowsPage {
  "id": string;
  "nextPageId"?: string;
  "title"?: string;
  "subtitle"?: string;
  "layout": Array<FlowsPageComponent>;
}

export class FlowsPageComponent {
  "label": string;
  "type": string;
  "text"?: string;
  "options"?: Array<FlowsPageComponentSelectItem>;
}

export class FlowsPageComponentSelectItem {
  "id": string;
  "title": string;
}

export class ListItem {
  "id": string;
  "item": string;
  "description"?: string;
}

export class QuickReplyAction {
  "type": QuickReplyActionType;
  "title": string;
  "id"?: string;
}

export type QuickReplyActionType = "QUICK_REPLY";

/**
 * twilio/call-to-action buttons let recipients tap to trigger actions such as launching a website or making a phone call.
 */
export class TwilioCallToAction {
  "body"?: string;
  "actions"?: Array<CallToActionAction>;
}

/**
 * twilio/card is a structured template which can be used to send a series of related information. It must include a title and at least one additional field.
 */
export class TwilioCard {
  "title": string;
  "subtitle"?: string;
  "media"?: Array<string>;
  "actions"?: Array<CardAction>;
}

/**
 * twilio/carousel templates allow you to send a single text message accompanied by a set of up to 10 carousel cards in a horizontally scrollable view
 */
export class TwilioCarousel {
  "body": string;
  "cards": Array<CarouselCard>;
}

/**
 * twilio/catalog type lets recipients view list of catalog products, ask questions about products, order products.
 */
export class TwilioCatalog {
  "title"?: string;
  "body": string;
  "subtitle"?: string;
  "id"?: string;
  "items"?: Array<CatalogItem>;
  "dynamicItems"?: string;
}

/**
 * twilio/flows templates allow you to send multiple messages in a set order with text or select options
 */
export class TwilioFlows {
  "body": string;
  "buttonText": string;
  "subtitle": string;
  "mediaUrl": string;
  "pages": Array<FlowsPage>;
  "type": string;
}

/**
 * twilio/list-picker includes a menu of up to 10 options, which offers a simple way for users to make a selection.
 */
export class TwilioListPicker {
  "body": string;
  "button": string;
  "items": Array<ListItem>;
}

/**
 * twilio/location type contains a location pin and an optional label, which can be used to enhance delivery notifications or connect recipients to physical experiences you offer.
 */
export class TwilioLocation {
  "latitude": number;
  "longitude": number;
  "label"?: string;
}

/**
 * twilio/media is used to send file attachments, or to send long text via MMS in the US and Canada. As such, the twilio/media type must contain at least ONE of text or media content.
 */
export class TwilioMedia {
  "body"?: string;
  "media": Array<string>;
}

/**
 * twilio/quick-reply templates let recipients tap, rather than type, to respond to the message.
 */
export class TwilioQuickReply {
  "body": string;
  "actions": Array<QuickReplyAction>;
}

/**
 * Type containing only plain text-based content
 */
export class TwilioText {
  "body": string;
}

/**
 * Content types
 */
export class Types {
  "twilio/text"?: TwilioText | null;
  "twilio/media"?: TwilioMedia | null;
  "twilio/location"?: TwilioLocation | null;
  "twilio/list-picker"?: TwilioListPicker | null;
  "twilio/call-to-action"?: TwilioCallToAction | null;
  "twilio/quick-reply"?: TwilioQuickReply | null;
  "twilio/card"?: TwilioCard | null;
  "twilio/catalog"?: TwilioCatalog | null;
  "twilio/carousel"?: TwilioCarousel | null;
  "twilioFlows"?: TwilioFlows | null;
  "whatsapp/card"?: WhatsappCard | null;
  "whatsapp/authentication"?: WhatsappAuthentication | null;
}

/**
 * whatsApp/authentication templates let companies deliver WA approved one-time-password button.
 */
export class WhatsappAuthentication {
  "addSecurityRecommendation"?: boolean;
  "codeExpirationMinutes"?: number;
  "actions": Array<AuthenticationAction>;
}

/**
 * whatsapp/card is a structured template which can be used to send a series of related information. It must include a body and at least one additional field.
 */
export class WhatsappCard {
  "body": string;
  "footer"?: string;
  "media"?: Array<string>;
  "headerText"?: string;
  "actions"?: Array<CardAction>;
}

/**
 * Options to pass to create a ContentInstance
 */
export interface ContentListInstanceCreateOptions {
  /**  */
  contentCreateRequest: ContentCreateRequest;
}
/**
 * Options to pass to each
 */
export interface ContentListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ContentInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ContentListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ContentListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ContentContext {
  approvalCreate: ApprovalCreateListInstance;
  approvalFetch: ApprovalFetchListInstance;

  /**
   * Remove a ContentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a ContentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ContentInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ContentInstance) => any
  ): Promise<ContentInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ContentContextSolution {
  sid: string;
}

export class ContentContextImpl implements ContentContext {
  protected _solution: ContentContextSolution;
  protected _uri: string;

  protected _approvalCreate?: ApprovalCreateListInstance;
  protected _approvalFetch?: ApprovalFetchListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Content/${sid}`;
  }

  get approvalCreate(): ApprovalCreateListInstance {
    this._approvalCreate =
      this._approvalCreate ||
      ApprovalCreateListInstance(this._version, this._solution.sid);
    return this._approvalCreate;
  }

  get approvalFetch(): ApprovalFetchListInstance {
    this._approvalFetch =
      this._approvalFetch ||
      ApprovalFetchListInstance(this._version, this._solution.sid);
    return this._approvalFetch;
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
    callback?: (error: Error | null, item?: ContentInstance) => any
  ): Promise<ContentInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ContentInstance(operationVersion, payload, instance._solution.sid)
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

interface ContentPayload extends TwilioResponsePayload {
  contents: ContentResource[];
}

interface ContentResource {
  date_created: Date;
  date_updated: Date;
  sid: string;
  account_sid: string;
  friendly_name: string;
  language: string;
  variables: any;
  types: any;
  url: string;
  links: Record<string, string>;
}

export class ContentInstance {
  protected _solution: ContentContextSolution;
  protected _context?: ContentContext;

  constructor(protected _version: V1, payload: ContentResource, sid?: string) {
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.language = payload.language;
    this.variables = payload.variables;
    this.types = payload.types;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The unique string that that we created to identify the Content resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content resource.
   */
  accountSid: string;
  /**
   * A string name used to describe the Content resource. Not visible to the end recipient.
   */
  friendlyName: string;
  /**
   * Two-letter (ISO 639-1) language code (e.g., en) identifying the language the Content resource is in.
   */
  language: string;
  /**
   * Defines the default placeholder values for variables included in the Content resource. e.g. {\"1\": \"Customer_Name\"}.
   */
  variables: any;
  /**
   * The [Content types](https://www.twilio.com/docs/content-api/content-types-overview) (e.g. twilio/text) for this Content resource.
   */
  types: any;
  /**
   * The URL of the resource, relative to `https://content.twilio.com`.
   */
  url: string;
  /**
   * A list of links related to the Content resource, such as approval_fetch and approval_create
   */
  links: Record<string, string>;

  private get _proxy(): ContentContext {
    this._context =
      this._context ||
      new ContentContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ContentInstance
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
   * Fetch a ContentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ContentInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ContentInstance) => any
  ): Promise<ContentInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the approvalCreate.
   */
  approvalCreate(): ApprovalCreateListInstance {
    return this._proxy.approvalCreate;
  }

  /**
   * Access the approvalFetch.
   */
  approvalFetch(): ApprovalFetchListInstance {
    return this._proxy.approvalFetch;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      sid: this.sid,
      accountSid: this.accountSid,
      friendlyName: this.friendlyName,
      language: this.language,
      variables: this.variables,
      types: this.types,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ContentSolution {}

export interface ContentListInstance {
  _version: V1;
  _solution: ContentSolution;
  _uri: string;

  (sid: string): ContentContext;
  get(sid: string): ContentContext;

  /**
   * Create a ContentInstance
   *
   * @param params - Body for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ContentInstance
   */
  create(
    params: ContentCreateRequest,
    callback?: (error: Error | null, item?: ContentInstance) => any
  ): Promise<ContentInstance>;

  /**
   * Streams ContentInstance records from the API.
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
   * @param { ContentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: ContentInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: ContentListInstanceEachOptions,
    callback?: (item: ContentInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of ContentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ContentPage) => any
  ): Promise<ContentPage>;
  /**
   * Lists ContentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ContentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ContentInstance[]) => any
  ): Promise<ContentInstance[]>;
  list(
    params: ContentListInstanceOptions,
    callback?: (error: Error | null, items: ContentInstance[]) => any
  ): Promise<ContentInstance[]>;
  /**
   * Retrieve a single page of ContentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ContentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ContentPage) => any
  ): Promise<ContentPage>;
  page(
    params: ContentListInstancePageOptions,
    callback?: (error: Error | null, items: ContentPage) => any
  ): Promise<ContentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ContentListInstance(version: V1): ContentListInstance {
  const instance = ((sid) => instance.get(sid)) as ContentListInstance;

  instance.get = function get(sid): ContentContext {
    return new ContentContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Content`;

  instance.create = function create(
    params: ContentCreateRequest,
    callback?: (error: Error | null, items: ContentInstance) => any
  ): Promise<ContentInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
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
      (payload) => new ContentInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | ContentListInstancePageOptions
      | ((error: Error | null, items: ContentPage) => any),
    callback?: (error: Error | null, items: ContentPage) => any
  ): Promise<ContentPage> {
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
        new ContentPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: ContentPage) => any
  ): Promise<ContentPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ContentPage(instance._version, payload, instance._solution)
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

export class ContentPage extends Page<
  V1,
  ContentPayload,
  ContentResource,
  ContentInstance
> {
  /**
   * Initialize the ContentPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ContentSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ContentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ContentResource): ContentInstance {
    return new ContentInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

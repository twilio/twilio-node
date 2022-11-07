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

/**
 * Options to pass to create a ExternalCampaignInstance
 *
 * @property { string } campaignId ID of the preregistered campaign.
 * @property { string } messagingServiceSid The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services/api) that the resource is associated with.
 */
export interface ExternalCampaignListInstanceCreateOptions {
  campaignId: string;
  messagingServiceSid: string;
}

export interface ExternalCampaignListInstance {
  /**
   * Create a ExternalCampaignInstance
   *
   * @param { ExternalCampaignListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExternalCampaignInstance
   */
  create(
    params: ExternalCampaignListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ExternalCampaignInstance) => any
  ): Promise<ExternalCampaignInstance>;
  create(params: any, callback?: any): Promise<ExternalCampaignInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ExternalCampaignSolution {}

interface ExternalCampaignListInstanceImpl
  extends ExternalCampaignListInstance {}
class ExternalCampaignListInstanceImpl implements ExternalCampaignListInstance {
  _version?: V1;
  _solution?: ExternalCampaignSolution;
  _uri?: string;
}

export function ExternalCampaignListInstance(
  version: V1
): ExternalCampaignListInstance {
  const instance = {} as ExternalCampaignListInstanceImpl;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Services/PreregisteredUsa2p`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<ExternalCampaignInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["campaignId"] === null || params["campaignId"] === undefined) {
      throw new Error("Required parameter \"params['campaignId']\" missing.");
    }

    if (
      params["messagingServiceSid"] === null ||
      params["messagingServiceSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['messagingServiceSid']\" missing."
      );
    }

    let data: any = {};

    data["CampaignId"] = params["campaignId"];

    data["MessagingServiceSid"] = params["messagingServiceSid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new ExternalCampaignInstance(operationVersion, payload)
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

interface ExternalCampaignPayload extends ExternalCampaignResource {}

interface ExternalCampaignResource {
  sid?: string | null;
  account_sid?: string | null;
  campaign_id?: string | null;
  messaging_service_sid?: string | null;
  date_created?: Date | null;
}

export class ExternalCampaignInstance {
  constructor(protected _version: V1, payload: ExternalCampaignPayload) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.campaignId = payload.campaign_id;
    this.messagingServiceSid = payload.messaging_service_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
  }

  /**
   * The unique string that identifies a US A2P Compliance resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * ID of the preregistered campaign.
   */
  campaignId?: string | null;
  /**
   * The SID of the Messaging Service the resource is associated with
   */
  messagingServiceSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      campaignId: this.campaignId,
      messagingServiceSid: this.messagingServiceSid,
      dateCreated: this.dateCreated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

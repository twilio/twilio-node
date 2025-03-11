/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Insights
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

export type CallSummariesAnsweredBy =
  | "unknown"
  | "machine_start"
  | "machine_end_beep"
  | "machine_end_silence"
  | "machine_end_other"
  | "human"
  | "fax";

export type CallSummariesCallState =
  | "ringing"
  | "completed"
  | "busy"
  | "fail"
  | "noanswer"
  | "canceled"
  | "answered"
  | "undialed";

export type CallSummariesCallType =
  | "carrier"
  | "sip"
  | "trunking"
  | "client"
  | "whatsapp";

export type CallSummariesProcessingState = "complete" | "partial";

export type CallSummariesProcessingStateRequest =
  | "completed"
  | "started"
  | "partial"
  | "all";

export type CallSummariesSortBy = "start_time" | "end_time";

/**
 * Options to pass to each
 */
export interface CallSummariesListInstanceEachOptions {
  /** A calling party. Could be an E.164 number, a SIP URI, or a Twilio Client registered name. */
  from?: string;
  /** A called party. Could be an E.164 number, a SIP URI, or a Twilio Client registered name. */
  to?: string;
  /** An origination carrier. */
  fromCarrier?: string;
  /** A destination carrier. */
  toCarrier?: string;
  /** A source country code based on phone number in From. */
  fromCountryCode?: string;
  /** A destination country code. Based on phone number in To. */
  toCountryCode?: string;
  /** A boolean flag indicating whether or not the caller was verified using SHAKEN/STIR.One of \'true\' or \'false\'. */
  verifiedCaller?: boolean;
  /** A boolean flag indicating the presence of one or more [Voice Insights Call Tags](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-tags). */
  hasTag?: boolean;
  /** A Start time of the calls. xm (x minutes), xh (x hours), xd (x days), 1w, 30m, 3d, 4w or datetime-ISO. Defaults to 4h. */
  startTime?: string;
  /** An End Time of the calls. xm (x minutes), xh (x hours), xd (x days), 1w, 30m, 3d, 4w or datetime-ISO. Defaults to 0m. */
  endTime?: string;
  /** A Call Type of the calls. One of `carrier`, `sip`, `trunking` or `client`. */
  callType?: string;
  /** A Call State of the calls. One of `ringing`, `completed`, `busy`, `fail`, `noanswer`, `canceled`, `answered`, `undialed`. */
  callState?: string;
  /** A Direction of the calls. One of `outbound_api`, `outbound_dial`, `inbound`, `trunking_originating`, `trunking_terminating`. */
  direction?: string;
  /** A Processing State of the Call Summaries. One of `completed`, `partial` or `all`. */
  processingState?: CallSummariesProcessingStateRequest;
  /** A Sort By criterion for the returned list of Call Summaries. One of `start_time` or `end_time`. */
  sortBy?: CallSummariesSortBy;
  /** A unique SID identifier of a Subaccount. */
  subaccount?: string;
  /** A boolean flag indicating an abnormal session where the last SIP response was not 200 OK. */
  abnormalSession?: boolean;
  /** An Answered By value for the calls based on `Answering Machine Detection (AMD)`. One of `unknown`, `machine_start`, `machine_end_beep`, `machine_end_silence`, `machine_end_other`, `human` or `fax`. */
  answeredBy?: CallSummariesAnsweredBy;
  /** Either machine or human. */
  answeredByAnnotation?: string;
  /** A Connectivity Issue with the calls. One of `no_connectivity_issue`, `invalid_number`, `caller_id`, `dropped_call`, or `number_reachability`. */
  connectivityIssueAnnotation?: string;
  /** A subjective Quality Issue with the calls. One of `no_quality_issue`, `low_volume`, `choppy_robotic`, `echo`, `dtmf`, `latency`, `owa`, `static_noise`. */
  qualityIssueAnnotation?: string;
  /** A boolean flag indicating spam calls. */
  spamAnnotation?: boolean;
  /** A Call Score of the calls. Use a range of 1-5 to indicate the call experience score, with the following mapping as a reference for the rated call [5: Excellent, 4: Good, 3 : Fair, 2 : Poor, 1: Bad]. */
  callScoreAnnotation?: string;
  /** A boolean flag indicating whether or not the calls were branded using Twilio Branded Calls. One of \'true\' or \'false\' */
  brandedEnabled?: boolean;
  /** A boolean flag indicating whether or not the phone number had voice integrity enabled.One of \'true\' or \'false\' */
  voiceIntegrityEnabled?: boolean;
  /** A unique SID identifier of the Branded Call. */
  brandedBundleSid?: string;
  /** A unique SID identifier of the Voice Integrity Profile. */
  voiceIntegrityBundleSid?: string;
  /** A Voice Integrity Use Case . Is of type enum. One of \'abandoned_cart\', \'appointment_reminders\', \'appointment_scheduling\', \'asset_management\', \'automated_support\', \'call_tracking\', \'click_to_call\', \'contact_tracing\', \'contactless_delivery\', \'customer_support\', \'dating/social\', \'delivery_notifications\', \'distance_learning\', \'emergency_notifications\', \'employee_notifications\', \'exam_proctoring\', \'field_notifications\', \'first_responder\', \'fraud_alerts\', \'group_messaging\', \'identify_&_verification\', \'intelligent_routing\', \'lead_alerts\', \'lead_distribution\', \'lead_generation\', \'lead_management\', \'lead_nurturing\', \'marketing_events\', \'mass_alerts\', \'meetings/collaboration\', \'order_notifications\', \'outbound_dialer\', \'pharmacy\', \'phone_system\', \'purchase_confirmation\', \'remote_appointments\', \'rewards_program\', \'self-service\', \'service_alerts\', \'shift_management\', \'survey/research\', \'telehealth\', \'telemarketing\', \'therapy_(individual+group)\'. */
  voiceIntegrityUseCase?: string;
  /** A Business Identity of the calls. Is of type enum. One of \'direct_customer\', \'isv_reseller_or_partner\'.  */
  businessProfileIdentity?: string;
  /** A Business Industry of the calls. Is of type enum. One of \'automotive\', \'agriculture\', \'banking\', \'consumer\', \'construction\', \'education\', \'engineering\', \'energy\', \'oil_and_gas\', \'fast_moving_consumer_goods\', \'financial\', \'fintech\', \'food_and_beverage\', \'government\', \'healthcare\', \'hospitality\', \'insurance\', \'legal\', \'manufacturing\', \'media\', \'online\', \'professional_services\', \'raw_materials\', \'real_estate\', \'religion\', \'retail\', \'jewelry\', \'technology\', \'telecommunications\', \'transportation\', \'travel\', \'electronics\', \'not_for_profit\'  */
  businessProfileIndustry?: string;
  /** A unique SID identifier of the Business Profile. */
  businessProfileBundleSid?: string;
  /** A Business Profile Type of the calls. Is of type enum. One of \'primary\', \'secondary\'. */
  businessProfileType?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: CallSummariesInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface CallSummariesListInstanceOptions {
  /** A calling party. Could be an E.164 number, a SIP URI, or a Twilio Client registered name. */
  from?: string;
  /** A called party. Could be an E.164 number, a SIP URI, or a Twilio Client registered name. */
  to?: string;
  /** An origination carrier. */
  fromCarrier?: string;
  /** A destination carrier. */
  toCarrier?: string;
  /** A source country code based on phone number in From. */
  fromCountryCode?: string;
  /** A destination country code. Based on phone number in To. */
  toCountryCode?: string;
  /** A boolean flag indicating whether or not the caller was verified using SHAKEN/STIR.One of \'true\' or \'false\'. */
  verifiedCaller?: boolean;
  /** A boolean flag indicating the presence of one or more [Voice Insights Call Tags](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-tags). */
  hasTag?: boolean;
  /** A Start time of the calls. xm (x minutes), xh (x hours), xd (x days), 1w, 30m, 3d, 4w or datetime-ISO. Defaults to 4h. */
  startTime?: string;
  /** An End Time of the calls. xm (x minutes), xh (x hours), xd (x days), 1w, 30m, 3d, 4w or datetime-ISO. Defaults to 0m. */
  endTime?: string;
  /** A Call Type of the calls. One of `carrier`, `sip`, `trunking` or `client`. */
  callType?: string;
  /** A Call State of the calls. One of `ringing`, `completed`, `busy`, `fail`, `noanswer`, `canceled`, `answered`, `undialed`. */
  callState?: string;
  /** A Direction of the calls. One of `outbound_api`, `outbound_dial`, `inbound`, `trunking_originating`, `trunking_terminating`. */
  direction?: string;
  /** A Processing State of the Call Summaries. One of `completed`, `partial` or `all`. */
  processingState?: CallSummariesProcessingStateRequest;
  /** A Sort By criterion for the returned list of Call Summaries. One of `start_time` or `end_time`. */
  sortBy?: CallSummariesSortBy;
  /** A unique SID identifier of a Subaccount. */
  subaccount?: string;
  /** A boolean flag indicating an abnormal session where the last SIP response was not 200 OK. */
  abnormalSession?: boolean;
  /** An Answered By value for the calls based on `Answering Machine Detection (AMD)`. One of `unknown`, `machine_start`, `machine_end_beep`, `machine_end_silence`, `machine_end_other`, `human` or `fax`. */
  answeredBy?: CallSummariesAnsweredBy;
  /** Either machine or human. */
  answeredByAnnotation?: string;
  /** A Connectivity Issue with the calls. One of `no_connectivity_issue`, `invalid_number`, `caller_id`, `dropped_call`, or `number_reachability`. */
  connectivityIssueAnnotation?: string;
  /** A subjective Quality Issue with the calls. One of `no_quality_issue`, `low_volume`, `choppy_robotic`, `echo`, `dtmf`, `latency`, `owa`, `static_noise`. */
  qualityIssueAnnotation?: string;
  /** A boolean flag indicating spam calls. */
  spamAnnotation?: boolean;
  /** A Call Score of the calls. Use a range of 1-5 to indicate the call experience score, with the following mapping as a reference for the rated call [5: Excellent, 4: Good, 3 : Fair, 2 : Poor, 1: Bad]. */
  callScoreAnnotation?: string;
  /** A boolean flag indicating whether or not the calls were branded using Twilio Branded Calls. One of \'true\' or \'false\' */
  brandedEnabled?: boolean;
  /** A boolean flag indicating whether or not the phone number had voice integrity enabled.One of \'true\' or \'false\' */
  voiceIntegrityEnabled?: boolean;
  /** A unique SID identifier of the Branded Call. */
  brandedBundleSid?: string;
  /** A unique SID identifier of the Voice Integrity Profile. */
  voiceIntegrityBundleSid?: string;
  /** A Voice Integrity Use Case . Is of type enum. One of \'abandoned_cart\', \'appointment_reminders\', \'appointment_scheduling\', \'asset_management\', \'automated_support\', \'call_tracking\', \'click_to_call\', \'contact_tracing\', \'contactless_delivery\', \'customer_support\', \'dating/social\', \'delivery_notifications\', \'distance_learning\', \'emergency_notifications\', \'employee_notifications\', \'exam_proctoring\', \'field_notifications\', \'first_responder\', \'fraud_alerts\', \'group_messaging\', \'identify_&_verification\', \'intelligent_routing\', \'lead_alerts\', \'lead_distribution\', \'lead_generation\', \'lead_management\', \'lead_nurturing\', \'marketing_events\', \'mass_alerts\', \'meetings/collaboration\', \'order_notifications\', \'outbound_dialer\', \'pharmacy\', \'phone_system\', \'purchase_confirmation\', \'remote_appointments\', \'rewards_program\', \'self-service\', \'service_alerts\', \'shift_management\', \'survey/research\', \'telehealth\', \'telemarketing\', \'therapy_(individual+group)\'. */
  voiceIntegrityUseCase?: string;
  /** A Business Identity of the calls. Is of type enum. One of \'direct_customer\', \'isv_reseller_or_partner\'.  */
  businessProfileIdentity?: string;
  /** A Business Industry of the calls. Is of type enum. One of \'automotive\', \'agriculture\', \'banking\', \'consumer\', \'construction\', \'education\', \'engineering\', \'energy\', \'oil_and_gas\', \'fast_moving_consumer_goods\', \'financial\', \'fintech\', \'food_and_beverage\', \'government\', \'healthcare\', \'hospitality\', \'insurance\', \'legal\', \'manufacturing\', \'media\', \'online\', \'professional_services\', \'raw_materials\', \'real_estate\', \'religion\', \'retail\', \'jewelry\', \'technology\', \'telecommunications\', \'transportation\', \'travel\', \'electronics\', \'not_for_profit\'  */
  businessProfileIndustry?: string;
  /** A unique SID identifier of the Business Profile. */
  businessProfileBundleSid?: string;
  /** A Business Profile Type of the calls. Is of type enum. One of \'primary\', \'secondary\'. */
  businessProfileType?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface CallSummariesListInstancePageOptions {
  /** A calling party. Could be an E.164 number, a SIP URI, or a Twilio Client registered name. */
  from?: string;
  /** A called party. Could be an E.164 number, a SIP URI, or a Twilio Client registered name. */
  to?: string;
  /** An origination carrier. */
  fromCarrier?: string;
  /** A destination carrier. */
  toCarrier?: string;
  /** A source country code based on phone number in From. */
  fromCountryCode?: string;
  /** A destination country code. Based on phone number in To. */
  toCountryCode?: string;
  /** A boolean flag indicating whether or not the caller was verified using SHAKEN/STIR.One of \'true\' or \'false\'. */
  verifiedCaller?: boolean;
  /** A boolean flag indicating the presence of one or more [Voice Insights Call Tags](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-tags). */
  hasTag?: boolean;
  /** A Start time of the calls. xm (x minutes), xh (x hours), xd (x days), 1w, 30m, 3d, 4w or datetime-ISO. Defaults to 4h. */
  startTime?: string;
  /** An End Time of the calls. xm (x minutes), xh (x hours), xd (x days), 1w, 30m, 3d, 4w or datetime-ISO. Defaults to 0m. */
  endTime?: string;
  /** A Call Type of the calls. One of `carrier`, `sip`, `trunking` or `client`. */
  callType?: string;
  /** A Call State of the calls. One of `ringing`, `completed`, `busy`, `fail`, `noanswer`, `canceled`, `answered`, `undialed`. */
  callState?: string;
  /** A Direction of the calls. One of `outbound_api`, `outbound_dial`, `inbound`, `trunking_originating`, `trunking_terminating`. */
  direction?: string;
  /** A Processing State of the Call Summaries. One of `completed`, `partial` or `all`. */
  processingState?: CallSummariesProcessingStateRequest;
  /** A Sort By criterion for the returned list of Call Summaries. One of `start_time` or `end_time`. */
  sortBy?: CallSummariesSortBy;
  /** A unique SID identifier of a Subaccount. */
  subaccount?: string;
  /** A boolean flag indicating an abnormal session where the last SIP response was not 200 OK. */
  abnormalSession?: boolean;
  /** An Answered By value for the calls based on `Answering Machine Detection (AMD)`. One of `unknown`, `machine_start`, `machine_end_beep`, `machine_end_silence`, `machine_end_other`, `human` or `fax`. */
  answeredBy?: CallSummariesAnsweredBy;
  /** Either machine or human. */
  answeredByAnnotation?: string;
  /** A Connectivity Issue with the calls. One of `no_connectivity_issue`, `invalid_number`, `caller_id`, `dropped_call`, or `number_reachability`. */
  connectivityIssueAnnotation?: string;
  /** A subjective Quality Issue with the calls. One of `no_quality_issue`, `low_volume`, `choppy_robotic`, `echo`, `dtmf`, `latency`, `owa`, `static_noise`. */
  qualityIssueAnnotation?: string;
  /** A boolean flag indicating spam calls. */
  spamAnnotation?: boolean;
  /** A Call Score of the calls. Use a range of 1-5 to indicate the call experience score, with the following mapping as a reference for the rated call [5: Excellent, 4: Good, 3 : Fair, 2 : Poor, 1: Bad]. */
  callScoreAnnotation?: string;
  /** A boolean flag indicating whether or not the calls were branded using Twilio Branded Calls. One of \'true\' or \'false\' */
  brandedEnabled?: boolean;
  /** A boolean flag indicating whether or not the phone number had voice integrity enabled.One of \'true\' or \'false\' */
  voiceIntegrityEnabled?: boolean;
  /** A unique SID identifier of the Branded Call. */
  brandedBundleSid?: string;
  /** A unique SID identifier of the Voice Integrity Profile. */
  voiceIntegrityBundleSid?: string;
  /** A Voice Integrity Use Case . Is of type enum. One of \'abandoned_cart\', \'appointment_reminders\', \'appointment_scheduling\', \'asset_management\', \'automated_support\', \'call_tracking\', \'click_to_call\', \'contact_tracing\', \'contactless_delivery\', \'customer_support\', \'dating/social\', \'delivery_notifications\', \'distance_learning\', \'emergency_notifications\', \'employee_notifications\', \'exam_proctoring\', \'field_notifications\', \'first_responder\', \'fraud_alerts\', \'group_messaging\', \'identify_&_verification\', \'intelligent_routing\', \'lead_alerts\', \'lead_distribution\', \'lead_generation\', \'lead_management\', \'lead_nurturing\', \'marketing_events\', \'mass_alerts\', \'meetings/collaboration\', \'order_notifications\', \'outbound_dialer\', \'pharmacy\', \'phone_system\', \'purchase_confirmation\', \'remote_appointments\', \'rewards_program\', \'self-service\', \'service_alerts\', \'shift_management\', \'survey/research\', \'telehealth\', \'telemarketing\', \'therapy_(individual+group)\'. */
  voiceIntegrityUseCase?: string;
  /** A Business Identity of the calls. Is of type enum. One of \'direct_customer\', \'isv_reseller_or_partner\'.  */
  businessProfileIdentity?: string;
  /** A Business Industry of the calls. Is of type enum. One of \'automotive\', \'agriculture\', \'banking\', \'consumer\', \'construction\', \'education\', \'engineering\', \'energy\', \'oil_and_gas\', \'fast_moving_consumer_goods\', \'financial\', \'fintech\', \'food_and_beverage\', \'government\', \'healthcare\', \'hospitality\', \'insurance\', \'legal\', \'manufacturing\', \'media\', \'online\', \'professional_services\', \'raw_materials\', \'real_estate\', \'religion\', \'retail\', \'jewelry\', \'technology\', \'telecommunications\', \'transportation\', \'travel\', \'electronics\', \'not_for_profit\'  */
  businessProfileIndustry?: string;
  /** A unique SID identifier of the Business Profile. */
  businessProfileBundleSid?: string;
  /** A Business Profile Type of the calls. Is of type enum. One of \'primary\', \'secondary\'. */
  businessProfileType?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface CallSummariesSolution {}

export interface CallSummariesListInstance {
  _version: V1;
  _solution: CallSummariesSolution;
  _uri: string;

  /**
   * Streams CallSummariesInstance records from the API.
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
   * @param { CallSummariesListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: CallSummariesInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: CallSummariesListInstanceEachOptions,
    callback?: (
      item: CallSummariesInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of CallSummariesInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: CallSummariesPage) => any
  ): Promise<CallSummariesPage>;
  /**
   * Lists CallSummariesInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CallSummariesListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: CallSummariesInstance[]) => any
  ): Promise<CallSummariesInstance[]>;
  list(
    params: CallSummariesListInstanceOptions,
    callback?: (error: Error | null, items: CallSummariesInstance[]) => any
  ): Promise<CallSummariesInstance[]>;
  /**
   * Retrieve a single page of CallSummariesInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CallSummariesListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: CallSummariesPage) => any
  ): Promise<CallSummariesPage>;
  page(
    params: CallSummariesListInstancePageOptions,
    callback?: (error: Error | null, items: CallSummariesPage) => any
  ): Promise<CallSummariesPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function CallSummariesListInstance(
  version: V1
): CallSummariesListInstance {
  const instance = {} as CallSummariesListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Voice/Summaries`;

  instance.page = function page(
    params?:
      | CallSummariesListInstancePageOptions
      | ((error: Error | null, items: CallSummariesPage) => any),
    callback?: (error: Error | null, items: CallSummariesPage) => any
  ): Promise<CallSummariesPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["from"] !== undefined) data["From"] = params["from"];
    if (params["to"] !== undefined) data["To"] = params["to"];
    if (params["fromCarrier"] !== undefined)
      data["FromCarrier"] = params["fromCarrier"];
    if (params["toCarrier"] !== undefined)
      data["ToCarrier"] = params["toCarrier"];
    if (params["fromCountryCode"] !== undefined)
      data["FromCountryCode"] = params["fromCountryCode"];
    if (params["toCountryCode"] !== undefined)
      data["ToCountryCode"] = params["toCountryCode"];
    if (params["verifiedCaller"] !== undefined)
      data["VerifiedCaller"] = serialize.bool(params["verifiedCaller"]);
    if (params["hasTag"] !== undefined)
      data["HasTag"] = serialize.bool(params["hasTag"]);
    if (params["startTime"] !== undefined)
      data["StartTime"] = params["startTime"];
    if (params["endTime"] !== undefined) data["EndTime"] = params["endTime"];
    if (params["callType"] !== undefined) data["CallType"] = params["callType"];
    if (params["callState"] !== undefined)
      data["CallState"] = params["callState"];
    if (params["direction"] !== undefined)
      data["Direction"] = params["direction"];
    if (params["processingState"] !== undefined)
      data["ProcessingState"] = params["processingState"];
    if (params["sortBy"] !== undefined) data["SortBy"] = params["sortBy"];
    if (params["subaccount"] !== undefined)
      data["Subaccount"] = params["subaccount"];
    if (params["abnormalSession"] !== undefined)
      data["AbnormalSession"] = serialize.bool(params["abnormalSession"]);
    if (params["answeredBy"] !== undefined)
      data["AnsweredBy"] = params["answeredBy"];
    if (params["answeredByAnnotation"] !== undefined)
      data["AnsweredByAnnotation"] = params["answeredByAnnotation"];
    if (params["connectivityIssueAnnotation"] !== undefined)
      data["ConnectivityIssueAnnotation"] =
        params["connectivityIssueAnnotation"];
    if (params["qualityIssueAnnotation"] !== undefined)
      data["QualityIssueAnnotation"] = params["qualityIssueAnnotation"];
    if (params["spamAnnotation"] !== undefined)
      data["SpamAnnotation"] = serialize.bool(params["spamAnnotation"]);
    if (params["callScoreAnnotation"] !== undefined)
      data["CallScoreAnnotation"] = params["callScoreAnnotation"];
    if (params["brandedEnabled"] !== undefined)
      data["BrandedEnabled"] = serialize.bool(params["brandedEnabled"]);
    if (params["voiceIntegrityEnabled"] !== undefined)
      data["VoiceIntegrityEnabled"] = serialize.bool(
        params["voiceIntegrityEnabled"]
      );
    if (params["brandedBundleSid"] !== undefined)
      data["BrandedBundleSid"] = params["brandedBundleSid"];
    if (params["voiceIntegrityBundleSid"] !== undefined)
      data["VoiceIntegrityBundleSid"] = params["voiceIntegrityBundleSid"];
    if (params["voiceIntegrityUseCase"] !== undefined)
      data["VoiceIntegrityUseCase"] = params["voiceIntegrityUseCase"];
    if (params["businessProfileIdentity"] !== undefined)
      data["BusinessProfileIdentity"] = params["businessProfileIdentity"];
    if (params["businessProfileIndustry"] !== undefined)
      data["BusinessProfileIndustry"] = params["businessProfileIndustry"];
    if (params["businessProfileBundleSid"] !== undefined)
      data["BusinessProfileBundleSid"] = params["businessProfileBundleSid"];
    if (params["businessProfileType"] !== undefined)
      data["BusinessProfileType"] = params["businessProfileType"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CallSummariesPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: CallSummariesPage) => any
  ): Promise<CallSummariesPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new CallSummariesPage(instance._version, payload, instance._solution)
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

interface CallSummariesPayload extends TwilioResponsePayload {
  call_summaries: CallSummariesResource[];
}

interface CallSummariesResource {
  account_sid: string;
  call_sid: string;
  answered_by: CallSummariesAnsweredBy;
  call_type: CallSummariesCallType;
  call_state: CallSummariesCallState;
  processing_state: CallSummariesProcessingState;
  created_time: Date;
  start_time: Date;
  end_time: Date;
  duration: number;
  connect_duration: number;
  from: Record<string, object>;
  to: Record<string, object>;
  carrier_edge: Record<string, object>;
  client_edge: Record<string, object>;
  sdk_edge: Record<string, object>;
  sip_edge: Record<string, object>;
  tags: Array<string>;
  url: string;
  attributes: Record<string, object>;
  properties: Record<string, object>;
  trust: Record<string, object>;
  annotation: Record<string, object>;
}

export class CallSummariesInstance {
  constructor(protected _version: V1, payload: CallSummariesResource) {
    this.accountSid = payload.account_sid;
    this.callSid = payload.call_sid;
    this.answeredBy = payload.answered_by;
    this.callType = payload.call_type;
    this.callState = payload.call_state;
    this.processingState = payload.processing_state;
    this.createdTime = deserialize.iso8601DateTime(payload.created_time);
    this.startTime = deserialize.iso8601DateTime(payload.start_time);
    this.endTime = deserialize.iso8601DateTime(payload.end_time);
    this.duration = deserialize.integer(payload.duration);
    this.connectDuration = deserialize.integer(payload.connect_duration);
    this.from = payload.from;
    this.to = payload.to;
    this.carrierEdge = payload.carrier_edge;
    this.clientEdge = payload.client_edge;
    this.sdkEdge = payload.sdk_edge;
    this.sipEdge = payload.sip_edge;
    this.tags = payload.tags;
    this.url = payload.url;
    this.attributes = payload.attributes;
    this.properties = payload.properties;
    this.trust = payload.trust;
    this.annotation = payload.annotation;
  }

  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * The unique SID identifier of the Call.
   */
  callSid: string;
  answeredBy: CallSummariesAnsweredBy;
  callType: CallSummariesCallType;
  callState: CallSummariesCallState;
  processingState: CallSummariesProcessingState;
  /**
   * The time at which the Call was created, given in ISO 8601 format. Can be different from `start_time` in the event of queueing due to CPS
   */
  createdTime: Date;
  /**
   * The time at which the Call was started, given in ISO 8601 format.
   */
  startTime: Date;
  /**
   * The time at which the Call was ended, given in ISO 8601 format.
   */
  endTime: Date;
  /**
   * Duration between when the call was initiated and the call was ended
   */
  duration: number;
  /**
   * Duration between when the call was answered and when it ended
   */
  connectDuration: number;
  /**
   * The calling party.
   */
  from: Record<string, object>;
  /**
   * The called party.
   */
  to: Record<string, object>;
  /**
   * Contains metrics and properties for the Twilio media gateway of a PSTN call.
   */
  carrierEdge: Record<string, object>;
  /**
   * Contains metrics and properties for the Twilio media gateway of a Client call.
   */
  clientEdge: Record<string, object>;
  /**
   * Contains metrics and properties for the SDK sensor library for Client calls.
   */
  sdkEdge: Record<string, object>;
  /**
   * Contains metrics and properties for the Twilio media gateway of a SIP Interface or Trunking call.
   */
  sipEdge: Record<string, object>;
  /**
   * Tags applied to calls by Voice Insights analysis indicating a condition that could result in subjective degradation of the call quality.
   */
  tags: Array<string>;
  /**
   * The URL of this resource.
   */
  url: string;
  /**
   * Attributes capturing call-flow-specific details.
   */
  attributes: Record<string, object>;
  /**
   * Contains edge-agnostic call-level details.
   */
  properties: Record<string, object>;
  /**
   * Contains trusted communications details including Branded Call and verified caller ID.
   */
  trust: Record<string, object>;
  annotation: Record<string, object>;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      callSid: this.callSid,
      answeredBy: this.answeredBy,
      callType: this.callType,
      callState: this.callState,
      processingState: this.processingState,
      createdTime: this.createdTime,
      startTime: this.startTime,
      endTime: this.endTime,
      duration: this.duration,
      connectDuration: this.connectDuration,
      from: this.from,
      to: this.to,
      carrierEdge: this.carrierEdge,
      clientEdge: this.clientEdge,
      sdkEdge: this.sdkEdge,
      sipEdge: this.sipEdge,
      tags: this.tags,
      url: this.url,
      attributes: this.attributes,
      properties: this.properties,
      trust: this.trust,
      annotation: this.annotation,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class CallSummariesPage extends Page<
  V1,
  CallSummariesPayload,
  CallSummariesResource,
  CallSummariesInstance
> {
  /**
   * Initialize the CallSummariesPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: CallSummariesSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CallSummariesInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CallSummariesResource): CallSummariesInstance {
    return new CallSummariesInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

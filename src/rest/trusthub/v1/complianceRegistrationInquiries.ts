/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trusthub
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
import { isValidPathParam } from "../../../base/utility";

export type ComplianceRegistrationInquiriesBusinessIdentityType =
  | "direct_customer"
  | "isv_reseller_or_partner"
  | "unknown";

export type ComplianceRegistrationInquiriesBusinessRegistrationAuthority =
  | "UK:CRN"
  | "US:EIN"
  | "CA:CBN"
  | "AU:ACN"
  | "Other";

export type ComplianceRegistrationInquiriesEndUserType =
  | "Individual"
  | "Business";

export type ComplianceRegistrationInquiriesPhoneNumberType =
  | "local"
  | "national"
  | "mobile"
  | "toll-free";

/**
 * Options to pass to update a ComplianceRegistrationInquiriesInstance
 */
export interface ComplianceRegistrationInquiriesContextUpdateOptions {
  /** Indicates if the inquiry is being started from an ISV embedded component. */
  isIsvEmbed?: boolean;
  /** Theme id for styling the inquiry form. */
  themeSetId?: string;
}

/**
 * Options to pass to create a ComplianceRegistrationInquiriesInstance
 */
export interface ComplianceRegistrationInquiriesListInstanceCreateOptions {
  /**  */
  endUserType: ComplianceRegistrationInquiriesEndUserType;
  /**  */
  phoneNumberType: ComplianceRegistrationInquiriesPhoneNumberType;
  /**  */
  businessIdentityType?: ComplianceRegistrationInquiriesBusinessIdentityType;
  /**  */
  businessRegistrationAuthority?: ComplianceRegistrationInquiriesBusinessRegistrationAuthority;
  /** he name of the business or organization using the Tollfree number. */
  businessLegalName?: string;
  /** he email address to receive the notification about the verification result. */
  notificationEmail?: string;
  /** The email address to receive the notification about the verification result. */
  acceptedNotificationReceipt?: boolean;
  /** Business registration number of the business */
  businessRegistrationNumber?: string;
  /** The URL of the business website */
  businessWebsiteUrl?: string;
  /** Friendly name for your business information */
  friendlyName?: string;
  /** First name of the authorized representative */
  authorizedRepresentative1FirstName?: string;
  /** Last name of the authorized representative */
  authorizedRepresentative1LastName?: string;
  /** Phone number of the authorized representative */
  authorizedRepresentative1Phone?: string;
  /** Email address of the authorized representative */
  authorizedRepresentative1Email?: string;
  /** Birthdate of the authorized representative */
  authorizedRepresentative1DateOfBirth?: string;
  /** Street address of the business */
  addressStreet?: string;
  /** Street address of the business */
  addressStreetSecondary?: string;
  /** City of the business */
  addressCity?: string;
  /** State or province of the business */
  addressSubdivision?: string;
  /** Postal code of the business */
  addressPostalCode?: string;
  /** Country code of the business */
  addressCountryCode?: string;
  /** Street address of the business */
  emergencyAddressStreet?: string;
  /** Street address of the business */
  emergencyAddressStreetSecondary?: string;
  /** City of the business */
  emergencyAddressCity?: string;
  /** State or province of the business */
  emergencyAddressSubdivision?: string;
  /** Postal code of the business */
  emergencyAddressPostalCode?: string;
  /** Country code of the business */
  emergencyAddressCountryCode?: string;
  /** Use the business address as the emergency address */
  useAddressAsEmergencyAddress?: boolean;
  /** The name of the verification document to upload */
  fileName?: string;
  /** The verification document to upload */
  file?: string;
  /** The first name of the Individual User. */
  firstName?: string;
  /** The last name of the Individual User. */
  lastName?: string;
  /** The date of birth of the Individual User. */
  dateOfBirth?: string;
  /** The email address of the Individual User. */
  individualEmail?: string;
  /** The phone number of the Individual User. */
  individualPhone?: string;
  /** Indicates if the inquiry is being started from an ISV embedded component. */
  isIsvEmbed?: boolean;
  /** Indicates if the isv registering for self or tenant. */
  isvRegisteringForSelfOrTenant?: string;
  /** The url we call to inform you of bundle changes. */
  statusCallbackUrl?: string;
  /** Theme id for styling the inquiry form. */
  themeSetId?: string;
}

export interface ComplianceRegistrationInquiriesContext {
  /**
   * Update a ComplianceRegistrationInquiriesInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ComplianceRegistrationInquiriesInstance
   */
  update(
    callback?: (
      error: Error | null,
      item?: ComplianceRegistrationInquiriesInstance
    ) => any
  ): Promise<ComplianceRegistrationInquiriesInstance>;
  /**
   * Update a ComplianceRegistrationInquiriesInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ComplianceRegistrationInquiriesInstance
   */
  update(
    params: ComplianceRegistrationInquiriesContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: ComplianceRegistrationInquiriesInstance
    ) => any
  ): Promise<ComplianceRegistrationInquiriesInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ComplianceRegistrationInquiriesContextSolution {
  registrationId: string;
}

export class ComplianceRegistrationInquiriesContextImpl
  implements ComplianceRegistrationInquiriesContext
{
  protected _solution: ComplianceRegistrationInquiriesContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, registrationId: string) {
    if (!isValidPathParam(registrationId)) {
      throw new Error("Parameter 'registrationId' is not valid.");
    }

    this._solution = { registrationId };
    this._uri = `/ComplianceInquiries/Registration/${registrationId}/RegulatoryCompliance/GB/Initialize`;
  }

  update(
    params?:
      | ComplianceRegistrationInquiriesContextUpdateOptions
      | ((
          error: Error | null,
          item?: ComplianceRegistrationInquiriesInstance
        ) => any),
    callback?: (
      error: Error | null,
      item?: ComplianceRegistrationInquiriesInstance
    ) => any
  ): Promise<ComplianceRegistrationInquiriesInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["isIsvEmbed"] !== undefined)
      data["IsIsvEmbed"] = serialize.bool(params["isIsvEmbed"]);
    if (params["themeSetId"] !== undefined)
      data["ThemeSetId"] = params["themeSetId"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ComplianceRegistrationInquiriesInstance(
          operationVersion,
          payload,
          instance._solution.registrationId
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

interface ComplianceRegistrationInquiriesPayload
  extends ComplianceRegistrationInquiriesResource {}

interface ComplianceRegistrationInquiriesResource {
  inquiry_id: string;
  inquiry_session_token: string;
  registration_id: string;
  url: string;
}

export class ComplianceRegistrationInquiriesInstance {
  protected _solution: ComplianceRegistrationInquiriesContextSolution;
  protected _context?: ComplianceRegistrationInquiriesContext;

  constructor(
    protected _version: V1,
    payload: ComplianceRegistrationInquiriesResource,
    registrationId?: string
  ) {
    this.inquiryId = payload.inquiry_id;
    this.inquirySessionToken = payload.inquiry_session_token;
    this.registrationId = payload.registration_id;
    this.url = payload.url;

    this._solution = { registrationId: registrationId || this.registrationId };
  }

  /**
   * The unique ID used to start an embedded compliance registration session.
   */
  inquiryId: string;
  /**
   * The session token used to start an embedded compliance registration session.
   */
  inquirySessionToken: string;
  /**
   * The RegistrationId matching the Registration Profile that should be resumed or resubmitted for editing.
   */
  registrationId: string;
  /**
   * The URL of this resource.
   */
  url: string;

  private get _proxy(): ComplianceRegistrationInquiriesContext {
    this._context =
      this._context ||
      new ComplianceRegistrationInquiriesContextImpl(
        this._version,
        this._solution.registrationId
      );
    return this._context;
  }

  /**
   * Update a ComplianceRegistrationInquiriesInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ComplianceRegistrationInquiriesInstance
   */
  update(
    callback?: (
      error: Error | null,
      item?: ComplianceRegistrationInquiriesInstance
    ) => any
  ): Promise<ComplianceRegistrationInquiriesInstance>;
  /**
   * Update a ComplianceRegistrationInquiriesInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ComplianceRegistrationInquiriesInstance
   */
  update(
    params: ComplianceRegistrationInquiriesContextUpdateOptions,
    callback?: (
      error: Error | null,
      item?: ComplianceRegistrationInquiriesInstance
    ) => any
  ): Promise<ComplianceRegistrationInquiriesInstance>;

  update(
    params?: any,
    callback?: (
      error: Error | null,
      item?: ComplianceRegistrationInquiriesInstance
    ) => any
  ): Promise<ComplianceRegistrationInquiriesInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      inquiryId: this.inquiryId,
      inquirySessionToken: this.inquirySessionToken,
      registrationId: this.registrationId,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ComplianceRegistrationInquiriesSolution {}

export interface ComplianceRegistrationInquiriesListInstance {
  _version: V1;
  _solution: ComplianceRegistrationInquiriesSolution;
  _uri: string;

  (registrationId: string): ComplianceRegistrationInquiriesContext;
  get(registrationId: string): ComplianceRegistrationInquiriesContext;

  /**
   * Create a ComplianceRegistrationInquiriesInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ComplianceRegistrationInquiriesInstance
   */
  create(
    params: ComplianceRegistrationInquiriesListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: ComplianceRegistrationInquiriesInstance
    ) => any
  ): Promise<ComplianceRegistrationInquiriesInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ComplianceRegistrationInquiriesListInstance(
  version: V1
): ComplianceRegistrationInquiriesListInstance {
  const instance = ((registrationId) =>
    instance.get(
      registrationId
    )) as ComplianceRegistrationInquiriesListInstance;

  instance.get = function get(
    registrationId
  ): ComplianceRegistrationInquiriesContext {
    return new ComplianceRegistrationInquiriesContextImpl(
      version,
      registrationId
    );
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/ComplianceInquiries/Registration/RegulatoryCompliance/GB/Initialize`;

  instance.create = function create(
    params: ComplianceRegistrationInquiriesListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      items: ComplianceRegistrationInquiriesInstance
    ) => any
  ): Promise<ComplianceRegistrationInquiriesInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["endUserType"] === null || params["endUserType"] === undefined) {
      throw new Error("Required parameter \"params['endUserType']\" missing.");
    }

    if (
      params["phoneNumberType"] === null ||
      params["phoneNumberType"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['phoneNumberType']\" missing."
      );
    }

    let data: any = {};

    data["EndUserType"] = params["endUserType"];

    data["PhoneNumberType"] = params["phoneNumberType"];
    if (params["businessIdentityType"] !== undefined)
      data["BusinessIdentityType"] = params["businessIdentityType"];
    if (params["businessRegistrationAuthority"] !== undefined)
      data["BusinessRegistrationAuthority"] =
        params["businessRegistrationAuthority"];
    if (params["businessLegalName"] !== undefined)
      data["BusinessLegalName"] = params["businessLegalName"];
    if (params["notificationEmail"] !== undefined)
      data["NotificationEmail"] = params["notificationEmail"];
    if (params["acceptedNotificationReceipt"] !== undefined)
      data["AcceptedNotificationReceipt"] = serialize.bool(
        params["acceptedNotificationReceipt"]
      );
    if (params["businessRegistrationNumber"] !== undefined)
      data["BusinessRegistrationNumber"] = params["businessRegistrationNumber"];
    if (params["businessWebsiteUrl"] !== undefined)
      data["BusinessWebsiteUrl"] = params["businessWebsiteUrl"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["authorizedRepresentative1FirstName"] !== undefined)
      data["AuthorizedRepresentative1FirstName"] =
        params["authorizedRepresentative1FirstName"];
    if (params["authorizedRepresentative1LastName"] !== undefined)
      data["AuthorizedRepresentative1LastName"] =
        params["authorizedRepresentative1LastName"];
    if (params["authorizedRepresentative1Phone"] !== undefined)
      data["AuthorizedRepresentative1Phone"] =
        params["authorizedRepresentative1Phone"];
    if (params["authorizedRepresentative1Email"] !== undefined)
      data["AuthorizedRepresentative1Email"] =
        params["authorizedRepresentative1Email"];
    if (params["authorizedRepresentative1DateOfBirth"] !== undefined)
      data["AuthorizedRepresentative1DateOfBirth"] =
        params["authorizedRepresentative1DateOfBirth"];
    if (params["addressStreet"] !== undefined)
      data["AddressStreet"] = params["addressStreet"];
    if (params["addressStreetSecondary"] !== undefined)
      data["AddressStreetSecondary"] = params["addressStreetSecondary"];
    if (params["addressCity"] !== undefined)
      data["AddressCity"] = params["addressCity"];
    if (params["addressSubdivision"] !== undefined)
      data["AddressSubdivision"] = params["addressSubdivision"];
    if (params["addressPostalCode"] !== undefined)
      data["AddressPostalCode"] = params["addressPostalCode"];
    if (params["addressCountryCode"] !== undefined)
      data["AddressCountryCode"] = params["addressCountryCode"];
    if (params["emergencyAddressStreet"] !== undefined)
      data["EmergencyAddressStreet"] = params["emergencyAddressStreet"];
    if (params["emergencyAddressStreetSecondary"] !== undefined)
      data["EmergencyAddressStreetSecondary"] =
        params["emergencyAddressStreetSecondary"];
    if (params["emergencyAddressCity"] !== undefined)
      data["EmergencyAddressCity"] = params["emergencyAddressCity"];
    if (params["emergencyAddressSubdivision"] !== undefined)
      data["EmergencyAddressSubdivision"] =
        params["emergencyAddressSubdivision"];
    if (params["emergencyAddressPostalCode"] !== undefined)
      data["EmergencyAddressPostalCode"] = params["emergencyAddressPostalCode"];
    if (params["emergencyAddressCountryCode"] !== undefined)
      data["EmergencyAddressCountryCode"] =
        params["emergencyAddressCountryCode"];
    if (params["useAddressAsEmergencyAddress"] !== undefined)
      data["UseAddressAsEmergencyAddress"] = serialize.bool(
        params["useAddressAsEmergencyAddress"]
      );
    if (params["fileName"] !== undefined) data["FileName"] = params["fileName"];
    if (params["file"] !== undefined) data["File"] = params["file"];
    if (params["firstName"] !== undefined)
      data["FirstName"] = params["firstName"];
    if (params["lastName"] !== undefined) data["LastName"] = params["lastName"];
    if (params["dateOfBirth"] !== undefined)
      data["DateOfBirth"] = params["dateOfBirth"];
    if (params["individualEmail"] !== undefined)
      data["IndividualEmail"] = params["individualEmail"];
    if (params["individualPhone"] !== undefined)
      data["IndividualPhone"] = params["individualPhone"];
    if (params["isIsvEmbed"] !== undefined)
      data["IsIsvEmbed"] = serialize.bool(params["isIsvEmbed"]);
    if (params["isvRegisteringForSelfOrTenant"] !== undefined)
      data["IsvRegisteringForSelfOrTenant"] =
        params["isvRegisteringForSelfOrTenant"];
    if (params["statusCallbackUrl"] !== undefined)
      data["StatusCallbackUrl"] = params["statusCallbackUrl"];
    if (params["themeSetId"] !== undefined)
      data["ThemeSetId"] = params["themeSetId"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ComplianceRegistrationInquiriesInstance(operationVersion, payload)
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

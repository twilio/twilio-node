/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import NumbersBase from "../NumbersBase";
import Version from "../../base/Version";
import { AuthorizationDocumentListInstance } from "./v2/authorizationDocument";
import { BulkHostedNumberOrderListInstance } from "./v2/bulkHostedNumberOrder";
import { BundleCloneListInstance } from "./v2/bundleClone";
import { HostedNumberOrderListInstance } from "./v2/hostedNumberOrder";
import { RegulatoryComplianceListInstance } from "./v2/regulatoryCompliance";

export default class V2 extends Version {
  /**
   * Initialize the V2 version of Numbers
   *
   * @param domain - The Twilio (Twilio.Numbers) domain
   */
  constructor(domain: NumbersBase) {
    super(domain, "v2");
  }

  /** authorizationDocuments - { Twilio.Numbers.V2.AuthorizationDocumentListInstance } resource */
  protected _authorizationDocuments?: AuthorizationDocumentListInstance;
  /** bulkHostedNumberOrders - { Twilio.Numbers.V2.BulkHostedNumberOrderListInstance } resource */
  protected _bulkHostedNumberOrders?: BulkHostedNumberOrderListInstance;
  /** bundleClone - { Twilio.Numbers.V2.BundleCloneListInstance } resource */
  protected _bundleClone?: BundleCloneListInstance;
  /** hostedNumberOrders - { Twilio.Numbers.V2.HostedNumberOrderListInstance } resource */
  protected _hostedNumberOrders?: HostedNumberOrderListInstance;
  /** regulatoryCompliance - { Twilio.Numbers.V2.RegulatoryComplianceListInstance } resource */
  protected _regulatoryCompliance?: RegulatoryComplianceListInstance;

  /** Getter for authorizationDocuments resource */
  get authorizationDocuments(): AuthorizationDocumentListInstance {
    this._authorizationDocuments =
      this._authorizationDocuments || AuthorizationDocumentListInstance(this);
    return this._authorizationDocuments;
  }

  /** Getter for bulkHostedNumberOrders resource */
  get bulkHostedNumberOrders(): BulkHostedNumberOrderListInstance {
    this._bulkHostedNumberOrders =
      this._bulkHostedNumberOrders || BulkHostedNumberOrderListInstance(this);
    return this._bulkHostedNumberOrders;
  }

  /** Getter for bundleClone resource */
  get bundleClone(): BundleCloneListInstance {
    this._bundleClone = this._bundleClone || BundleCloneListInstance(this);
    return this._bundleClone;
  }

  /** Getter for hostedNumberOrders resource */
  get hostedNumberOrders(): HostedNumberOrderListInstance {
    this._hostedNumberOrders =
      this._hostedNumberOrders || HostedNumberOrderListInstance(this);
    return this._hostedNumberOrders;
  }

  /** Getter for regulatoryCompliance resource */
  get regulatoryCompliance(): RegulatoryComplianceListInstance {
    this._regulatoryCompliance =
      this._regulatoryCompliance || RegulatoryComplianceListInstance(this);
    return this._regulatoryCompliance;
  }
}

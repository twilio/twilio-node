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

import PreviewBase from "../PreviewBase";
import Version from "../../base/Version";
import { AuthorizationDocumentListInstance } from "./hosted_numbers/authorizationDocument";
import { HostedNumberOrderListInstance } from "./hosted_numbers/hostedNumberOrder";

export default class HostedNumbers extends Version {
  /**
   * Initialize the HostedNumbers version of Preview
   *
   * @property { Twilio.Preview.HostedNumbers.AuthorizationDocumentListInstance } authorizationDocuments - authorizationDocuments resource
   * @property { Twilio.Preview.HostedNumbers.HostedNumberOrderListInstance } hostedNumberOrders - hostedNumberOrders resource
   *
   * @param { Twilio.Preview } domain - The Twilio domain
   */
  constructor(domain: PreviewBase) {
    super(domain, "HostedNumbers");
  }

  protected _authorizationDocuments?: AuthorizationDocumentListInstance;
  protected _hostedNumberOrders?: HostedNumberOrderListInstance;

  get authorizationDocuments(): AuthorizationDocumentListInstance {
    this._authorizationDocuments =
      this._authorizationDocuments || AuthorizationDocumentListInstance(this);
    return this._authorizationDocuments;
  }

  get hostedNumberOrders(): HostedNumberOrderListInstance {
    this._hostedNumberOrders =
      this._hostedNumberOrders || HostedNumberOrderListInstance(this);
    return this._hostedNumberOrders;
  }
}

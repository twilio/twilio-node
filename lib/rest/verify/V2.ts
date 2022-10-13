/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import VerifyBase from "../VerifyBase";
import Version from "../../base/Version";
import { FormListInstance } from "./v2/form";
import { SafelistListInstance } from "./v2/safelist";
import { VerificationAttemptListInstance } from "./v2/verificationAttempt";
import { ServiceListInstance } from "./v2/service";
import { VerificationAttemptsSummaryListInstance } from "./v2/verificationAttemptsSummary";
import { TemplateListInstance } from "./v2/template";

export default class V2 extends Version {
  /**
   * Initialize the V2 version of Verify
   *
   * @property { Twilio.Verify.V2.FormListInstance } forms - forms resource
   * @property { Twilio.Verify.V2.SafelistListInstance } safelist - safelist resource
   * @property { Twilio.Verify.V2.VerificationAttemptListInstance } verificationAttempt - verificationAttempt resource
   * @property { Twilio.Verify.V2.ServiceListInstance } services - services resource
   * @property { Twilio.Verify.V2.VerificationAttemptsSummaryListInstance } verificationAttemptsSummary - verificationAttemptsSummary resource
   * @property { Twilio.Verify.V2.TemplateListInstance } templates - templates resource
   *
   * @param { Twilio.Verify } domain - The Twilio domain
   */
  constructor(domain: VerifyBase) {
    super(domain, "v2");
  }

  protected _forms?: FormListInstance;
  protected _safelist?: SafelistListInstance;
  protected _verificationAttempt?: VerificationAttemptListInstance;
  protected _services?: ServiceListInstance;
  protected _verificationAttemptsSummary?: VerificationAttemptsSummaryListInstance;
  protected _templates?: TemplateListInstance;

  get forms(): FormListInstance {
    this._forms = this._forms || FormListInstance(this);
    return this._forms;
  }

  get safelist(): SafelistListInstance {
    this._safelist = this._safelist || SafelistListInstance(this);
    return this._safelist;
  }

  get verificationAttempt(): VerificationAttemptListInstance {
    this._verificationAttempt = this._verificationAttempt || VerificationAttemptListInstance(this);
    return this._verificationAttempt;
  }

  get services(): ServiceListInstance {
    this._services = this._services || ServiceListInstance(this);
    return this._services;
  }

  get verificationAttemptsSummary(): VerificationAttemptsSummaryListInstance {
    this._verificationAttemptsSummary = this._verificationAttemptsSummary || VerificationAttemptsSummaryListInstance(this);
    return this._verificationAttemptsSummary;
  }

  get templates(): TemplateListInstance {
    this._templates = this._templates || TemplateListInstance(this);
    return this._templates;
  }

}

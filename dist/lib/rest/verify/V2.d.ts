import VerifyBase from "../VerifyBase";
import Version from "../../base/Version";
import { FormListInstance } from "./v2/form";
import { SafelistListInstance } from "./v2/safelist";
import { ServiceListInstance } from "./v2/service";
import { TemplateListInstance } from "./v2/template";
import { VerificationAttemptListInstance } from "./v2/verificationAttempt";
import { VerificationAttemptsSummaryListInstance } from "./v2/verificationAttemptsSummary";
export default class V2 extends Version {
    /**
     * Initialize the V2 version of Verify
     *
     * @property { Twilio.Verify.V2.FormListInstance } forms - forms resource
     * @property { Twilio.Verify.V2.SafelistListInstance } safelist - safelist resource
     * @property { Twilio.Verify.V2.ServiceListInstance } services - services resource
     * @property { Twilio.Verify.V2.TemplateListInstance } templates - templates resource
     * @property { Twilio.Verify.V2.VerificationAttemptListInstance } verificationAttempts - verificationAttempts resource
     * @property { Twilio.Verify.V2.VerificationAttemptsSummaryListInstance } verificationAttemptsSummary - verificationAttemptsSummary resource
     *
     * @param { Twilio.Verify } domain - The Twilio domain
     */
    constructor(domain: VerifyBase);
    protected _forms?: FormListInstance;
    protected _safelist?: SafelistListInstance;
    protected _services?: ServiceListInstance;
    protected _templates?: TemplateListInstance;
    protected _verificationAttempts?: VerificationAttemptListInstance;
    protected _verificationAttemptsSummary?: VerificationAttemptsSummaryListInstance;
    get forms(): FormListInstance;
    get safelist(): SafelistListInstance;
    get services(): ServiceListInstance;
    get templates(): TemplateListInstance;
    get verificationAttempts(): VerificationAttemptListInstance;
    get verificationAttemptsSummary(): VerificationAttemptsSummaryListInstance;
}

import {FormListInstance} from "./verify/v2/form";
import {ServiceListInstance} from "./verify/v2/service";
import {TemplateListInstance} from "./verify/v2/template";
import {VerificationAttemptListInstance} from "./verify/v2/verificationAttempt";
import {VerificationAttemptsSummaryListInstance} from "./verify/v2/verificationAttemptsSummary";
import VerifyBase from "./VerifyBase";

export default class Verify extends VerifyBase {
    /**
     * @deprecated - Use v2.forms instead
     */
    get forms(): FormListInstance {
        console.warn('forms is deprecated. Use v2.forms instead.');
        return this.v2.forms;
    }

    /**
     * @deprecated - Use v2.services instead
     */
    get services(): ServiceListInstance {
        console.warn('services is deprecated. Use v2.services instead.');
        return this.v2.services;
    }

    /**
     * @deprecated - Use v2.verificationAttempts instead
     */
    get verificationAttempts(): VerificationAttemptListInstance {
        console.warn('verificationAttempts is deprecated. Use v2.verificationAttempts instead.');
        return this.v2.verificationAttempts;
    }

    /**
     * @deprecated - Use v2.verificationAttemptsSummary instead
     */
    get verificationAttemptsSummary(): VerificationAttemptsSummaryListInstance {
        console.warn('verificationAttemptsSummary is deprecated. Use v2.verificationAttemptsSummary instead.');
        return this.v2.verificationAttemptsSummary;
    }

    /**
     * @deprecated - Use v2.templates instead
     */
    get templates(): TemplateListInstance {
        console.warn('templates is deprecated. Use v2.templates instead.');
        return this.v2.templates;
    }
}

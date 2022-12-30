import MessagingBase from "../MessagingBase";
import Version from "../../base/Version";
import { BrandRegistrationListInstance } from "./v1/brandRegistration";
import { DeactivationsListInstance } from "./v1/deactivations";
import { DomainCertsListInstance } from "./v1/domainCerts";
import { DomainConfigListInstance } from "./v1/domainConfig";
import { ExternalCampaignListInstance } from "./v1/externalCampaign";
import { ServiceListInstance } from "./v1/service";
import { TollfreeVerificationListInstance } from "./v1/tollfreeVerification";
import { UsecaseListInstance } from "./v1/usecase";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Messaging
     *
     * @property { Twilio.Messaging.V1.BrandRegistrationListInstance } brandRegistrations - brandRegistrations resource
     * @property { Twilio.Messaging.V1.DeactivationsListInstance } deactivations - deactivations resource
     * @property { Twilio.Messaging.V1.DomainCertsListInstance } domainCerts - domainCerts resource
     * @property { Twilio.Messaging.V1.DomainConfigListInstance } domainConfig - domainConfig resource
     * @property { Twilio.Messaging.V1.ExternalCampaignListInstance } externalCampaign - externalCampaign resource
     * @property { Twilio.Messaging.V1.ServiceListInstance } services - services resource
     * @property { Twilio.Messaging.V1.TollfreeVerificationListInstance } tollfreeVerifications - tollfreeVerifications resource
     * @property { Twilio.Messaging.V1.UsecaseListInstance } usecases - usecases resource
     *
     * @param { Twilio.Messaging } domain - The Twilio domain
     */
    constructor(domain: MessagingBase);
    protected _brandRegistrations?: BrandRegistrationListInstance;
    protected _deactivations?: DeactivationsListInstance;
    protected _domainCerts?: DomainCertsListInstance;
    protected _domainConfig?: DomainConfigListInstance;
    protected _externalCampaign?: ExternalCampaignListInstance;
    protected _services?: ServiceListInstance;
    protected _tollfreeVerifications?: TollfreeVerificationListInstance;
    protected _usecases?: UsecaseListInstance;
    get brandRegistrations(): BrandRegistrationListInstance;
    get deactivations(): DeactivationsListInstance;
    get domainCerts(): DomainCertsListInstance;
    get domainConfig(): DomainConfigListInstance;
    get externalCampaign(): ExternalCampaignListInstance;
    get services(): ServiceListInstance;
    get tollfreeVerifications(): TollfreeVerificationListInstance;
    get usecases(): UsecaseListInstance;
}

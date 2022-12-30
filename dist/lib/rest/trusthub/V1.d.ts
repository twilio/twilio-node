import TrusthubBase from "../TrusthubBase";
import Version from "../../base/Version";
import { CustomerProfilesListInstance } from "./v1/customerProfiles";
import { EndUserListInstance } from "./v1/endUser";
import { EndUserTypeListInstance } from "./v1/endUserType";
import { PoliciesListInstance } from "./v1/policies";
import { SupportingDocumentListInstance } from "./v1/supportingDocument";
import { SupportingDocumentTypeListInstance } from "./v1/supportingDocumentType";
import { TrustProductsListInstance } from "./v1/trustProducts";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Trusthub
     *
     * @property { Twilio.Trusthub.V1.CustomerProfilesListInstance } customerProfiles - customerProfiles resource
     * @property { Twilio.Trusthub.V1.EndUserListInstance } endUsers - endUsers resource
     * @property { Twilio.Trusthub.V1.EndUserTypeListInstance } endUserTypes - endUserTypes resource
     * @property { Twilio.Trusthub.V1.PoliciesListInstance } policies - policies resource
     * @property { Twilio.Trusthub.V1.SupportingDocumentListInstance } supportingDocuments - supportingDocuments resource
     * @property { Twilio.Trusthub.V1.SupportingDocumentTypeListInstance } supportingDocumentTypes - supportingDocumentTypes resource
     * @property { Twilio.Trusthub.V1.TrustProductsListInstance } trustProducts - trustProducts resource
     *
     * @param { Twilio.Trusthub } domain - The Twilio domain
     */
    constructor(domain: TrusthubBase);
    protected _customerProfiles?: CustomerProfilesListInstance;
    protected _endUsers?: EndUserListInstance;
    protected _endUserTypes?: EndUserTypeListInstance;
    protected _policies?: PoliciesListInstance;
    protected _supportingDocuments?: SupportingDocumentListInstance;
    protected _supportingDocumentTypes?: SupportingDocumentTypeListInstance;
    protected _trustProducts?: TrustProductsListInstance;
    get customerProfiles(): CustomerProfilesListInstance;
    get endUsers(): EndUserListInstance;
    get endUserTypes(): EndUserTypeListInstance;
    get policies(): PoliciesListInstance;
    get supportingDocuments(): SupportingDocumentListInstance;
    get supportingDocumentTypes(): SupportingDocumentTypeListInstance;
    get trustProducts(): TrustProductsListInstance;
}

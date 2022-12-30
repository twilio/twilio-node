import AccountsBase from "../AccountsBase";
import Version from "../../base/Version";
import { AuthTokenPromotionListInstance } from "./v1/authTokenPromotion";
import { CredentialListInstance } from "./v1/credential";
import { SecondaryAuthTokenListInstance } from "./v1/secondaryAuthToken";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Accounts
     *
     * @property { Twilio.Accounts.V1.AuthTokenPromotionListInstance } authTokenPromotion - authTokenPromotion resource
     * @property { Twilio.Accounts.V1.CredentialListInstance } credentials - credentials resource
     * @property { Twilio.Accounts.V1.SecondaryAuthTokenListInstance } secondaryAuthToken - secondaryAuthToken resource
     *
     * @param { Twilio.Accounts } domain - The Twilio domain
     */
    constructor(domain: AccountsBase);
    protected _authTokenPromotion?: AuthTokenPromotionListInstance;
    protected _credentials?: CredentialListInstance;
    protected _secondaryAuthToken?: SecondaryAuthTokenListInstance;
    get authTokenPromotion(): AuthTokenPromotionListInstance;
    get credentials(): CredentialListInstance;
    get secondaryAuthToken(): SecondaryAuthTokenListInstance;
}

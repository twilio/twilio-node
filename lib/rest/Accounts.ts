import {AuthTokenPromotionListInstance} from './accounts/v1/authTokenPromotion';
import {CredentialListInstance} from './accounts/v1/credential';
import {SecondaryAuthTokenListInstance} from './accounts/v1/secondaryAuthToken';
import AccountsBase from './AccountsBase';

export default class Accounts extends AccountsBase {
    /**
     * @deprecated - Use v1.authTokenPromotion; instead
     */
    get authTokenPromotion(): AuthTokenPromotionListInstance {
        console.warn('authTokenPromotion is deprecated. Use v1.authTokenPromotion; instead.');
        return this.v1.authTokenPromotion;
        
    }

    /**
     * @deprecated - Use v1.credentials; instead
     */
    get credentials(): CredentialListInstance {
        console.warn('credentials is deprecated. Use v1.credentials; instead.');
        return this.v1.credentials;
        
    }

    /**
     * @deprecated - Use v1.secondaryAuthToken; instead
     */
    get secondaryAuthToken(): SecondaryAuthTokenListInstance {
        console.warn('secondaryAuthToken is deprecated. Use v1.secondaryAuthToken; instead.');
        return this.v1.secondaryAuthToken;
        
    }
}

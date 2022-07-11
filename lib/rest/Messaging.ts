import {BrandRegistrationListInstance} from "./messaging/v1/brandRegistration";
import {DeactivationsListInstance} from "./messaging/v1/deactivation";
import {ExternalCampaignListInstance} from './messaging/v1/externalCampaign';
import {ServiceListInstance} from "./messaging/v1/service";
import {UsecaseListInstance} from "./messaging/v1/usecase";
import MessagingBase from "./MessagingBase";

class Messaging extends MessagingBase {
    /**
     * @deprecated - Use v1.brandRegistrations instead
     */
    get brandRegistrations(): BrandRegistrationListInstance {
        console.warn('brandRegistrations is deprecated. Use v1.brandRegistrations instead.');
        return this.v1.brandRegistrations;
    }

    /**
     * @deprecated - Use v1.deactivations instead
     */
    get deactivations(): DeactivationsListInstance {
        console.warn('deactivations is deprecated. Use v1.deactivations instead.');
        return this.v1.deactivations;
    }

    /**
     * @deprecated - Use v1.externalCampaign instead
     */
    get externalCampaign(): ExternalCampaignListInstance {
        console.warn('externalCampaign is deprecated. Use v1.externalCampaign instead.');
        return this.v1.externalCampaign;
    }

    /**
     * @deprecated - Use v1.services instead
     */
    get services(): ServiceListInstance {
        console.warn('services is deprecated. Use v1.services instead.');
        return this.v1.services;
    }

    /**
     * @deprecated - Use v1.usecases instead
     */
    get usecases(): UsecaseListInstance {
        console.warn('usecases is deprecated. Use v1.usecases instead.');
        return this.v1.usecases;
    }
}

export = Messaging;

import {MessagingListInstance} from "./pricing/v1/messaging";
import {PhoneNumberListInstance} from "./pricing/v1/phoneNumber";
import {VoiceListInstance} from "./pricing/v2/voice";
import {CountryListInstance} from "./pricing/v2/country";
import {NumberListInstance} from "./pricing/v2/number";
import PricingBase from "./PricingBase";

class Pricing extends PricingBase {
    /**
     * @deprecated - Use v1.messaging instead
     */
    get messaging(): MessagingListInstance {
        console.warn('messaging is deprecated. Use v1.messaging instead.');
        return this.v1.messaging;
    }

    /**
     * @deprecated - Use v1.phoneNumbers instead
     */
    get phoneNumbers(): PhoneNumberListInstance {
        console.warn('phoneNumbers is deprecated. Use v1.phoneNumbers instead.');
        return this.v1.phoneNumbers;
    }

    /**
     * @deprecated - Use v2.voice instead
     */
    get voice(): VoiceListInstance {
        console.warn('voice is deprecated. Use v2.voice instead.');
        return this.v2.voice;
    }

    /**
     * @deprecated - Use v2.countries instead
     */
    get countries(): CountryListInstance {
        console.warn('countries is deprecated. Use v2.countries instead.');
        return this.v2.countries;
    }

    /**
     * @deprecated - Use v2.numbers instead
     */
    get numbers(): NumberListInstance {
        console.warn('numbers is deprecated. Use v2.numbers instead.');
        return this.v2.numbers;
    }
}

export = Pricing;

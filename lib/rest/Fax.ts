import {FaxListInstance} from "./fax/v1/fax";
import FaxBase from "./FaxBase";

export default class Fax extends FaxBase {
    /**
     * @deprecated - Use v1.faxes instead
     */
    get faxes(): FaxListInstance {
        console.warn('faxes is deprecated. Use v1.faxes instead.');
        return this.v1.faxes;
    }
}

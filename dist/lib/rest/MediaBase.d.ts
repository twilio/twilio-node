import Domain from "../base/Domain";
import V1 from "./media/V1";
declare class MediaBase extends Domain {
    _v1?: V1;
    /**
     * Initialize media domain
     *
     * @param twilio - The twilio client
     */
    constructor(twilio: any);
    get v1(): V1;
}
export = MediaBase;

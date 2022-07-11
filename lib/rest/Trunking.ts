import {TrunkListInstance} from "./trunking/v1/trunk";
import TrunkingBase from "./TrunkingBase";

class Trunking extends TrunkingBase {
    /**
     * @deprecated - Use v1.trunks instead
     */
    get trunks(): TrunkListInstance {
        console.warn('trunks is deprecated. Use v1.trunks instead.');
        return this.v1.trunks;
    }
}

export = Trunking;

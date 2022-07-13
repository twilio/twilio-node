import {ArchivedCallListInstance} from "./voice/v1/archivedCall";
import {ByocTrunkListInstance} from "./voice/v1/byocTrunk";
import {ConnectionPolicyListInstance} from "./voice/v1/connectionPolicy";
import {DialingPermissionsListInstance} from "./voice/v1/dialingPermissions";
import {IpRecordListInstance} from "./voice/v1/ipRecord";
import {SourceIpMappingListInstance} from "./voice/v1/sourceIpMapping";
import VoiceBase from "./VoiceBase";

class Voice extends VoiceBase {
    /**
     * @deprecated - Use v1.archivedCalls instead
     */
    get archivedCalls(): ArchivedCallListInstance {
        console.warn('archivedCalls is deprecated. Use v1.archivedCalls instead.');
        return this.v1.archivedCalls;
    }

    /**
     * @deprecated - Use v1.byocTrunks instead
     */
    get byocTrunks(): ByocTrunkListInstance {
        console.warn('byocTrunks is deprecated. Use v1.byocTrunks instead.');
        return this.v1.byocTrunks;
    }

    /**
     * @deprecated - Use v1.connectionPolicies instead
     */
    get connectionPolicies(): ConnectionPolicyListInstance {
        console.warn('connectionPolicies is deprecated. Use v1.connectionPolicies instead.');
        return this.v1.connectionPolicies;
    }

    /**
     * @deprecated - Use v1.dialingPermissions instead
     */
    get dialingPermissions(): DialingPermissionsListInstance {
        console.warn('dialingPermissions is deprecated. Use v1.dialingPermissions instead.');
        return this.v1.dialingPermissions;
    }

    /**
     * @deprecated - Use v1.ipRecords instead
     */
    get ipRecords(): IpRecordListInstance {
        console.warn('ipRecords is deprecated. Use v1.ipRecords instead.');
        return this.v1.ipRecords;
    }

    /**
     * @deprecated - Use v1.sourceIpMappings instead
     */
    get sourceIpMappings(): SourceIpMappingListInstance {
        console.warn('sourceIpMappings is deprecated. Use v1.sourceIpMappings instead.');
        return this.v1.sourceIpMappings;
    }
}

export = Voice;

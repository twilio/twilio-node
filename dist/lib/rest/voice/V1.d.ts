import VoiceBase from "../VoiceBase";
import Version from "../../base/Version";
import { ArchivedCallListInstance } from "./v1/archivedCall";
import { ByocTrunkListInstance } from "./v1/byocTrunk";
import { ConnectionPolicyListInstance } from "./v1/connectionPolicy";
import { DialingPermissionsListInstance } from "./v1/dialingPermissions";
import { IpRecordListInstance } from "./v1/ipRecord";
import { SourceIpMappingListInstance } from "./v1/sourceIpMapping";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Voice
     *
     * @property { Twilio.Voice.V1.ArchivedCallListInstance } archivedCalls - archivedCalls resource
     * @property { Twilio.Voice.V1.ByocTrunkListInstance } byocTrunks - byocTrunks resource
     * @property { Twilio.Voice.V1.ConnectionPolicyListInstance } connectionPolicies - connectionPolicies resource
     * @property { Twilio.Voice.V1.DialingPermissionsListInstance } dialingPermissions - dialingPermissions resource
     * @property { Twilio.Voice.V1.IpRecordListInstance } ipRecords - ipRecords resource
     * @property { Twilio.Voice.V1.SourceIpMappingListInstance } sourceIpMappings - sourceIpMappings resource
     *
     * @param { Twilio.Voice } domain - The Twilio domain
     */
    constructor(domain: VoiceBase);
    protected _archivedCalls?: ArchivedCallListInstance;
    protected _byocTrunks?: ByocTrunkListInstance;
    protected _connectionPolicies?: ConnectionPolicyListInstance;
    protected _dialingPermissions?: DialingPermissionsListInstance;
    protected _ipRecords?: IpRecordListInstance;
    protected _sourceIpMappings?: SourceIpMappingListInstance;
    get archivedCalls(): ArchivedCallListInstance;
    get byocTrunks(): ByocTrunkListInstance;
    get connectionPolicies(): ConnectionPolicyListInstance;
    get dialingPermissions(): DialingPermissionsListInstance;
    get ipRecords(): IpRecordListInstance;
    get sourceIpMappings(): SourceIpMappingListInstance;
}

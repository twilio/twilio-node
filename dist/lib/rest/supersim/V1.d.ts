import SupersimBase from "../SupersimBase";
import Version from "../../base/Version";
import { EsimProfileListInstance } from "./v1/esimProfile";
import { FleetListInstance } from "./v1/fleet";
import { IpCommandListInstance } from "./v1/ipCommand";
import { NetworkListInstance } from "./v1/network";
import { NetworkAccessProfileListInstance } from "./v1/networkAccessProfile";
import { SettingsUpdateListInstance } from "./v1/settingsUpdate";
import { SimListInstance } from "./v1/sim";
import { SmsCommandListInstance } from "./v1/smsCommand";
import { UsageRecordListInstance } from "./v1/usageRecord";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Supersim
     *
     * @property { Twilio.Supersim.V1.EsimProfileListInstance } esimProfiles - esimProfiles resource
     * @property { Twilio.Supersim.V1.FleetListInstance } fleets - fleets resource
     * @property { Twilio.Supersim.V1.IpCommandListInstance } ipCommands - ipCommands resource
     * @property { Twilio.Supersim.V1.NetworkListInstance } networks - networks resource
     * @property { Twilio.Supersim.V1.NetworkAccessProfileListInstance } networkAccessProfiles - networkAccessProfiles resource
     * @property { Twilio.Supersim.V1.SettingsUpdateListInstance } settingsUpdates - settingsUpdates resource
     * @property { Twilio.Supersim.V1.SimListInstance } sims - sims resource
     * @property { Twilio.Supersim.V1.SmsCommandListInstance } smsCommands - smsCommands resource
     * @property { Twilio.Supersim.V1.UsageRecordListInstance } usageRecords - usageRecords resource
     *
     * @param { Twilio.Supersim } domain - The Twilio domain
     */
    constructor(domain: SupersimBase);
    protected _esimProfiles?: EsimProfileListInstance;
    protected _fleets?: FleetListInstance;
    protected _ipCommands?: IpCommandListInstance;
    protected _networks?: NetworkListInstance;
    protected _networkAccessProfiles?: NetworkAccessProfileListInstance;
    protected _settingsUpdates?: SettingsUpdateListInstance;
    protected _sims?: SimListInstance;
    protected _smsCommands?: SmsCommandListInstance;
    protected _usageRecords?: UsageRecordListInstance;
    get esimProfiles(): EsimProfileListInstance;
    get fleets(): FleetListInstance;
    get ipCommands(): IpCommandListInstance;
    get networks(): NetworkListInstance;
    get networkAccessProfiles(): NetworkAccessProfileListInstance;
    get settingsUpdates(): SettingsUpdateListInstance;
    get sims(): SimListInstance;
    get smsCommands(): SmsCommandListInstance;
    get usageRecords(): UsageRecordListInstance;
}

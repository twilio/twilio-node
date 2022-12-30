import InsightsBase from "../InsightsBase";
import Version from "../../base/Version";
import { CallListInstance } from "./v1/call";
import { CallSummariesListInstance } from "./v1/callSummaries";
import { ConferenceListInstance } from "./v1/conference";
import { RoomListInstance } from "./v1/room";
import { SettingListInstance } from "./v1/setting";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Insights
     *
     * @property { Twilio.Insights.V1.CallListInstance } calls - calls resource
     * @property { Twilio.Insights.V1.CallSummariesListInstance } callSummaries - callSummaries resource
     * @property { Twilio.Insights.V1.ConferenceListInstance } conferences - conferences resource
     * @property { Twilio.Insights.V1.RoomListInstance } rooms - rooms resource
     * @property { Twilio.Insights.V1.SettingListInstance } settings - settings resource
     *
     * @param { Twilio.Insights } domain - The Twilio domain
     */
    constructor(domain: InsightsBase);
    protected _calls?: CallListInstance;
    protected _callSummaries?: CallSummariesListInstance;
    protected _conferences?: ConferenceListInstance;
    protected _rooms?: RoomListInstance;
    protected _settings?: SettingListInstance;
    get calls(): CallListInstance;
    get callSummaries(): CallSummariesListInstance;
    get conferences(): ConferenceListInstance;
    get rooms(): RoomListInstance;
    get settings(): SettingListInstance;
}

import FlexApiBase from "../FlexApiBase";
import Version from "../../base/Version";
import { AssessmentsListInstance } from "./v1/assessments";
import { ChannelListInstance } from "./v1/channel";
import { ConfigurationListInstance } from "./v1/configuration";
import { FlexFlowListInstance } from "./v1/flexFlow";
import { GoodDataListInstance } from "./v1/goodData";
import { InteractionListInstance } from "./v1/interaction";
import { UserRolesListInstance } from "./v1/userRoles";
import { WebChannelListInstance } from "./v1/webChannel";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of FlexApi
     *
     * @property { Twilio.FlexApi.V1.AssessmentsListInstance } assessments - assessments resource
     * @property { Twilio.FlexApi.V1.ChannelListInstance } channel - channel resource
     * @property { Twilio.FlexApi.V1.ConfigurationListInstance } configuration - configuration resource
     * @property { Twilio.FlexApi.V1.FlexFlowListInstance } flexFlow - flexFlow resource
     * @property { Twilio.FlexApi.V1.GoodDataListInstance } goodData - goodData resource
     * @property { Twilio.FlexApi.V1.InteractionListInstance } interaction - interaction resource
     * @property { Twilio.FlexApi.V1.UserRolesListInstance } userRoles - userRoles resource
     * @property { Twilio.FlexApi.V1.WebChannelListInstance } webChannel - webChannel resource
     *
     * @param { Twilio.FlexApi } domain - The Twilio domain
     */
    constructor(domain: FlexApiBase);
    protected _assessments?: AssessmentsListInstance;
    protected _channel?: ChannelListInstance;
    protected _configuration?: ConfigurationListInstance;
    protected _flexFlow?: FlexFlowListInstance;
    protected _goodData?: GoodDataListInstance;
    protected _interaction?: InteractionListInstance;
    protected _userRoles?: UserRolesListInstance;
    protected _webChannel?: WebChannelListInstance;
    get assessments(): AssessmentsListInstance;
    get channel(): ChannelListInstance;
    get configuration(): ConfigurationListInstance;
    get flexFlow(): FlexFlowListInstance;
    get goodData(): GoodDataListInstance;
    get interaction(): InteractionListInstance;
    get userRoles(): UserRolesListInstance;
    get webChannel(): WebChannelListInstance;
}

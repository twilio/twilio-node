import FlexApiBase from "../FlexApiBase";
import Version from "../../base/Version";
import { WebChannelsListInstance } from "./v2/webChannels";
export default class V2 extends Version {
    /**
     * Initialize the V2 version of FlexApi
     *
     * @property { Twilio.FlexApi.V2.WebChannelsListInstance } webChannels - webChannels resource
     *
     * @param { Twilio.FlexApi } domain - The Twilio domain
     */
    constructor(domain: FlexApiBase);
    protected _webChannels?: WebChannelsListInstance;
    get webChannels(): WebChannelsListInstance;
}

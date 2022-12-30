import ChatBase from "../ChatBase";
import Version from "../../base/Version";
import { ChannelListInstance } from "./v3/channel";
export default class V3 extends Version {
    /**
     * Initialize the V3 version of Chat
     *
     * @property { Twilio.Chat.V3.ChannelListInstance } channels - channels resource
     *
     * @param { Twilio.Chat } domain - The Twilio domain
     */
    constructor(domain: ChatBase);
    protected _channels?: ChannelListInstance;
    get channels(): ChannelListInstance;
}

import ContentBase from "../ContentBase";
import Version from "../../base/Version";
import { ContentListInstance } from "./v1/content";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Content
     *
     * @property { Twilio.Content.V1.ContentListInstance } contents - contents resource
     *
     * @param { Twilio.Content } domain - The Twilio domain
     */
    constructor(domain: ContentBase);
    protected _contents?: ContentListInstance;
    get contents(): ContentListInstance;
}

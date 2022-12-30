import MediaBase from "../MediaBase";
import Version from "../../base/Version";
import { MediaProcessorListInstance } from "./v1/mediaProcessor";
import { MediaRecordingListInstance } from "./v1/mediaRecording";
import { PlayerStreamerListInstance } from "./v1/playerStreamer";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Media
     *
     * @property { Twilio.Media.V1.MediaProcessorListInstance } mediaProcessor - mediaProcessor resource
     * @property { Twilio.Media.V1.MediaRecordingListInstance } mediaRecording - mediaRecording resource
     * @property { Twilio.Media.V1.PlayerStreamerListInstance } playerStreamer - playerStreamer resource
     *
     * @param { Twilio.Media } domain - The Twilio domain
     */
    constructor(domain: MediaBase);
    protected _mediaProcessor?: MediaProcessorListInstance;
    protected _mediaRecording?: MediaRecordingListInstance;
    protected _playerStreamer?: PlayerStreamerListInstance;
    get mediaProcessor(): MediaProcessorListInstance;
    get mediaRecording(): MediaRecordingListInstance;
    get playerStreamer(): PlayerStreamerListInstance;
}

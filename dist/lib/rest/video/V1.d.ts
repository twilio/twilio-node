import VideoBase from "../VideoBase";
import Version from "../../base/Version";
import { CompositionListInstance } from "./v1/composition";
import { CompositionHookListInstance } from "./v1/compositionHook";
import { CompositionSettingsListInstance } from "./v1/compositionSettings";
import { RecordingListInstance } from "./v1/recording";
import { RecordingSettingsListInstance } from "./v1/recordingSettings";
import { RoomListInstance } from "./v1/room";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Video
     *
     * @property { Twilio.Video.V1.CompositionListInstance } compositions - compositions resource
     * @property { Twilio.Video.V1.CompositionHookListInstance } compositionHooks - compositionHooks resource
     * @property { Twilio.Video.V1.CompositionSettingsListInstance } compositionSettings - compositionSettings resource
     * @property { Twilio.Video.V1.RecordingListInstance } recordings - recordings resource
     * @property { Twilio.Video.V1.RecordingSettingsListInstance } recordingSettings - recordingSettings resource
     * @property { Twilio.Video.V1.RoomListInstance } rooms - rooms resource
     *
     * @param { Twilio.Video } domain - The Twilio domain
     */
    constructor(domain: VideoBase);
    protected _compositions?: CompositionListInstance;
    protected _compositionHooks?: CompositionHookListInstance;
    protected _compositionSettings?: CompositionSettingsListInstance;
    protected _recordings?: RecordingListInstance;
    protected _recordingSettings?: RecordingSettingsListInstance;
    protected _rooms?: RoomListInstance;
    get compositions(): CompositionListInstance;
    get compositionHooks(): CompositionHookListInstance;
    get compositionSettings(): CompositionSettingsListInstance;
    get recordings(): RecordingListInstance;
    get recordingSettings(): RecordingSettingsListInstance;
    get rooms(): RoomListInstance;
}

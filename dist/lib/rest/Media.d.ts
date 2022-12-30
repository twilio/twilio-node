import { MediaProcessorListInstance } from "./media/v1/mediaProcessor";
import { MediaRecordingListInstance } from "./media/v1/mediaRecording";
import { PlayerStreamerListInstance } from "./media/v1/playerStreamer";
import MediaBase from "./MediaBase";
declare class Media extends MediaBase {
    /**
     * @deprecated - Use v1.mediaProcessor instead
     */
    get mediaProcessor(): MediaProcessorListInstance;
    /**
     * @deprecated - Use v1.mediaRecording instead
     */
    get mediaRecording(): MediaRecordingListInstance;
    /**
     * @deprecated - Use v1.playerStreamer instead
     */
    get playerStreamer(): PlayerStreamerListInstance;
}
export = Media;

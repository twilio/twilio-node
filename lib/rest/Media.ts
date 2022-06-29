import {MediaProcessorListInstance} from "./media/v1/mediaProcessor";
import {MediaRecordingListInstance} from "./media/v1/mediaRecording";
import {PlayerStreamerListInstance} from "./media/v1/playerStreamer";
import MediaBase from "./MediaBase";

export default class Media extends MediaBase {
    /**
     * @deprecated - Use v1.mediaProcessor instead
     */
    get mediaProcessor(): MediaProcessorListInstance {
        console.warn('mediaProcessor is deprecated. Use v1.mediaProcessor instead.');
        return this.v1.mediaProcessor;
    }

    /**
     * @deprecated - Use v1.mediaRecording instead
     */
    get mediaRecording(): MediaRecordingListInstance {
        console.warn('mediaRecording is deprecated. Use v1.mediaRecording instead.');
        return this.v1.mediaRecording;
    }

    /**
     * @deprecated - Use v1.playerStreamer instead
     */
    get playerStreamer(): PlayerStreamerListInstance {
        console.warn('playerStreamer is deprecated. Use v1.playerStreamer instead.');
        return this.v1.playerStreamer;
    }
}

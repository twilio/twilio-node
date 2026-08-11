import { CompositionListInstance } from "./video/v1/composition";
import { CompositionHookListInstance } from "./video/v1/compositionHook";
import { CompositionSettingsListInstance } from "./video/v1/compositionSettings";
import { RecordingListInstance } from "./video/v1/recording";
import { RecordingSettingsListInstance } from "./video/v1/recordingSettings";
import { RoomListInstance } from "./video/v1/room";
import VideoBase from "./VideoBase";

class Video extends VideoBase {
  /**
   * @deprecated - Use v1.compositions instead
   */
  get compositions(): CompositionListInstance {
    console.warn("compositions is deprecated. Use v1.compositions instead.");
    return this.v1.compositions;
  }

  /**
   * @deprecated - Use v1.compositionHooks instead
   */
  get compositionHooks(): CompositionHookListInstance {
    console.warn(
      "compositionHooks is deprecated. Use v1.compositionHooks instead."
    );
    return this.v1.compositionHooks;
  }

  /**
   * @deprecated - Use v1.compositionSettings instead
   */
  get compositionSettings(): CompositionSettingsListInstance {
    console.warn(
      "compositionSettings is deprecated. Use v1.compositionSettings instead."
    );
    return this.v1.compositionSettings;
  }

  /**
   * @deprecated - Use v1.recordings instead
   */
  get recordings(): RecordingListInstance {
    console.warn("recordings is deprecated. Use v1.recordings instead.");
    return this.v1.recordings;
  }

  /**
   * @deprecated - Use v1.recordingSettings instead
   */
  get recordingSettings(): RecordingSettingsListInstance {
    console.warn(
      "recordingSettings is deprecated. Use v1.recordingSettings instead."
    );
    return this.v1.recordingSettings;
  }

  /**
   * @deprecated - Use v1.rooms instead
   */
  get rooms(): RoomListInstance {
    console.warn("rooms is deprecated. Use v1.rooms instead.");
    return this.v1.rooms;
  }
}

export = Video;

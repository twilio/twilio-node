"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const MediaBase_1 = __importDefault(require("./MediaBase"));
class Media extends MediaBase_1.default {
    /**
     * @deprecated - Use v1.mediaProcessor instead
     */
    get mediaProcessor() {
        console.warn("mediaProcessor is deprecated. Use v1.mediaProcessor instead.");
        return this.v1.mediaProcessor;
    }
    /**
     * @deprecated - Use v1.mediaRecording instead
     */
    get mediaRecording() {
        console.warn("mediaRecording is deprecated. Use v1.mediaRecording instead.");
        return this.v1.mediaRecording;
    }
    /**
     * @deprecated - Use v1.playerStreamer instead
     */
    get playerStreamer() {
        console.warn("playerStreamer is deprecated. Use v1.playerStreamer instead.");
        return this.v1.playerStreamer;
    }
}
module.exports = Media;

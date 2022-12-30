"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const FlexApiBase_1 = __importDefault(require("./FlexApiBase"));
class FlexApi extends FlexApiBase_1.default {
    /**
     * @deprecated - Use v1.channel instead
     */
    get channel() {
        console.warn("channel is deprecated. Use v1.channel instead.");
        return this.v1.channel;
    }
    /**
     * @deprecated - Use v1.configuration instead
     */
    get configuration() {
        console.warn("configuration is deprecated. Use v1.configuration instead.");
        return this.v1.configuration;
    }
    /**
     * @deprecated - Use v1.flexFlow instead
     */
    get flexFlow() {
        console.warn("flexFlow is deprecated. Use v1.flexFlow instead.");
        return this.v1.flexFlow;
    }
    /**
     * @deprecated - Use v1.interaction instead
     */
    get interaction() {
        console.warn("interaction is deprecated. Use v1.interaction instead.");
        return this.v1.interaction;
    }
    /**
     * @deprecated - Use v1.webChannel instead
     */
    get webChannel() {
        console.warn("webChannel is deprecated. Use v1.webChannel instead.");
        return this.v1.webChannel;
    }
}
module.exports = FlexApi;

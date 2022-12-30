"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const OauthBase_1 = __importDefault(require("./OauthBase"));
class Oauth extends OauthBase_1.default {
    /**
     * @deprecated - Use v1.oauth instead
     */
    get oauth() {
        console.warn("oauth is deprecated. Use v1.oauth instead.");
        return this.v1.oauth;
    }
    /**
     * @deprecated - Use v1.openidDiscovery instead
     */
    get openidDiscovery() {
        console.warn("openidDiscovery is deprecated. Use v1.openidDiscovery instead.");
        return this.v1.openidDiscovery;
    }
    /**
     * @deprecated - Use v1.token instead
     */
    get token() {
        console.warn("token is deprecated. Use v1.token instead.");
        return this.v1.token;
    }
    /**
     * @deprecated - Use v1.userInfo instead
     */
    get userInfo() {
        console.warn("userInfo is deprecated. Use v1.userInfo instead.");
        return this.v1.userInfo;
    }
}
module.exports = Oauth;

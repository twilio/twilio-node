"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Pricing
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Version_1 = __importDefault(require("../../base/Version"));
const country_1 = require("./v2/country");
const number_1 = require("./v2/number");
const voice_1 = require("./v2/voice");
class V2 extends Version_1.default {
    /**
     * Initialize the V2 version of Pricing
     *
     * @property { Twilio.Pricing.V2.CountryListInstance } countries - countries resource
     * @property { Twilio.Pricing.V2.NumberListInstance } numbers - numbers resource
     * @property { Twilio.Pricing.V2.VoiceListInstance } voice - voice resource
     *
     * @param { Twilio.Pricing } domain - The Twilio domain
     */
    constructor(domain) {
        super(domain, "v2");
    }
    get countries() {
        this._countries = this._countries || (0, country_1.CountryListInstance)(this);
        return this._countries;
    }
    get numbers() {
        this._numbers = this._numbers || (0, number_1.NumberListInstance)(this);
        return this._numbers;
    }
    get voice() {
        this._voice = this._voice || (0, voice_1.VoiceListInstance)(this);
        return this._voice;
    }
}
exports.default = V2;

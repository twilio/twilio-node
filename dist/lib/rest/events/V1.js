"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Events
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
const eventType_1 = require("./v1/eventType");
const schema_1 = require("./v1/schema");
const sink_1 = require("./v1/sink");
const subscription_1 = require("./v1/subscription");
class V1 extends Version_1.default {
    /**
     * Initialize the V1 version of Events
     *
     * @property { Twilio.Events.V1.EventTypeListInstance } eventTypes - eventTypes resource
     * @property { Twilio.Events.V1.SchemaListInstance } schemas - schemas resource
     * @property { Twilio.Events.V1.SinkListInstance } sinks - sinks resource
     * @property { Twilio.Events.V1.SubscriptionListInstance } subscriptions - subscriptions resource
     *
     * @param { Twilio.Events } domain - The Twilio domain
     */
    constructor(domain) {
        super(domain, "v1");
    }
    get eventTypes() {
        this._eventTypes = this._eventTypes || (0, eventType_1.EventTypeListInstance)(this);
        return this._eventTypes;
    }
    get schemas() {
        this._schemas = this._schemas || (0, schema_1.SchemaListInstance)(this);
        return this._schemas;
    }
    get sinks() {
        this._sinks = this._sinks || (0, sink_1.SinkListInstance)(this);
        return this._sinks;
    }
    get subscriptions() {
        this._subscriptions = this._subscriptions || (0, subscription_1.SubscriptionListInstance)(this);
        return this._subscriptions;
    }
}
exports.default = V1;

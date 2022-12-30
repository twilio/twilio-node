"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
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
exports.ServicePage = exports.ServiceListInstance = exports.ServiceInstance = exports.ServiceContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
const accessToken_1 = require("./service/accessToken");
const entity_1 = require("./service/entity");
const messagingConfiguration_1 = require("./service/messagingConfiguration");
const rateLimit_1 = require("./service/rateLimit");
const verification_1 = require("./service/verification");
const verificationCheck_1 = require("./service/verificationCheck");
const webhook_1 = require("./service/webhook");
class ServiceContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/Services/${sid}`;
    }
    get accessTokens() {
        this._accessTokens =
            this._accessTokens ||
                (0, accessToken_1.AccessTokenListInstance)(this._version, this._solution.sid);
        return this._accessTokens;
    }
    get entities() {
        this._entities =
            this._entities || (0, entity_1.EntityListInstance)(this._version, this._solution.sid);
        return this._entities;
    }
    get messagingConfigurations() {
        this._messagingConfigurations =
            this._messagingConfigurations ||
                (0, messagingConfiguration_1.MessagingConfigurationListInstance)(this._version, this._solution.sid);
        return this._messagingConfigurations;
    }
    get rateLimits() {
        this._rateLimits =
            this._rateLimits ||
                (0, rateLimit_1.RateLimitListInstance)(this._version, this._solution.sid);
        return this._rateLimits;
    }
    get verifications() {
        this._verifications =
            this._verifications ||
                (0, verification_1.VerificationListInstance)(this._version, this._solution.sid);
        return this._verifications;
    }
    get verificationChecks() {
        this._verificationChecks =
            this._verificationChecks ||
                (0, verificationCheck_1.VerificationCheckListInstance)(this._version, this._solution.sid);
        return this._verificationChecks;
    }
    get webhooks() {
        this._webhooks =
            this._webhooks || (0, webhook_1.WebhookListInstance)(this._version, this._solution.sid);
        return this._webhooks;
    }
    remove(callback) {
        let operationVersion = this._version, operationPromise = operationVersion.remove({
            uri: this._uri,
            method: "delete",
        });
        operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    fetch(callback) {
        let operationVersion = this._version, operationPromise = operationVersion.fetch({
            uri: this._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new ServiceInstance(operationVersion, payload, this._solution.sid));
        operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    update(params, callback) {
        if (typeof params === "function") {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        if (params["codeLength"] !== undefined)
            data["CodeLength"] = params["codeLength"];
        if (params["lookupEnabled"] !== undefined)
            data["LookupEnabled"] = serialize.bool(params["lookupEnabled"]);
        if (params["skipSmsToLandlines"] !== undefined)
            data["SkipSmsToLandlines"] = serialize.bool(params["skipSmsToLandlines"]);
        if (params["dtmfInputRequired"] !== undefined)
            data["DtmfInputRequired"] = serialize.bool(params["dtmfInputRequired"]);
        if (params["ttsName"] !== undefined)
            data["TtsName"] = params["ttsName"];
        if (params["psd2Enabled"] !== undefined)
            data["Psd2Enabled"] = serialize.bool(params["psd2Enabled"]);
        if (params["doNotShareWarningEnabled"] !== undefined)
            data["DoNotShareWarningEnabled"] = serialize.bool(params["doNotShareWarningEnabled"]);
        if (params["customCodeEnabled"] !== undefined)
            data["CustomCodeEnabled"] = serialize.bool(params["customCodeEnabled"]);
        if (params["push.includeDate"] !== undefined)
            data["Push.IncludeDate"] = serialize.bool(params["push.includeDate"]);
        if (params["push.apnCredentialSid"] !== undefined)
            data["Push.ApnCredentialSid"] = params["push.apnCredentialSid"];
        if (params["push.fcmCredentialSid"] !== undefined)
            data["Push.FcmCredentialSid"] = params["push.fcmCredentialSid"];
        if (params["totp.issuer"] !== undefined)
            data["Totp.Issuer"] = params["totp.issuer"];
        if (params["totp.timeStep"] !== undefined)
            data["Totp.TimeStep"] = params["totp.timeStep"];
        if (params["totp.codeLength"] !== undefined)
            data["Totp.CodeLength"] = params["totp.codeLength"];
        if (params["totp.skew"] !== undefined)
            data["Totp.Skew"] = params["totp.skew"];
        if (params["defaultTemplateSid"] !== undefined)
            data["DefaultTemplateSid"] = params["defaultTemplateSid"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = this._version, operationPromise = operationVersion.update({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ServiceInstance(operationVersion, payload, this._solution.sid));
        operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return this._solution;
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ServiceContextImpl = ServiceContextImpl;
class ServiceInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.friendlyName = payload.friendly_name;
        this.codeLength = deserialize.integer(payload.code_length);
        this.lookupEnabled = payload.lookup_enabled;
        this.psd2Enabled = payload.psd2_enabled;
        this.skipSmsToLandlines = payload.skip_sms_to_landlines;
        this.dtmfInputRequired = payload.dtmf_input_required;
        this.ttsName = payload.tts_name;
        this.doNotShareWarningEnabled = payload.do_not_share_warning_enabled;
        this.customCodeEnabled = payload.custom_code_enabled;
        this.push = payload.push;
        this.totp = payload.totp;
        this.defaultTemplateSid = payload.default_template_sid;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.url = payload.url;
        this.links = payload.links;
        this._solution = { sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new ServiceContextImpl(this._version, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a ServiceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a ServiceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed ServiceInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Access the accessTokens.
     */
    accessTokens() {
        return this._proxy.accessTokens;
    }
    /**
     * Access the entities.
     */
    entities() {
        return this._proxy.entities;
    }
    /**
     * Access the messagingConfigurations.
     */
    messagingConfigurations() {
        return this._proxy.messagingConfigurations;
    }
    /**
     * Access the rateLimits.
     */
    rateLimits() {
        return this._proxy.rateLimits;
    }
    /**
     * Access the verifications.
     */
    verifications() {
        return this._proxy.verifications;
    }
    /**
     * Access the verificationChecks.
     */
    verificationChecks() {
        return this._proxy.verificationChecks;
    }
    /**
     * Access the webhooks.
     */
    webhooks() {
        return this._proxy.webhooks;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            sid: this.sid,
            accountSid: this.accountSid,
            friendlyName: this.friendlyName,
            codeLength: this.codeLength,
            lookupEnabled: this.lookupEnabled,
            psd2Enabled: this.psd2Enabled,
            skipSmsToLandlines: this.skipSmsToLandlines,
            dtmfInputRequired: this.dtmfInputRequired,
            ttsName: this.ttsName,
            doNotShareWarningEnabled: this.doNotShareWarningEnabled,
            customCodeEnabled: this.customCodeEnabled,
            push: this.push,
            totp: this.totp,
            defaultTemplateSid: this.defaultTemplateSid,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            url: this.url,
            links: this.links,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ServiceInstance = ServiceInstance;
class ServiceListInstanceImpl {
}
function ServiceListInstance(version) {
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new ServiceContextImpl(version, sid);
    };
    instance._version = version;
    instance._solution = {};
    instance._uri = `/Services`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["friendlyName"] === null ||
            params["friendlyName"] === undefined) {
            throw new Error("Required parameter \"params['friendlyName']\" missing.");
        }
        let data = {};
        data["FriendlyName"] = params["friendlyName"];
        if (params["codeLength"] !== undefined)
            data["CodeLength"] = params["codeLength"];
        if (params["lookupEnabled"] !== undefined)
            data["LookupEnabled"] = serialize.bool(params["lookupEnabled"]);
        if (params["skipSmsToLandlines"] !== undefined)
            data["SkipSmsToLandlines"] = serialize.bool(params["skipSmsToLandlines"]);
        if (params["dtmfInputRequired"] !== undefined)
            data["DtmfInputRequired"] = serialize.bool(params["dtmfInputRequired"]);
        if (params["ttsName"] !== undefined)
            data["TtsName"] = params["ttsName"];
        if (params["psd2Enabled"] !== undefined)
            data["Psd2Enabled"] = serialize.bool(params["psd2Enabled"]);
        if (params["doNotShareWarningEnabled"] !== undefined)
            data["DoNotShareWarningEnabled"] = serialize.bool(params["doNotShareWarningEnabled"]);
        if (params["customCodeEnabled"] !== undefined)
            data["CustomCodeEnabled"] = serialize.bool(params["customCodeEnabled"]);
        if (params["push.includeDate"] !== undefined)
            data["Push.IncludeDate"] = serialize.bool(params["push.includeDate"]);
        if (params["push.apnCredentialSid"] !== undefined)
            data["Push.ApnCredentialSid"] = params["push.apnCredentialSid"];
        if (params["push.fcmCredentialSid"] !== undefined)
            data["Push.FcmCredentialSid"] = params["push.fcmCredentialSid"];
        if (params["totp.issuer"] !== undefined)
            data["Totp.Issuer"] = params["totp.issuer"];
        if (params["totp.timeStep"] !== undefined)
            data["Totp.TimeStep"] = params["totp.timeStep"];
        if (params["totp.codeLength"] !== undefined)
            data["Totp.CodeLength"] = params["totp.codeLength"];
        if (params["totp.skew"] !== undefined)
            data["Totp.Skew"] = params["totp.skew"];
        if (params["defaultTemplateSid"] !== undefined)
            data["DefaultTemplateSid"] = params["defaultTemplateSid"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ServiceInstance(operationVersion, payload));
        operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.page = function page(params, callback) {
        if (typeof params === "function") {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        if (params["pageSize"] !== undefined)
            data["PageSize"] = params["pageSize"];
        if (params.page !== undefined)
            data["Page"] = params.pageNumber;
        if (params.pageToken !== undefined)
            data["PageToken"] = params.pageToken;
        const headers = {};
        let operationVersion = version, operationPromise = operationVersion.page({
            uri: this._uri,
            method: "get",
            params: data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new ServicePage(operationVersion, payload, this._solution));
        operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.each = instance._version.each;
    instance.list = instance._version.list;
    instance.getPage = function getPage(targetUrl, callback) {
        let operationPromise = this._version._domain.twilio.request({
            method: "get",
            uri: targetUrl,
        });
        operationPromise = operationPromise.then((payload) => new ServicePage(this._version, payload, this._solution));
        operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    };
    instance.toJSON = function toJSON() {
        return this._solution;
    };
    instance[util_1.inspect.custom] = function inspectImpl(_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    };
    return instance;
}
exports.ServiceListInstance = ServiceListInstance;
class ServicePage extends Page_1.default {
    /**
     * Initialize the ServicePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of ServiceInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new ServiceInstance(this._version, payload);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.ServicePage = ServicePage;

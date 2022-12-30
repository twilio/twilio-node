"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Chat
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
exports.UserChannelPage = exports.UserChannelListInstance = exports.UserChannelInstance = exports.UserChannelContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../../base/Page"));
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
const utility_1 = require("../../../../../base/utility");
class UserChannelContextImpl {
    constructor(_version, serviceSid, userSid, channelSid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(serviceSid)) {
            throw new Error("Parameter 'serviceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(userSid)) {
            throw new Error("Parameter 'userSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(channelSid)) {
            throw new Error("Parameter 'channelSid' is not valid.");
        }
        this._solution = { serviceSid, userSid, channelSid };
        this._uri = `/Services/${serviceSid}/Users/${userSid}/Channels/${channelSid}`;
    }
    remove(params, callback) {
        if (typeof params === "function") {
            callback = params;
            params = {};
        }
        else {
            params = params || {};
        }
        let data = {};
        const headers = {};
        if (params["xTwilioWebhookEnabled"] !== undefined)
            headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];
        let operationVersion = this._version, operationPromise = operationVersion.remove({
            uri: this._uri,
            method: "delete",
            params: data,
            headers,
        });
        operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        return operationPromise;
    }
    fetch(callback) {
        let operationVersion = this._version, operationPromise = operationVersion.fetch({
            uri: this._uri,
            method: "get",
        });
        operationPromise = operationPromise.then((payload) => new UserChannelInstance(operationVersion, payload, this._solution.serviceSid, this._solution.userSid, this._solution.channelSid));
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
        if (params["notificationLevel"] !== undefined)
            data["NotificationLevel"] = params["notificationLevel"];
        if (params["lastConsumedMessageIndex"] !== undefined)
            data["LastConsumedMessageIndex"] = params["lastConsumedMessageIndex"];
        if (params["lastConsumptionTimestamp"] !== undefined)
            data["LastConsumptionTimestamp"] = serialize.iso8601DateTime(params["lastConsumptionTimestamp"]);
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = this._version, operationPromise = operationVersion.update({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new UserChannelInstance(operationVersion, payload, this._solution.serviceSid, this._solution.userSid, this._solution.channelSid));
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
exports.UserChannelContextImpl = UserChannelContextImpl;
class UserChannelInstance {
    constructor(_version, payload, serviceSid, userSid, channelSid) {
        this._version = _version;
        this.accountSid = payload.account_sid;
        this.serviceSid = payload.service_sid;
        this.channelSid = payload.channel_sid;
        this.userSid = payload.user_sid;
        this.memberSid = payload.member_sid;
        this.status = payload.status;
        this.lastConsumedMessageIndex = deserialize.integer(payload.last_consumed_message_index);
        this.unreadMessagesCount = deserialize.integer(payload.unread_messages_count);
        this.links = payload.links;
        this.url = payload.url;
        this.notificationLevel = payload.notification_level;
        this._solution = {
            serviceSid,
            userSid,
            channelSid: channelSid || this.channelSid,
        };
    }
    get _proxy() {
        this._context =
            this._context ||
                new UserChannelContextImpl(this._version, this._solution.serviceSid, this._solution.userSid, this._solution.channelSid);
        return this._context;
    }
    remove(params, callback) {
        return this._proxy.remove(params, callback);
    }
    /**
     * Fetch a UserChannelInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserChannelInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            accountSid: this.accountSid,
            serviceSid: this.serviceSid,
            channelSid: this.channelSid,
            userSid: this.userSid,
            memberSid: this.memberSid,
            status: this.status,
            lastConsumedMessageIndex: this.lastConsumedMessageIndex,
            unreadMessagesCount: this.unreadMessagesCount,
            links: this.links,
            url: this.url,
            notificationLevel: this.notificationLevel,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.UserChannelInstance = UserChannelInstance;
class UserChannelListInstanceImpl {
}
function UserChannelListInstance(version, serviceSid, userSid) {
    if (!(0, utility_1.isValidPathParam)(serviceSid)) {
        throw new Error("Parameter 'serviceSid' is not valid.");
    }
    if (!(0, utility_1.isValidPathParam)(userSid)) {
        throw new Error("Parameter 'userSid' is not valid.");
    }
    const instance = ((channelSid) => instance.get(channelSid));
    instance.get = function get(channelSid) {
        return new UserChannelContextImpl(version, serviceSid, userSid, channelSid);
    };
    instance._version = version;
    instance._solution = { serviceSid, userSid };
    instance._uri = `/Services/${serviceSid}/Users/${userSid}/Channels`;
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
        operationPromise = operationPromise.then((payload) => new UserChannelPage(operationVersion, payload, this._solution));
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
        operationPromise = operationPromise.then((payload) => new UserChannelPage(this._version, payload, this._solution));
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
exports.UserChannelListInstance = UserChannelListInstance;
class UserChannelPage extends Page_1.default {
    /**
     * Initialize the UserChannelPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of UserChannelInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new UserChannelInstance(this._version, payload, this._solution.serviceSid, this._solution.userSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.UserChannelPage = UserChannelPage;

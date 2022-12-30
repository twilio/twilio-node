"use strict";
/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Ip_messaging
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
exports.UserPage = exports.UserListInstance = exports.UserInstance = exports.UserContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../../base/Page"));
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
const userBinding_1 = require("./user/userBinding");
const userChannel_1 = require("./user/userChannel");
class UserContextImpl {
    constructor(_version, serviceSid, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(serviceSid)) {
            throw new Error("Parameter 'serviceSid' is not valid.");
        }
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { serviceSid, sid };
        this._uri = `/Services/${serviceSid}/Users/${sid}`;
    }
    get userBindings() {
        this._userBindings =
            this._userBindings ||
                (0, userBinding_1.UserBindingListInstance)(this._version, this._solution.serviceSid, this._solution.sid);
        return this._userBindings;
    }
    get userChannels() {
        this._userChannels =
            this._userChannels ||
                (0, userChannel_1.UserChannelListInstance)(this._version, this._solution.serviceSid, this._solution.sid);
        return this._userChannels;
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
        operationPromise = operationPromise.then((payload) => new UserInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sid));
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
        if (params["roleSid"] !== undefined)
            data["RoleSid"] = params["roleSid"];
        if (params["attributes"] !== undefined)
            data["Attributes"] = params["attributes"];
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        if (params["xTwilioWebhookEnabled"] !== undefined)
            headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];
        let operationVersion = this._version, operationPromise = operationVersion.update({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new UserInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sid));
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
exports.UserContextImpl = UserContextImpl;
class UserInstance {
    constructor(_version, payload, serviceSid, sid) {
        this._version = _version;
        this.sid = payload.sid;
        this.accountSid = payload.account_sid;
        this.serviceSid = payload.service_sid;
        this.attributes = payload.attributes;
        this.friendlyName = payload.friendly_name;
        this.roleSid = payload.role_sid;
        this.identity = payload.identity;
        this.isOnline = payload.is_online;
        this.isNotifiable = payload.is_notifiable;
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.joinedChannelsCount = deserialize.integer(payload.joined_channels_count);
        this.links = payload.links;
        this.url = payload.url;
        this._solution = { serviceSid, sid: sid || this.sid };
    }
    get _proxy() {
        this._context =
            this._context ||
                new UserContextImpl(this._version, this._solution.serviceSid, this._solution.sid);
        return this._context;
    }
    /**
     * Remove a UserInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed boolean
     */
    remove(callback) {
        return this._proxy.remove(callback);
    }
    /**
     * Fetch a UserInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed UserInstance
     */
    fetch(callback) {
        return this._proxy.fetch(callback);
    }
    update(params, callback) {
        return this._proxy.update(params, callback);
    }
    /**
     * Access the userBindings.
     */
    userBindings() {
        return this._proxy.userBindings;
    }
    /**
     * Access the userChannels.
     */
    userChannels() {
        return this._proxy.userChannels;
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
            serviceSid: this.serviceSid,
            attributes: this.attributes,
            friendlyName: this.friendlyName,
            roleSid: this.roleSid,
            identity: this.identity,
            isOnline: this.isOnline,
            isNotifiable: this.isNotifiable,
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            joinedChannelsCount: this.joinedChannelsCount,
            links: this.links,
            url: this.url,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.UserInstance = UserInstance;
class UserListInstanceImpl {
}
function UserListInstance(version, serviceSid) {
    if (!(0, utility_1.isValidPathParam)(serviceSid)) {
        throw new Error("Parameter 'serviceSid' is not valid.");
    }
    const instance = ((sid) => instance.get(sid));
    instance.get = function get(sid) {
        return new UserContextImpl(version, serviceSid, sid);
    };
    instance._version = version;
    instance._solution = { serviceSid };
    instance._uri = `/Services/${serviceSid}/Users`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["identity"] === null || params["identity"] === undefined) {
            throw new Error("Required parameter \"params['identity']\" missing.");
        }
        let data = {};
        data["Identity"] = params["identity"];
        if (params["roleSid"] !== undefined)
            data["RoleSid"] = params["roleSid"];
        if (params["attributes"] !== undefined)
            data["Attributes"] = params["attributes"];
        if (params["friendlyName"] !== undefined)
            data["FriendlyName"] = params["friendlyName"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        if (params["xTwilioWebhookEnabled"] !== undefined)
            headers["X-Twilio-Webhook-Enabled"] = params["xTwilioWebhookEnabled"];
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new UserInstance(operationVersion, payload, this._solution.serviceSid));
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
        operationPromise = operationPromise.then((payload) => new UserPage(operationVersion, payload, this._solution));
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
        operationPromise = operationPromise.then((payload) => new UserPage(this._version, payload, this._solution));
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
exports.UserListInstance = UserListInstance;
class UserPage extends Page_1.default {
    /**
     * Initialize the UserPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version, response, solution) {
        super(version, response, solution);
    }
    /**
     * Build an instance of UserInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload) {
        return new UserInstance(this._version, payload, this._solution.serviceSid);
    }
    [util_1.inspect.custom](depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.UserPage = UserPage;

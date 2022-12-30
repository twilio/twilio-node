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
exports.ServicePage = exports.ServiceListInstance = exports.ServiceInstance = exports.ServiceContextImpl = void 0;
const util_1 = require("util");
const Page_1 = __importDefault(require("../../../base/Page"));
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
const utility_1 = require("../../../base/utility");
const binding_1 = require("./service/binding");
const channel_1 = require("./service/channel");
const role_1 = require("./service/role");
const user_1 = require("./service/user");
class ServiceContextImpl {
    constructor(_version, sid) {
        this._version = _version;
        if (!(0, utility_1.isValidPathParam)(sid)) {
            throw new Error("Parameter 'sid' is not valid.");
        }
        this._solution = { sid };
        this._uri = `/Services/${sid}`;
    }
    get bindings() {
        this._bindings =
            this._bindings || (0, binding_1.BindingListInstance)(this._version, this._solution.sid);
        return this._bindings;
    }
    get channels() {
        this._channels =
            this._channels || (0, channel_1.ChannelListInstance)(this._version, this._solution.sid);
        return this._channels;
    }
    get roles() {
        this._roles =
            this._roles || (0, role_1.RoleListInstance)(this._version, this._solution.sid);
        return this._roles;
    }
    get users() {
        this._users =
            this._users || (0, user_1.UserListInstance)(this._version, this._solution.sid);
        return this._users;
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
        if (params["defaultServiceRoleSid"] !== undefined)
            data["DefaultServiceRoleSid"] = params["defaultServiceRoleSid"];
        if (params["defaultChannelRoleSid"] !== undefined)
            data["DefaultChannelRoleSid"] = params["defaultChannelRoleSid"];
        if (params["defaultChannelCreatorRoleSid"] !== undefined)
            data["DefaultChannelCreatorRoleSid"] =
                params["defaultChannelCreatorRoleSid"];
        if (params["readStatusEnabled"] !== undefined)
            data["ReadStatusEnabled"] = serialize.bool(params["readStatusEnabled"]);
        if (params["reachabilityEnabled"] !== undefined)
            data["ReachabilityEnabled"] = serialize.bool(params["reachabilityEnabled"]);
        if (params["typingIndicatorTimeout"] !== undefined)
            data["TypingIndicatorTimeout"] = params["typingIndicatorTimeout"];
        if (params["consumptionReportInterval"] !== undefined)
            data["ConsumptionReportInterval"] = params["consumptionReportInterval"];
        if (params["notifications.newMessage.enabled"] !== undefined)
            data["Notifications.NewMessage.Enabled"] = serialize.bool(params["notifications.newMessage.enabled"]);
        if (params["notifications.newMessage.template"] !== undefined)
            data["Notifications.NewMessage.Template"] =
                params["notifications.newMessage.template"];
        if (params["notifications.newMessage.sound"] !== undefined)
            data["Notifications.NewMessage.Sound"] =
                params["notifications.newMessage.sound"];
        if (params["notifications.newMessage.badgeCountEnabled"] !== undefined)
            data["Notifications.NewMessage.BadgeCountEnabled"] = serialize.bool(params["notifications.newMessage.badgeCountEnabled"]);
        if (params["notifications.addedToChannel.enabled"] !== undefined)
            data["Notifications.AddedToChannel.Enabled"] = serialize.bool(params["notifications.addedToChannel.enabled"]);
        if (params["notifications.addedToChannel.template"] !== undefined)
            data["Notifications.AddedToChannel.Template"] =
                params["notifications.addedToChannel.template"];
        if (params["notifications.addedToChannel.sound"] !== undefined)
            data["Notifications.AddedToChannel.Sound"] =
                params["notifications.addedToChannel.sound"];
        if (params["notifications.removedFromChannel.enabled"] !== undefined)
            data["Notifications.RemovedFromChannel.Enabled"] = serialize.bool(params["notifications.removedFromChannel.enabled"]);
        if (params["notifications.removedFromChannel.template"] !== undefined)
            data["Notifications.RemovedFromChannel.Template"] =
                params["notifications.removedFromChannel.template"];
        if (params["notifications.removedFromChannel.sound"] !== undefined)
            data["Notifications.RemovedFromChannel.Sound"] =
                params["notifications.removedFromChannel.sound"];
        if (params["notifications.invitedToChannel.enabled"] !== undefined)
            data["Notifications.InvitedToChannel.Enabled"] = serialize.bool(params["notifications.invitedToChannel.enabled"]);
        if (params["notifications.invitedToChannel.template"] !== undefined)
            data["Notifications.InvitedToChannel.Template"] =
                params["notifications.invitedToChannel.template"];
        if (params["notifications.invitedToChannel.sound"] !== undefined)
            data["Notifications.InvitedToChannel.Sound"] =
                params["notifications.invitedToChannel.sound"];
        if (params["preWebhookUrl"] !== undefined)
            data["PreWebhookUrl"] = params["preWebhookUrl"];
        if (params["postWebhookUrl"] !== undefined)
            data["PostWebhookUrl"] = params["postWebhookUrl"];
        if (params["webhookMethod"] !== undefined)
            data["WebhookMethod"] = params["webhookMethod"];
        if (params["webhookFilters"] !== undefined)
            data["WebhookFilters"] = serialize.map(params["webhookFilters"], (e) => e);
        if (params["limits.channelMembers"] !== undefined)
            data["Limits.ChannelMembers"] = params["limits.channelMembers"];
        if (params["limits.userChannels"] !== undefined)
            data["Limits.UserChannels"] = params["limits.userChannels"];
        if (params["media.compatibilityMessage"] !== undefined)
            data["Media.CompatibilityMessage"] = params["media.compatibilityMessage"];
        if (params["preWebhookRetryCount"] !== undefined)
            data["PreWebhookRetryCount"] = params["preWebhookRetryCount"];
        if (params["postWebhookRetryCount"] !== undefined)
            data["PostWebhookRetryCount"] = params["postWebhookRetryCount"];
        if (params["notifications.logEnabled"] !== undefined)
            data["Notifications.LogEnabled"] = serialize.bool(params["notifications.logEnabled"]);
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
        this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
        this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
        this.defaultServiceRoleSid = payload.default_service_role_sid;
        this.defaultChannelRoleSid = payload.default_channel_role_sid;
        this.defaultChannelCreatorRoleSid =
            payload.default_channel_creator_role_sid;
        this.readStatusEnabled = payload.read_status_enabled;
        this.reachabilityEnabled = payload.reachability_enabled;
        this.typingIndicatorTimeout = deserialize.integer(payload.typing_indicator_timeout);
        this.consumptionReportInterval = deserialize.integer(payload.consumption_report_interval);
        this.limits = payload.limits;
        this.preWebhookUrl = payload.pre_webhook_url;
        this.postWebhookUrl = payload.post_webhook_url;
        this.webhookMethod = payload.webhook_method;
        this.webhookFilters = payload.webhook_filters;
        this.preWebhookRetryCount = deserialize.integer(payload.pre_webhook_retry_count);
        this.postWebhookRetryCount = deserialize.integer(payload.post_webhook_retry_count);
        this.notifications = payload.notifications;
        this.media = payload.media;
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
     * Access the bindings.
     */
    bindings() {
        return this._proxy.bindings;
    }
    /**
     * Access the channels.
     */
    channels() {
        return this._proxy.channels;
    }
    /**
     * Access the roles.
     */
    roles() {
        return this._proxy.roles;
    }
    /**
     * Access the users.
     */
    users() {
        return this._proxy.users;
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
            dateCreated: this.dateCreated,
            dateUpdated: this.dateUpdated,
            defaultServiceRoleSid: this.defaultServiceRoleSid,
            defaultChannelRoleSid: this.defaultChannelRoleSid,
            defaultChannelCreatorRoleSid: this.defaultChannelCreatorRoleSid,
            readStatusEnabled: this.readStatusEnabled,
            reachabilityEnabled: this.reachabilityEnabled,
            typingIndicatorTimeout: this.typingIndicatorTimeout,
            consumptionReportInterval: this.consumptionReportInterval,
            limits: this.limits,
            preWebhookUrl: this.preWebhookUrl,
            postWebhookUrl: this.postWebhookUrl,
            webhookMethod: this.webhookMethod,
            webhookFilters: this.webhookFilters,
            preWebhookRetryCount: this.preWebhookRetryCount,
            postWebhookRetryCount: this.postWebhookRetryCount,
            notifications: this.notifications,
            media: this.media,
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

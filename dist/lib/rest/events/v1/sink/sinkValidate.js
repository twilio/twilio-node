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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinkValidateInstance = exports.SinkValidateListInstance = void 0;
const util_1 = require("util");
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
const utility_1 = require("../../../../base/utility");
class SinkValidateListInstanceImpl {
}
function SinkValidateListInstance(version, sid) {
    if (!(0, utility_1.isValidPathParam)(sid)) {
        throw new Error("Parameter 'sid' is not valid.");
    }
    const instance = {};
    instance._version = version;
    instance._solution = { sid };
    instance._uri = `/Sinks/${sid}/Validate`;
    instance.create = function create(params, callback) {
        if (params === null || params === undefined) {
            throw new Error('Required parameter "params" missing.');
        }
        if (params["testId"] === null || params["testId"] === undefined) {
            throw new Error("Required parameter \"params['testId']\" missing.");
        }
        let data = {};
        data["TestId"] = params["testId"];
        const headers = {};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        let operationVersion = version, operationPromise = operationVersion.create({
            uri: this._uri,
            method: "post",
            data,
            headers,
        });
        operationPromise = operationPromise.then((payload) => new SinkValidateInstance(operationVersion, payload, this._solution.sid));
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
exports.SinkValidateListInstance = SinkValidateListInstance;
class SinkValidateInstance {
    constructor(_version, payload, sid) {
        this._version = _version;
        this.result = payload.result;
    }
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON() {
        return {
            result: this.result,
        };
    }
    [util_1.inspect.custom](_depth, options) {
        return (0, util_1.inspect)(this.toJSON(), options);
    }
}
exports.SinkValidateInstance = SinkValidateInstance;

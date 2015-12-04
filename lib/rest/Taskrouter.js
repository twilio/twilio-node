'use strict';

var _ = require('lodash');
var Domain = require('../base/domain').Domain;
var V1 = require('./taskrouter/V1').V1;


/**
 * Initialize taskrouter domain
 *
 * @constructor
 *
 * @params {Twilio} twilio - The twilio client
 *
 * @returns taskrouter domain
 */
function Taskrouter(twilio) {
  Domain.constructor.call(twilio, 'https://taskrouter.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Taskrouter.prototype, Domain.prototype);
Taskrouter.prototype.constructor = Taskrouter;

Object.defineProperty(Taskrouter.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1();
    return this._v1;
  },
});

Object.defineProperty(Taskrouter.prototype,
  'workspaces', {
  get: function() {
    return this.v1.workspaces;
  },
});

module.exports = Taskrouter;

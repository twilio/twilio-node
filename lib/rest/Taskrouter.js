'use strict';

var _ = require('lodash');
var Domain = require('../base/Domain');
var V1 = require('./taskrouter/V1');


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
  Domain.prototype.constructor.call(this, twilio, 'https://taskrouter.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Taskrouter.prototype, Domain.prototype);
Taskrouter.prototype.constructor = Taskrouter;

Object.defineProperty(Taskrouter.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1(this);
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

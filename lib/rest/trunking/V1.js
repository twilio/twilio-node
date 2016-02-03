'use strict';

var _ = require('lodash');
var TrunkList = require('./v1/trunk').TrunkList;
var Version = require('../../base/Version');


/**
 * Initialize the V1 version of Trunking
 *
 * @constructor
 *
 * @property {TrunkList} trunks - trunks resource
 *
 * @param {Trunking} domain - The twilio domain
 */
function V1(domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._trunks = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype,
  'trunks', {
  get: function() {
    this._trunks = this._trunks || new TrunkList(this);
    return this._trunks;
  },
});

module.exports = V1;

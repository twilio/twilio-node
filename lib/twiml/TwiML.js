'use strict';

var builder = require('xmlbuilder');  /* jshint ignore:line */

/* jshint ignore:start */
/**
 * Parent TwiML object
 */
/* jshint ignore:end */
function TwiML() {
  this.response = builder.create('Response').dec('1.0', 'UTF-8');
}

/* jshint ignore:start */
/**
 * Because child elements have properties named after their class names, we need
 * to translate that when we want to access that at the parent prototype level.
 * So this will translate something like Say to 'say' and VoiceResponse to
 * 'response'.
 *
 * It will also soft-cache it on the object so we don't end up doing string
 * comparisons. Save a few CPU cycles.
 */
/* jshint ignore:end */
TwiML.prototype._getPropertyName = function _getPropertyName() {
  if (this._propertyName === undefined) {
    var className = this.constructor.name.toLowerCase();

    if (className.substr(-8) === 'response') {
      className = 'response';
    }

    this._propertyName = className;
  }

  return this._propertyName;
}

/* jshint ignore:start */
/**
 * Convert to TwiML
 *
 * @returns TwiML XML
 */
/* jshint ignore:end */
TwiML.prototype.toString = function toString() {
  return this[this._getPropertyName()].end();
}

/* jshint ignore:start */
/**
 * Add text under the TwiML node
 *
 * @param {string} content
 */
/* jshint ignore:end */
TwiML.prototype.addText = function addText(content) {
  this[this._getPropertyName()].txt(content);
}

/* jshint ignore:start */
/**
 * Add an arbitrary tag as a child.
 *
 * @param {string} content
 */
/* jshint ignore:end */
TwiML.prototype.addChild = function addChild(tagName, attributes) {
  return new GenericNode(this[this._getPropertyName()].ele(tagName, attributes));
}

/* jshint ignore:start */
/**
 * Generic node
 */
/* jshint ignore:end */
function GenericNode(node) {
  // must match variable name for _getPropertyName
  this.genericnode = node;
}

// "Inherit" from TwiML
GenericNode.prototype = Object.create(TwiML.prototype);
GenericNode.prototype.constructor = GenericNode;

module.exports = TwiML;

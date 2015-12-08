'use strict';

var CompletedList = require('./conversation/completed');
var InProgressList = require('./conversation/inProgress');
var ListResource = require('../../../base/ListResource');

var ConversationList;
var ConversationInstance;
var ConversationContext;

/**
 * Initialize the ConversationList
 *
 * :param Version version: Version that contains the resource
 *
 * @returns ConversationList
 */
function ConversationList(version) {
  function ConversationListInstance(sid) {
    return this.get(sid);
  }

  ConversationListInstance._version = version;
  // Path Solution
  ConversationListInstance._solution = {};

  // Components
  ConversationListInstance._inProgress = undefined;
  ConversationListInstance._completed = undefined;

  Object.defineProperty(ConversationListInstance,
    'inProgress', {
    get: function inProgress() {
      if (!this._inProgress) {
        this._inProgress = new InProgressList(
          this._version
        );
      return this._inProgress;
    },
  });

  Object.defineProperty(ConversationListInstance,
    'completed', {
    get: function completed() {
      if (!this._completed) {
        this._completed = new CompletedList(
          this._version
        );
      return this._completed;
    },
  });

  /**
   * Constructs a ConversationContext
   *
   * :param sid - The sid
   *
   * @returns ConversationContext
   */
  function get(sid) {
    return new ConversationContext(
      this._version,
      sid
    );
  }

  return ConversationListInstance;
}

module.exports = {
  ConversationList: ConversationList,
  ConversationInstance: ConversationInstance,
  ConversationContext: ConversationContext
};

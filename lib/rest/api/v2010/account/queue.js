'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var MemberList = require('./queue/member');
var values = require('../../../../base/values');

/**
 * Initialize the QueueContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique queue Sid
 *
 * @returns {QueueContext}
 */
function QueueContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Queues/<% sid %>.json', this._solution);

  // Dependents
  this._members = undefined;
}

Object.defineProperty(QueueContext.prototype, 'members', {
  get: function() {
    if (!this._members) {
      this._members = new MemberList(
        this._version,
        this._solution.accountSid,
        this._solution.queueSid,
      );
    }
    return this._members;
  },
});

/**
 * Fetch a QueueInstance
 *
 * @returns Fetched QueueInstance
 */
QueueContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return QueueInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Update the QueueInstance
 *
 * @param string [opts.friendlyName] - A human readable description of the queue
 * @param string [opts.maxSize] - The max number of members allowed in the queue
 *
 * @returns Updated QueueInstance
 */
QueueContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Friendlyname': friendlyName,
    'Maxsize': maxSize,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return QueueInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Deletes the QueueInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
QueueContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};


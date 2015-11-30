'use strict';

var InstanceContext = require('../../../../base/InstanceContext');
var MediaList = require('./message/media');
var values = require('../../../../base/values');

/**
 * Initialize the MessageContext
 *
 * @param {Version} version: Version that contains the resource
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique message Sid
 *
 * @returns {MessageContext}
 */
function MessageContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/Messages/<% sid %>.json', this._solution);

  // Dependents
  this._media = undefined;
}

Object.defineProperty(MessageContext.prototype, 'media', {
  get: function() {
    if (!this._media) {
      this._media = new MediaList(
        this._version,
        this._solution.accountSid,
        this._solution.messageSid,
      );
    }
    return this._media;
  },
});

/**
 * Deletes the MessageInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
MessageContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};

/**
 * Fetch a MessageInstance
 *
 * @returns Fetched MessageInstance
 */
MessageContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = self._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return MessageInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};

/**
 * Update the MessageInstance
 *
 * @param string [opts.body] - The body
 *
 * @returns Updated MessageInstance
 */
MessageContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Body': body,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return MessageInstance(
    this._version,
    payload,
    accountSid=self._solution['accountSid'],
    sid=self._solution['sid'],
  );
};


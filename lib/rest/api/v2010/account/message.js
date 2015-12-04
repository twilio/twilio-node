'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var MediaList = require('./message/media');
var values = require('../../../../base/values');

/**
 * Initialize the MessageContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique message Sid
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
        this._solution.messageSid
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

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new MessageInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid,
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
    'Body': opts.body,
  });

  data.uri = this._uri;
  data.method = 'POST';

  var payload = this._version.update(data);

  return new MessageInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};


function MessageInstance() {
}

Object.defineProperty(MessageInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new MessageContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(MessageInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(MessageInstance.prototype, 'apiVersion', {
  get: function() {
    return this._properties.apiVersion;
  },
});

Object.defineProperty(MessageInstance.prototype, 'body', {
  get: function() {
    return this._properties.body;
  },
});

Object.defineProperty(MessageInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(MessageInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(MessageInstance.prototype, 'dateSent', {
  get: function() {
    return this._properties.dateSent;
  },
});

Object.defineProperty(MessageInstance.prototype, 'direction', {
  get: function() {
    return this._properties.direction;
  },
});

Object.defineProperty(MessageInstance.prototype, 'errorCode', {
  get: function() {
    return this._properties.errorCode;
  },
});

Object.defineProperty(MessageInstance.prototype, 'errorMessage', {
  get: function() {
    return this._properties.errorMessage;
  },
});

Object.defineProperty(MessageInstance.prototype, 'from', {
  get: function() {
    return this._properties.from;
  },
});

Object.defineProperty(MessageInstance.prototype, 'numMedia', {
  get: function() {
    return this._properties.numMedia;
  },
});

Object.defineProperty(MessageInstance.prototype, 'numSegments', {
  get: function() {
    return this._properties.numSegments;
  },
});

Object.defineProperty(MessageInstance.prototype, 'price', {
  get: function() {
    return this._properties.price;
  },
});

Object.defineProperty(MessageInstance.prototype, 'priceUnit', {
  get: function() {
    return this._properties.priceUnit;
  },
});

Object.defineProperty(MessageInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(MessageInstance.prototype, 'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(MessageInstance.prototype, 'subresourceUris', {
  get: function() {
    return this._properties.subresourceUris;
  },
});

Object.defineProperty(MessageInstance.prototype, 'to', {
  get: function() {
    return this._properties.to;
  },
});

Object.defineProperty(MessageInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the MessageContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique message Sid
 *
 * @returns {MessageContext}
 */
MessageInstance.prototype.MessageInstance = function MessageInstance(version,
    payload, accountSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid // jshint ignore:line,
      apiVersion: payload.api_version // jshint ignore:line,
      body: payload.body // jshint ignore:line,
      dateCreated: payload.date_created // jshint ignore:line,
      dateUpdated: payload.date_updated // jshint ignore:line,
      dateSent: payload.date_sent // jshint ignore:line,
      direction: payload.direction // jshint ignore:line,
      errorCode: payload.error_code // jshint ignore:line,
      errorMessage: payload.error_message // jshint ignore:line,
      from: payload.from // jshint ignore:line,
      numMedia: payload.num_media // jshint ignore:line,
      numSegments: payload.num_segments // jshint ignore:line,
      price: payload.price // jshint ignore:line,
      priceUnit: payload.price_unit // jshint ignore:line,
      sid: payload.sid // jshint ignore:line,
      status: payload.status // jshint ignore:line,
      subresourceUris: payload.subresource_uris // jshint ignore:line,
      to: payload.to // jshint ignore:line,
      uri: payload.uri // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Deletes the MessageInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
MessageInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

/**
 * Fetch a MessageInstance
 *
 * @returns Fetched MessageInstance
 */
MessageInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Update the MessageInstance
 *
 * @param string [opts.body] - The body
 *
 * @returns Updated MessageInstance
 */
MessageInstance.prototype.update = function update(self, opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Access the media
 *
 * @returns media
 */
MessageInstance.prototype.media = function media() {
  return this._proxy.media;
};


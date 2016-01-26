var moment = require('moment');
var serialize = require('../lib/base/serialize');

describe('serialize tests', function() {

  it('should be unable to serialize undefined date', function() {
    var actual = serialize.iso8601Date();
    expect(actual).toBeUndefined();
  });

  it('should serialize a date time to date', function() {
    var value = moment.utc('2016-01-15T03:04:05Z', 'YYYY-MM-DD[T]HH:mm:ss[Z]');
    var actual = serialize.iso8601Date(value);
    expect(actual).toEqual('2016-01-15');
  });

  it('should serialize a date', function() {
    var value = moment.utc('2016-01-15', 'YYYY-MM-DD');
    var actual = serialize.iso8601Date(value);
    expect(actual).toEqual('2016-01-15');
  });

  it('should be unable to serialize string date', function() {
    var actual = serialize.iso8601Date('2016-01-15');
    expect(actual).toEqual('2016-01-15');
  });

  it('should be unable to serialize undefined date time', function() {
    var actual = serialize.iso8601DateTime();
    expect(actual).toBeUndefined();
  });

  it('should serialize a date time to date time', function() {
    var value = moment.utc('2016-01-15T03:04:05Z', 'YYYY-MM-DD[T]HH:mm:ss[Z]');
    var actual = serialize.iso8601DateTime(value);
    expect(actual).toEqual('2016-01-15T03:04:05Z');
  });

  it('should serialize a date to date time', function() {
    var value = moment.utc('2016-01-15', 'YYYY-MM-DD');
    var actual = serialize.iso8601DateTime(value);
    expect(actual).toEqual('2016-01-15T00:00:00Z');
  });

  it('should be unable to serialize string date', function() {
    var actual = serialize.iso8601DateTime('2016-01-15T03:04:05Z');
    expect(actual).toEqual('2016-01-15T03:04:05Z');
  });

});
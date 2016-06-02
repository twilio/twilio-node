var moment = require('moment');
var serialize = require('../lib/base/serialize');

describe('serialize date tests', function() {

  it('should be unable to serialize undefined date', function() {
    var actual = serialize.iso8601Date();
    expect(actual).toBeUndefined();
  });

  it('should serialize a date time to date', function() {
    var value = new Date(Date.UTC(2016, 0, 15, 3, 4 , 5));
    var actual = serialize.iso8601Date(value);
    expect(actual).toEqual('2016-01-15');
  });

  it('should serialize a date', function() {
    var value = new Date(Date.UTC(2016, 0, 15));
    var actual = serialize.iso8601Date(value);
    expect(actual).toEqual('2016-01-15');
  });

  it('should be unable to serialize string date', function() {
    var actual = serialize.iso8601Date('2016-01-15');
    expect(actual).toEqual('2016-01-15');
  });

  it('should be unable to serialize string', function() {
    var actual = serialize.iso8601Date('hello');
    expect(actual).toEqual('hello');
  });

});

describe('serialize date time tests', function() {
  
  it('should be unable to serialize undefined date time', function() {
    var actual = serialize.iso8601DateTime();
    expect(actual).toBeUndefined();
  });

  it('should serialize a date time to date time', function() {
    var value = new Date(Date.UTC(2016, 0, 15, 3, 4 , 5));
    var actual = serialize.iso8601DateTime(value);
    expect(actual).toEqual('2016-01-15T03:04:05Z');
  });

  it('should serialize a date to date time', function() {
    var value = new Date(Date.UTC(2016, 0, 15));
    var actual = serialize.iso8601DateTime(value);
    expect(actual).toEqual('2016-01-15T00:00:00Z');
  });

  it('should be unable to serialize string date', function() {
    var actual = serialize.iso8601DateTime('2016-01-15T03:04:05Z');
    expect(actual).toEqual('2016-01-15T03:04:05Z');
  });

  it('should be unable to serialize string', function() {
    var actual = serialize.iso8601Date('hello');
    expect(actual).toEqual('hello');
  });

});

describe('serialize prefixed collapsible map', function() {

  it('should return {} for undefined', function() {
    var actual = serialize.prefixedCollapsibleMap(undefined, 'Prefix');
    expect(actual).toEqual({});
  });

  it('should return {} for string', function() {
    var actual = serialize.prefixedCollapsibleMap('foo', 'Prefix');
    expect(actual).toEqual({});
  });

  it('should return {} for a list', function() {
    var actual = serialize.prefixedCollapsibleMap([], 'Prefix');
    expect(actual).toEqual({});
  });

  it('should serialize a single key', function() {
    var actual = serialize.prefixedCollapsibleMap({
      foo: 'bar'
    }, 'Prefix');
    expect(actual).toEqual({
      'Prefix.foo': 'bar'
    });
  });

  it('should serialize a nested key', function() {
    var actual = serialize.prefixedCollapsibleMap({
      foo: {
        bar: 'baz'
      }
    }, 'Prefix');
    expect(actual).toEqual({
      'Prefix.foo.bar': 'baz'
    });
  });

  it('should serialize multiple keys', function() {
    var actual = serialize.prefixedCollapsibleMap({
      watson: {
        language: 'en',
        alice: 'bob'
      },
      foo: 'bar'
    }, 'Prefix');
    expect(actual).toEqual({
      'Prefix.watson.language': 'en',
      'Prefix.watson.alice': 'bob',
      'Prefix.foo': 'bar'
    });
  });

});

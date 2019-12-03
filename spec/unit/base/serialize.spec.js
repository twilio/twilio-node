var serialize = require('../../../lib/base/serialize');

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

describe('serialize object', function() {

  it('should return stringified object for object', function() {
    var actual = serialize.object({'twilio': 'the best'});
    expect(actual).toEqual('{"twilio":"the best"}');
  });

  it('should return stringified array for array', function() {
    var actual = serialize.object(['twilio', 'the best']);
    expect(actual).toEqual('["twilio","the best"]');
  });

  it('should return unmodified value for anything else', function() {
    var actual = serialize.object(1);
    expect(actual).toEqual(1);
  });

});

describe('serialize boolean', function() {

    it('should pass through a string', function() {
        var actual = serialize.bool('false');
        expect(actual).toEqual('false');

        var actual = serialize.bool('something');
        expect(actual).toEqual('something');
    });

    it('should convert a boolean to a string', function() {
        var actual = serialize.bool(false);
        expect(actual).toEqual('false');
    });

    it('should convert a boolean object to a string', function() {
        var actual = serialize.bool(new Boolean(false));
        expect(actual).toEqual('false');
    });

    it('should passthrough null and undefined', function() {
        var actual = serialize.bool(null);
        expect(actual).toEqual(null);

        var actual = serialize.bool(undefined);
        expect(actual).toEqual(undefined);
    });
});

describe('serialize list', function() {
    it('should apply transform to each element in the array', function() {
        var actual = serialize.map([1, 2, 3], function(e) { return e * 2; });
        expect(actual).toEqual([2,4,6]);
    });

    it('should passthrough other types', function() {
        var actual = serialize.map(undefined, function(e) { return e * 2; });
        expect(actual).toEqual(undefined);

        actual = serialize.map(null, function(e) { return e * 2; });
        expect(actual).toEqual(null);

        actual = serialize.map(1, function(e) { return e * 2; });
        expect(actual).toEqual(1);

        actual = serialize.map({someKey: "someVal"}, function(e) { return e * 2; });
        expect(actual).toEqual({someKey: "someVal"});

        actual = serialize.map("string", function(e) { return e * 2; });
        expect(actual).toEqual("string");
    });
});

var moment = require('moment');
var deserialize = require('../lib/base/deserialize');

describe('deserialize tests', function() {

  it('should parse date', function() {
    var actual = deserialize.iso8601Date('2016-01-15');
    var expected = moment.utc('2016-01-15', 'YYYY-MM-DD');
    expect(actual).toEqual(expected);
  });

  it('should return original when unable to parse date', function() {
    var actual = deserialize.iso8601Date('not-a-date');
    expect(actual).toEqual('not-a-date');
  });

  it('should parse date time', function() {
    var actual = deserialize.iso8601DateTime('2016-01-15T03:04:05Z');
    var expected = moment.utc('2016-01-15T03:04:05Z', 'YYYY-MM-DD[T]HH:mm:ss[Z]');
    expect(actual).toEqual(expected);
  });

  it('should return original when unable to parse datetime', function() {
    var actual = deserialize.iso8601DateTime('not-a-date');
    expect(actual).toEqual('not-a-date');
  });

  it('should parse rfc 2822 date time', function() {
    var actual = deserialize.rfc2822DateTime('Mon, 28 Dec 2015 21:04:44 +0000');
    var expected = moment.utc('Mon, 28 Dec 2015 21:04:44 +0000', 'ddd, DD MMM YYYY HH:mm:ss [+0000]');
    expect(actual).toEqual(expected);
  });

  it('should return original when unable to parse datetime', function() {
    var actual = deserialize.rfc2822DateTime('not-a-date');
    expect(actual).toEqual('not-a-date');
  });

});
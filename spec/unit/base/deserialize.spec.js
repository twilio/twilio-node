var deserialize = require('../../../lib/base/deserialize');

describe('deserialize date tests', function() {

  it('should parse date', function() {
    var actual = deserialize.iso8601Date('2016-01-15');
    var expected = new Date(Date.UTC(2016, 0, 15));
    expect(actual).toEqual(expected);
  });

  it('should return original when unable to parse date', function() {
    var actual = deserialize.iso8601Date('not-a-date');
    expect(actual).toEqual('not-a-date');
  });

});

describe('deserialize date time tests', function() {

  it('should parse date time', function() {
    var actual = deserialize.iso8601DateTime('2016-01-15T03:04:05Z');
    var expected = new Date(Date.UTC(2016, 0, 15, 3, 4, 5));
    expect(actual).toEqual(expected);
  });

  it('should return original when unable to parse datetime', function() {
    var actual = deserialize.iso8601DateTime('not-a-date');
    expect(actual).toEqual('not-a-date');
  });

});

describe('deserialize rfc2822 date time tests', function() {

  it('should parse rfc 2822 date time', function() {
    var actual = deserialize.rfc2822DateTime('Mon, 28 Dec 2015 21:04:44 +0000');
    var expected = new Date(Date.UTC(2015, 11, 28, 21, 4, 44));
    expect(actual).toEqual(expected);
  });

  it('should return original when unable to parse datetime', function() {
    var actual = deserialize.rfc2822DateTime('not-a-date');
    expect(actual).toEqual('not-a-date');
  });

});

describe('deserialize decimal tests', function() {

  it('should deserialize undefined', function() {
    var actual = deserialize.decimal();
    expect(actual).toBeUndefined();
  });

  it('should deserialize empty string', function() {
    var actual = deserialize.decimal('');
    expect(actual).toEqual('');
  });

  it('should deserialize zero string', function () {
    var actual = deserialize.decimal('0.000');
    expect(actual).toEqual(0.000);
  });

  it('should deserialize string', function() {
    var actual = deserialize.decimal('1.23');
    expect(actual).toEqual(1.23);
  });

  it('should deserialize negative string', function() {
    var actual = deserialize.decimal('-1.23');
    expect(actual).toEqual(-1.23);
  });

  it('should deserialize positive string', function() {
    var actual = deserialize.decimal('+1.23');
    expect(actual).toEqual(1.23);
  });

  it('should deserialize zero', function() {
    var actual = deserialize.decimal(0);
    expect(actual).toEqual(0);
  });

  it('should deserialize', function() {
    var actual = deserialize.decimal(1.23);
    expect(actual).toEqual(1.23);
  });

  it('should deserialize negative', function() {
    var actual = deserialize.decimal(-1.23);
    expect(actual).toEqual(-1.23);
  });

});

describe('deserialize integer tests', function() {

  it('should deserialize undefined', function() {
    var actual = deserialize.integer();
    expect(actual).toBeUndefined();
  });

  it('should deserialize empty string', function() {
    var actual = deserialize.integer('');
    expect(actual).toEqual('');
  });

  it('should deserialize zero string', function () {
    var actual = deserialize.integer('0');
    expect(actual).toEqual(0);
  });

  it('should deserialize string', function() {
    var actual = deserialize.integer('1');
    expect(actual).toEqual(1);
  });

  it('should deserialize negative string', function() {
    var actual = deserialize.integer('-12');
    expect(actual).toEqual(-12);
  });

  it('should deserialize positive string', function() {
    var actual = deserialize.integer('+123');
    expect(actual).toEqual(123);
  });

  it('should truncate float string', function() {
    var actual = deserialize.integer('1.23');
    expect(actual).toEqual(1);
  });

  it('should deserialize zero', function() {
    var actual = deserialize.integer(0);
    expect(actual).toEqual(0);
  });

  it('should deserialize', function() {
    var actual = deserialize.integer(123);
    expect(actual).toEqual(123);
  });

  it('should deserialize negative', function() {
    var actual = deserialize.integer(-123);
    expect(actual).toEqual(-123);
  });  

  it('should truncate float', function() {
    var actual = deserialize.integer(1.23);
    expect(actual).toEqual(1);
  });

});

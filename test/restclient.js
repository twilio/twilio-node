var assert = require("assert");
var twilio = require('../lib');

describe('RestClient', function(){
    var client = new twilio.RestClient('AC123', '123');

    describe('#processKeys()', function(){
        it('should convert underscored_keys to camelCase', function(){
            var source = {
                'foo_bar': 23,
                'bar_foo': 32
            };
            client.processKeys(source);

            assert.equal(23, source.foo_bar);
            assert.equal(23, source.fooBar);
            assert.equal(32, source.bar_foo);
            assert.equal(32, source.barFoo);
        });

        it('should process nested arrays', function(){
            var source = {
                'foo': [
                    {
                        'foo_number': 23,
                        'bar': [
                            {
                                'bar_number': 32
                            }
                        ]
                    }
                ]
            };
            client.processKeys(source);

            assert.equal(23, source.foo[0].fooNumber);
            assert.equal(32, source.foo[0].bar[0].barNumber);
        });

        var dateString = 'Wed, 21 Jan 2015 22:51:45 +0000';
        var dateObject = new Date(dateString);

        it('should parse and convert strings that look like dates', function(){
            var source = {
                'date': dateString,
            };
            client.processKeys(source);

            assert.equal('[object Date]', Object.prototype.toString.call(source.date));
            assert.equal(dateObject.getTime(), source.date.getTime());
        });

        it('should parse and convert dates with underscored_keys', function(){
            var source = {
                'date_sent': dateString,
            };
            client.processKeys(source);

            assert.equal('[object Date]', Object.prototype.toString.call(source.date_sent));
            assert.equal(dateObject.getTime(), source.date_sent.getTime());
        });

        it('should parse and convert dates with automaticallyCamelcasedKeys', function(){
            var source = {
                'date_sent': dateString,
            };
            client.processKeys(source);

            assert.equal('[object Date]', Object.prototype.toString.call(source.dateSent));
            assert.equal(dateObject.getTime(), source.dateSent.getTime());
        });

        it('should parse and convert dates with unexpected keys', function(){
            // random unexpected key!
            var key = ''+Math.random();
            var source = {};
            source[key] = dateString;
            client.processKeys(source);

            assert.equal('[object Date]', Object.prototype.toString.call(source[key]));
            assert.equal(dateObject.getTime(), source[key].getTime());
        });
    });
});

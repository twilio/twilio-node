var twilio = require('../index');

describe('The TwiML Response Object', function () {

    //lowercase the first character of a string
    function lowercaseFirst(str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }

    it('should generate an empty response when just the constructor is used', function() {
        var response = new twilio.TwimlResponse(),
            xml = response.toString();

        expect(xml).toBe('<?xml version="1.0" encoding="UTF-8"?><Response></Response>');
    });

    it('should support a flat document with all supported top-level nodes', function() {
        ['Say', 'Play', 'Gather', 'Record', 'Sms', 'Dial', 'Enqueue', 'Leave', 'Hangup', 'Redirect', 'Reject', 'Pause'].forEach(function(verb) {
            var response = new twilio.TwimlResponse();
            response[lowercaseFirst(verb)]('some text');

            var xml = response.toString();
            expect(xml).toBe('<?xml version="1.0" encoding="UTF-8"?><Response><'+verb+'>some text</'+verb+'></Response>');
        });
    });

    it('should support a flat document with say nodes, with attributes', function() {
        var response = new twilio.TwimlResponse();
        response.say('hello world', {
            voice:'woman',
            language:'en-gb'
        });
        response.play('foobar');

        var xml = response.toString(),
            test = [
                '<?xml version="1.0" encoding="UTF-8"?>',
                '<Response>',
                '<Say voice="woman" language="en-gb">hello world</Say>',
                '<Play>foobar</Play>',
                '</Response>'
            ].join('');

        expect(xml).toBe(test);
    });

    it('should support chaining syntax with supported verbs', function() {
        var resp = new twilio.TwimlResponse();

        resp.say('hola mundo', { voice:'woman', language:'es' })
            .play('foobar');

        var xml = resp.toString(),
            test = [
                '<?xml version="1.0" encoding="UTF-8"?>',
                '<Response>',
                '<Say voice="woman" language="es">hola mundo</Say>',
                '<Play>foobar</Play>',
                '</Response>'
            ].join('');

        expect(xml).toBe(test);
    });

    it('should allow for nested XML building with the Gather verb', function() {
        var resp = new twilio.TwimlResponse();

        resp.say('hola mundo', { voice:'woman', language:'es' })
            .gather({
                timeout:15,
                finishOnKey:'#'
            }, function() {
                this.play('foobar')
                    .say({
                        voice:'woman'
                    }, 'this is some hardcore nesting action');
            })
            .play('foobar');

        var xml = resp.toString(),
            test = [
                '<?xml version="1.0" encoding="UTF-8"?>',
                '<Response>',
                '<Say voice="woman" language="es">hola mundo</Say>',
                '<Gather timeout="15" finishOnKey="#">',
                '<Play>foobar</Play>',
                '<Say voice="woman">this is some hardcore nesting action</Say>',
                '</Gather>',
                '<Play>foobar</Play>',
                '</Response>'
            ].join('');

        expect(xml).toBe(test);
    });

    it('should ignore attempts at nesting for verbs that dont explicitly allow it', function() {
        var resp = new twilio.TwimlResponse();

        resp.say(function() {
            this.say('this should be totally ignored.');
        });

        var xml = resp.toString(),
            test = [
                '<?xml version="1.0" encoding="UTF-8"?>',
                '<Response>',
                '<Say></Say>',
                '</Response>'
            ].join('');

        expect(xml).toBe(test);
    });

    it('TwiML nodes that are not supported by the parent should be undefined', function() {
        var resp = new twilio.TwimlResponse();
        expect(resp.conference).toBeUndefined();

        resp.dial({
            timeout:30
        }, function() {
            expect(this.say).toBeUndefined();
        });
    });

    it('should allow for the parent node to be made explicit in the parent builder', function() {
        var resp = new twilio.TwimlResponse();

        resp.say('Your conference call is starting.', { voice:'woman', language:'en-gb' })
            .dial({
                action:'http://example.com/something.php'
            }, function(node) {
                node.conference('waitingRoom', {
                    beep:'false'
                });
            });

        var xml = resp.toString(),
            test = [
                '<?xml version="1.0" encoding="UTF-8"?>',
                '<Response>',
                '<Say voice="woman" language="en-gb">Your conference call is starting.</Say>',
                '<Dial action="http://example.com/something.php">',
                '<Conference beep="false">waitingRoom</Conference>',
                '</Dial>',
                '</Response>'
            ].join('');

        expect(xml).toBe(test);
    });
});
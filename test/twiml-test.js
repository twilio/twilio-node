var Say = require('../lib/twiml').Say,
    Dial = require('../lib/twiml').Dial,
    Gather = require('../lib/twiml').Gather;

function testOk(t, msg) {
    if(t) {
        console.log('OK: ' + msg);
    } else {
        console.log('!!: ' + msg + ' (Failed)');
    }
}

var p = new Say('Hello');
testOk(p.toString().match('Say'), 'Say.toString()');

p = new Say('Hello', {
    voice: 'man',
    language: 'en',
    loop: 1
});
console.log(p.toString());

var ok = false;
try {
    p = new Say('Should not work', {illegal: 'attribute'});
} catch(err) {
    ok = true;
    testOk(true, 'Disallow illegal attributes');
}

if(!ok) {
    testOk(false, 'Disallow illegal attributes');
}

ok = false;

p = new Say('Hey there');
j = new Gather(p, {action: 'process.php'});
console.log(j.toString());

var twiml = require('../lib/twiml');

function testOk(t, msg) {
    if(t) {
        console.log('OK: ' + msg);
    } else {
        console.log('!!: ' + msg + ' (Failed)');
    }
}

function testSay() {
    var ok = false,
        s = new twiml.Say('Hello, there');

    // Sanity
    testOk(s.toString().match(/<Say>[\s\S]*Hello, there[\s\S]*<\/Say>/),
        'Say sanity');

    // Throw on no body
    try {
        var n = new twiml.Say();
    } catch (err) {
        ok = true;
    }
    testOk(ok, 'Say throw on no body');

    // Shouldn't nest anything
    ok = false;
    try {
        s.append((new twiml.Say('Not gonna happen')));
    } catch (err) {
        try {
            s.append((new twiml.Dial('+18674451795')));
        } catch (err) {
            ok = true;
        }
    }
    testOk(ok, 'Say correctly does not accept nestables');
    
    // Adding attrs
    s.attr('test', 'ignored');
    testOk(s.toString().match('test="ignored"'), 'Say add attr');

    delete s;
};

function testPlay() {
    var ok = false,
        p = new twiml.Play('http://google.com/');

    // Sanity
    testOk(p.toString().match(/<Play>[\S\s]*google.com[\S\s]*<\/Play>/), 
        'Play sanity');

    // Throw on no body
    try {
        var n = new twiml.Play();
    } catch (err) {
        ok = true;
    }
    testOk(ok, 'Play throw on no body');

    // Adding attrs
    p.attr('test', 'ignored');
    testOk(p.toString().match('test="ignored"'), 'Play add attr');
};

function testGather() {
    var ok = false,
        g = new twiml.Gather();

    // Sanity
    testOk(g.toString().match(/<Gather\/>/), 'Gather sanity');

    // Append a play
    g.append(new twiml.Play('http://google.com'));
    testOk(g.toString().match(
        /<Gather>[\s\S]*<Play>[\s\S]*google[\s\S]*<\/Play>[\s\S]*<\/Gather>/),
        'Gather nests play');
    
    // Fail to append a Dial
    try {
        g.append(new twiml.Dial('+19058926737'));
    } catch (err) {
        ok = true;
    }
    testOk(ok, 'Gather does not append Dial');

    delete g;
};

function testRecord() {
    
};

function testSms() {
    
};

function testDial() {
    
};

function testNum() {
    
};

function testConference() {
    
};

function testHangup() {
    var ok = false,
        r = new twiml.Hangup();
    
    // Sanity
    testOk(r.toString() == '<Hangup/>', 'Hangup sanity');
    
    // With attributes passed into constructor
    r = new twiml.Hangup({test: 'aiight'});
    testOk(r.toString().match('test="aiight"'), 'Hangup with attributes');
    
    // Should throw nesting anything
    ok = false;
    try {
        r.append((new twiml.Say('Not gonna happen')));
    } catch (err) {
        try {
            r.append((new twiml.Dial('+18674451795')));
        } catch (err) {
            ok = true;
        }
    }
    testOk(ok, 'Hangup correctly does not accept nestables');
    
    r.attr('this', 'is ignored');
    testOk(r.toString().match('this="is ignored"'), 'Hangup adds attr');
    
    delete r;

};

function testRedirect() {
    var ok = false,
        r = new twiml.Redirect('http://google.com');
    
    // Sanity
    testOk(r.toString().match(/<Redirect>[\s\S]*google.com[\s\S]*<\/Redirect>/),
        'Redirect sanity');
    
    // Should throw on empty uri
    try {
        r = new twiml.Redirect();
    } catch (err) {
        ok = true;
    }
    testOk(ok, 'Redirect throws on empty body');

    // With attributes passed into constructor
    r = new twiml.Redirect('http://google.com', {test: 'aiight'});
    testOk(r.toString().match('test="aiight"'), 'Redirect with attributes');
    

    // Should throw nesting anything
    ok = false;
    try {
        r.append((new twiml.Say('Not gonna happen')));
    } catch (err) {
        try {
            r.append((new twiml.Dial('+18674451795')));
        } catch (err) {
            ok = true;
        }
    }
    testOk(ok, 'Redirect correctly does not accept nestables');
    
    r.attr('this', 'is ignored');
    testOk(r.toString().match('this="is ignored"'), 'Redirect adds attr');
    
    delete r;
};

function testReject() {
    var ok = false,
        r = new twiml.Reject();

    // Sanity
    testOk(r.toString() == '<Reject/>', 'Reject sanity');

    // Show throw nesting anything
    try {
        r.append((new twiml.Say('Not gonna happen')));
    } catch (err) {
        try {
            r.append((new twiml.Dial('+18674451795')));
        } catch (err) {
            ok = true;
        }
    }
    testOk(ok, 'Reject correctly does not accept nestables');
    
    // Adding an attribute
    r.attr('this', 'is ignored');
    testOk(r.toString().match('this="is ignored"'), 'Reject with attr');
    
    delete r;
};

function testResponse() {
    var r = new twiml.Response();
    r.append(new twiml.Say('Hello, there! Enter your ATM card PIN')).append(new twiml.Gather());
    console.log(r.toString());
};

testSay();
testPlay();
testGather();
testReject();
testSms();
testDial();
testNum();
testConference();
testHangup();
testRedirect();
testReject();
testResponse();

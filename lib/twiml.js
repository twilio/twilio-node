var sys = require('sys');

var Response = module.exports.Response = function Response() {
};

/*
 * call method for RegExp, such that we can not differentiate
 * between RegExp and function types for allowedAttrs
 */

function Verb(body, attrs) {
    this.body = body;
    this.attrs = attrs || {};
    this.allowedAttrs = this.allowedAttrs || {};

    this.verifyAttributes = function() {
        function isAllowed(a, val) {
            if(typeof a == 'function') {
                return a(val);
            }
            return a.match(val);
        }

        for(var key in this.attrs) {
            var allowed = this.allowedAttrs[key],
                toCheck = this.attrs[key];
            
            if(!allowed ||  !isAllowed(allowed, toCheck)) {
                throw new Error('Attribute "' + key + 
                    '" not allowed (value: ' + toCheck);
            }
        }
    }

    this.verifyBody = function() {
        if(typeof this.body == 'object' && this.body.length > 0) {
            for(var i = 0; i < this.body.length; i++) {
                var curNode = this.body[i];
                
                if(!this.nestable[curNode.type]) {
                    throw new Error('Can not nest ' + node.type + 
                        ' Verb in ' + this.type + 'verb');
                }
            }
        }
    };
    
    this.verifyAttributes();
    this.verifyBody();
}

Verb.prototype.append = function(node) {
    this.body.push(node);
};

Verb.prototype.attr = function(attr, value) {
    this.attrs[attr] = value;
    this.verifyAttributes();
};

Verb.prototype.toString = function(depth) {
    var stringified = '';

    depth = depth || 0;
    
    for(var i = 0; i < depth; i++) {
        stringified += '\t';
    }

    stringified += '<' + this.type;
    
    function quoteAttribute(attr) {
        if(attr[0] != '"') {
            return '"' + attr + '"';
        }
        return attr;
    }

    for(var key in this.attrs) {
        stringified += ' ' + key + '=' + quoteAttribute(this.attrs[key]);
    }
    
    if(this.body.length > 0) {
        stringified += '>\n';
        
        if(typeof this.body == 'string') {
            for(var i = 0; i < depth + 1; i++) {
                stringified += '\t';
            }
        
            stringified += this.body;
        } else {
            for(var i = 0; i < this.body.length; i++) {
                stringified += this.body[i].toString(depth + 1);
            }
        }
        stringified += '\n';
        for(var i = 0; i < depth; i++) {
            stringified += '\t';
        }
        stringified += '</' + this.type + '>';
    } else {
        // Self-clsoing tag
        stringified += '/>';
    }
    return stringified;
};

var Say = module.exports.Say = function Say(body, attrs) {
    if(!body) {
        throw new Error('Say requires a body arg.');
    }
    
    this.type = 'Say';
    this.nestable = {};
    this.allowedAttrs = {
        voice: /man|woman/i,
        language: /en|es|fr|de/i,
        loop: function(val) { 
            return parseInt(val) >= 0;
        }
    };
    
    Verb.call(this, body, attrs);
};

sys.inherits(Say, Verb);

var Play = module.exports.Play = function Play(body, attrs) {
    if(!body) {
        throw new Error('Play requires a body (uri to play)');
    }
    
    this.type = 'Play';
    this.nestable = {};
    this.allowedAttrs = {
        loop: function(val) {
            return parseInt(val) >= 0;
        }
    };

    Verb.call(this, body, attrs);
};

sys.inherits(Play, Verb);

var Gather = module.exports.Gather = function Gather(body, attrs) {
    this.type = 'Gather';
    this.nestable = {
        Play: true,
        Say: true,
        Pause: true
    };
    this.allowedAttrs = {
        action: /.*/,
        method: /GET|POST/,
        timeout: function(val) {
            return val > 0;
        },
        finishOnKey: /[0-9#*]?/,
        numDigits: function(val) {
            return val > 0;
        }
    };
    
    Verb.call(this, [body], attrs);
};

sys.inherits(Gather, Verb);

var Record = module.exports.Record = function Record(attrs) {
    this.type = 'Record';
    this.nestable = {};
    this.allowedAttrs = {
        action: /.*/,
        method: /GET|POST/,
        timeout: function(val) {
            return val >= 0;
        },
        finishOnKey: /[0-9*#]/,
        maxLength: function(val) {
            return val > 1;
        },
        transcribe: function(val) {
            return val === true || val === false;
        },
        transcribeCallback: /.*/,
        playBeep: function(val) {
            return val === true || val === false;
        }
    };

    Verb.call(this, null, attrs);
};

sys.inherits(Record, Verb);

var Sms = module.exports.Sms = function Sms(body, attrs) {
    if(!body) {
        throw new Error('Sms verb requires body argument');
    }

    this.type = 'Sms';
    this.nestable = {};
    // Todo: Regexp for phone numbers
    this.allowedAttrs = {
        to: /.*/,
        from: /.*/,
        action: /.*/,
        method: /GET|POST/,
        statusCallback: /.*/
    };
    
    Verb.call(this, body, attrs);
};

sys.inherits(Sms, Verb);

var Dial = module.exports.Dial = function Dial(body, attrs) {
    if(!body) {
        throw new Error('Dial verb requires body argument');
    }

    this.type = 'Dial';
    this.nestable = {
        Num: true,
        Conference: true
    };
    this.allowedAttrs = {
        action: /.*/,
        method: /GET|POST/,
        timeout: function(val) {
            return val >= 0;
        },
        hangupOnStar: function(val) {
            return val === true || val === false;
        },
        timeLimit: function(val) {
            return val > 0 && val < 14400;
        },
        callerId: /.*/
    };

    Verb.call(this, body, attrs);
};

sys.inherits(Dial, Verb);

var Num = module.exports.Num = function Num(body, attrs) {
    if(!body) {
        throw new Error('Num noun requires body argument');
    }

    this.type = 'Num';
    this.nestable = {};
    this.allowedAttrs = {
        sendDigits: /[0-9]+/,
        url: /.*/
    };
    
    Verb.call(this, body, attrs);
};

sys.inherits(Dial, Verb);

var Conference = module.exports.Conference = function Conference(body, attrs) {
    if(!body) {
        throw new Error('Conference noun requires body argument');
    }

    this.type = 'Conference';
    this.nestable = {};
    this.allowedAttrs = {
        muted: function(val) {
            return val === true || val === false;
        },
        beep: function(val) {
            return val === true || val === false;
        },
        startConferenceOnEnter: function(val) {
            return val === true || val === false;
        },
        endConferenceOnExit: function(val) {
            return val === true || val === false;
        },
        waitUrl: /.*/,
        waitMethod: /GET|POST/
    };
    
    Verb.call(this, body, attrs);
};

sys.inherits(Conference, Verb);

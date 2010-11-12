var sys = require('sys');

function Verb(body, attrs) {
    this.body = body || [];
    this.attrs = attrs || {};

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
    
    this.verifyBody();
}

Verb.prototype.append = function(node) {
    if(!this.body) {
        this.body = [];
    }

    this.body.push(node);
    this.verifyBody();
};

Verb.prototype.attr = function(attr, value) {
    this.attrs[attr] = value;
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
    
    Verb.call(this, body, attrs);
};

sys.inherits(Say, Verb);

var Play = module.exports.Play = function Play(body, attrs) {
    if(!body) {
        throw new Error('Play requires a body (uri to play)');
    }
    
    this.type = 'Play';
    this.nestable = {};

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
    
    if(typeof body == 'string') {
        throw new Error('Gather only accepts Play, Say, or Pause bodies');
    }

    Verb.call(this, body ? [body] : null, attrs);
    EventEmitter.call(this);

    if(!attrs.action) {
        // No action specified, let's emit events!
    }
};

sys.inherits(Gather, Verb);
sys.inherits(Gather, EventEmitter);

var Record = module.exports.Record = function Record(attrs) {
    this.type = 'Record';
    this.nestable = {};

    Verb.call(this, null, attrs);
};

sys.inherits(Record, Verb);

var Sms = module.exports.Sms = function Sms(body, attrs) {
    if(!body) {
        throw new Error('Sms verb requires body argument');
    }

    this.type = 'Sms';
    this.nestable = {};
    
    Verb.call(this, body, attrs);
};

sys.inherits(Sms, Verb);

var Dial = module.exports.Dial = function Dial(body, attrs) {
    this.type = 'Dial';
    this.nestable = {
        Number: true,
        Conference: true
    };

    Verb.call(this, body, attrs);
};

sys.inherits(Dial, Verb);

var Num = module.exports.Num = function Num(body, attrs) {
    if(!body) {
        throw new Error('Num noun requires body argument');
    }

    this.type = 'Number';
    this.nestable = {};
    
    Verb.call(this, body, attrs);
};

sys.inherits(Num, Verb);

var Conference = module.exports.Conference = function Conference(body, attrs) {
    if(!body) {
        throw new Error('Conference noun requires body argument');
    }

    this.type = 'Conference';
    this.nestable = {};
    
    Verb.call(this, body, attrs);
};

sys.inherits(Conference, Verb);

var Hangup = module.exports.Hangup = function Hangup(attrs) {
    this.type = 'Hangup';
    this.nestable = {};

    Verb.call(this, null, attrs);
};

sys.inherits(Hangup, Verb);

var Redirect = module.exports.Redirect = function Redirect(uri, attrs) {
    if(!uri) {
        throw new Error('Redirect requires a uri argument');
    }

    this.type = 'Redirect';
    this.nestable = {};
    
    Verb.call(this, uri, attrs);
};

sys.inherits(Redirect, Verb);

var Reject = module.exports.Reject = function Reject(attrs) {
    this.type = 'Reject';
    this.nestable = {};

    Verb.call(this, null, attrs);
};

sys.inherits(Reject, Verb);

var Pause = module.exports.Pause = function Pause(attrs) {
    this.type = 'Pause';
    this.nestable = {};

    Verb.call(this, null, attrs);
};

sys.inherits(Pause, Verb);

var Response = module.exports.Response = function Response(res) {
    if(!res) {
        throw new Error('Response requires res parameter');
    }

    this.res = res;
    this.body = [];
    
    this.append = function(node) {
        this.body.push(node);
        return this;
    };

    this.toString = function() {
        var str = '<?xml version="1.0" encoding="UTF-8"?>\n<Response>\n';
        for(var i = 0; i < this.body.length; i++) {
            str += this.body[i].toString(1) + '\n';
        }
        str += '</Response>\n';
        return str;
    };

    this.send = function() {
        this.res.send(this.toString());
    };
};

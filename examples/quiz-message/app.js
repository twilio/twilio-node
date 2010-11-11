var twiml = require('../../lib/twiml'),
    Client = require('../../lib/rest-client'),
    creds = require('./config').Credentials,
    twilio = new Client(creds.sid, creds.authToken, {hostname: creds.hostname}),
    questions = [
        {
            q: 'The population of Canada is roughly:', 
            correct: 2,
            answers: {
                1: '3 million', 
                2: '33 million',
                3: '10 million', 
                4: '20 million', 
                5: '300 million'
            }
        },
        {
            q: 'What relatively common ailment is conjunctivitus?',
            correct: 3,
            answers: {
                1: 'Cold sores',
                2: 'Carpal tunnel',
                3: 'Pink eye',
                4: 'Severed limb'
            }
        }
    ],
    choose = function(arr) {
        return arr[Math.floor(Math.random()*arr.length)];
    },
    currentWinnerMessage = '';

twilio.addIncomingCallCallback(creds.incoming, function(req, res) {
    var intro = new twiml.Say(
        'Welcome to Stephen\'s weird trivia game. It works like so: ' +
        'You will be asked a multiple choice question. Each answer is ' +
        'preceeded by a number. Choose an answer, and press that number on ' +
        'your phone. If you answer correctly, you get to replace the ' +
        'winner\'s message with your own. The last winner recorded this:'),
        q = choose(questions),
        question = new twiml.Say(q.q),
        playMessage = currentWinnerMessage ? new twiml.Play(currentWinnerMessage) : null,
        resp = new twiml.Response();

    resp.append(intro);
    
    if(playMessage) {
        resp.append(playMessage);
    }
    
    var gatherUri = twilio.getGenericCallbackUri(function(req, res) {
        if(req.body.Digits[0] == q.correct) {
            var correctResp = new twiml.Response();
            
            correctResp.append(new twiml.Say('You are correct! Way to go! ' + 
                'You may now record a message for new participants! ' + 
                'Press pound when you are done recording.'));
            
            var recordUri = twilio.getGenericCallbackUri(function(req, res) {
                currentWinnerMessage = req.body.RecordingUrl || 
                    currentWinnerMessage || '';
                var congrats = new twiml.Response();
                congrats.append(new twiml.Say('Thanks for playing!'));
                congrats.append(new twiml.Hangup());
                res.send(congrats.toString());
            });
            
            correctResp.append(new twiml.Record({
                action: recordUri,
                method: 'POST',
                maxLength: 10,
                transcribe: true,
                finishOnKey: '#'
            }));
            correctResp.append(new twiml.Say('Goodbye'));
            correctResp.append(new twiml.Hangup());
        } else {

        }
    });
    
    var questionText = q.q;
    var cur = 1;
    while(q.answers[cur]) {
        questionText += key + q.answers[key];
        cur++;
    }

    resp.append(new twiml.Gather(
        new twiml.Say(questionText),
        {
            action: gatherUri,
            method: 'POST',
            numDigits: 1
        }
    ));
    res.send(resp.toString());
});

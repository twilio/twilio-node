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
            q: 'The capital city of Ontario is:',
            correct: 3,
            answers: {
                1: 'Ottawa',
                2: 'Fonthill',
                3: 'Toronto',
                4: 'Windsor'
            }
        },
        {
            q: 'The capital city of Canada is:',
            correct: 2,
            answers: {
                1: 'New York',
                2: 'Ottawa',
                3: 'Vancouver',
                4: 'Toronto'
            }
        },
        {
            q: 'Canada\'s current prime minister is:',
            correct: 1,
            answers: {
                1: 'Stephen Harper',
                2: 'Stephen Walters',
                3: 'Jen Chretien',
                4: 'Margaret Atwood'
            }
        }
    ],
    choose = function(arr) {
        return arr[Math.floor(Math.random()*arr.length)];
    },
    currentWinnerMessage = '';

twilio.addIncomingCallCallback(creds.incoming, function(req, res) {
    var intro = new twiml.Say(
        'Welcome to Stephen\'s weird Canadian trivia game. It works like so. ' +
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
    
    function onRecord(req, res) {
        currentWinnerMessage = req.body.RecordingUrl || 
            currentWinnerMessage || '';
        var congrats = new twiml.Response();
        congrats.append(new twiml.Say('Thanks for playing!'));
        congrats.append(new twiml.Hangup());
        res.send(congrats.toString());
    };

    var onRecordUri = twilio.getGenericCallbackUri(onRecord);
    
    function onGather(req, res) {
        console.log('onGather');
        console.log('Digits: ' + req.body.Digits);
        if(req.body.Digits[0] == q.correct) {
            var correctResp = new twiml.Response();
            
            correctResp.append(new twiml.Say('You are correct! Way to go! ' + 
                'You may now record a message for new participants! ' + 
                'Press pound when you are done recording.'));
            
            correctResp.append(new twiml.Record({
                action: onRecordUri,
                method: 'POST',
                maxLength: 10,
                transcribe: true,
                finishOnKey: '#'
            }));
            correctResp.append(new twiml.Say('Goodbye'));
            correctResp.append(new twiml.Hangup());
            console.log(correctResp.toString());
            res.send(correctResp.toString());
        } else {
            var incorrectResp = new twiml.Response();

            incorrectResp.append(new twiml.Say('You are incorrect. I hope ' +
                'you feel really bad about this.'));
            incorrectResp.append(new twiml.Hangup());
            res.send(incorrectResp.toString());
        }
    };
        
    var onGatherUri = twilio.getGenericCallbackUri(onGather),
        questionText = 'Here is your question. ' + q.q + '. ',
        cur = 1;

    console.log('Record: ' + onRecordUri + ' Gather: ' + onGatherUri);

    while(q.answers[cur]) {
        questionText +=  cur + '. ' + q.answers[cur] + '. ';
        cur++;
    }

    resp.append(new twiml.Gather(
        new twiml.Say(questionText),
        {
            action: onGatherUri,
            method: 'POST',
            numDigits: 1
        }
    ));
    console.log(resp.toString());
    res.send(resp.toString());
});

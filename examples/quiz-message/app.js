var TwilioClient = require('../../lib/twilio').Client,
    Twiml = require('../../lib/twiml'),
    creds = require('./config').Credentials,
    client = new TwilioClient(creds.sid, creds.authToken, creds.hostname),
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

var phone = client.getIncomingPhoneNumber(creds.incoming);
phone.setup(function() {
    phone.on('incomingCall', function(reqParams, res) {
        var intro = new Twiml.Say(
            'Welcome to Stephen\'s weird Canadian trivia game. It works like so. ' +
            'You will be asked a multiple choice question. Each answer is ' +
            'preceeded by a number. Choose an answer, and press that number on ' +
            'your phone. If you answer correctly, you get to replace the ' +
            'winner\'s message with your own.'),
            q = choose(questions),
            question = new Twiml.Say(q.q),
            playMessage = currentWinnerMessage ? new Twiml.Play(currentWinnerMessage) : null;
        
        res.append(intro);

        if(!playMessage) {
            res.append(new Twiml.Say('Nobody has won yet.'));
        } else {
            res.append(new Twiml.Say('The previous winner said.')).
                append(playMessage);
        }
        
        res.append(new Twiml.Say('Your question is: ')).
            append(question);
        res.send();

    });
});
/*
twilio.addIncomingCallCallback(creds.incoming, function(req, res) {
    
    resp.append(intro);
    
    if(playMessage) {
        resp.append(playMessage);
    }
    
    function onRecord(req, res) {
        currentWinnerMessage = req.body.RecordingUrl || 
            currentWinnerMessage || '';
        var congrats = new Twiml.Response();
        congrats.append(new Twiml.Say('Thanks for playing!'));
        congrats.append(new Twiml.Hangup());
        res.send(congrats.toString());
    };

    var onRecordUri = twilio.getGenericCallbackUri(onRecord);
    
    function onGather(req, res) {
        console.log('onGather');
        console.log('Digits: ' + req.body.Digits);
        if(req.body.Digits[0] == q.correct) {
            var correctResp = new Twiml.Response();
            
            correctResp.append(new Twiml.Say('You are correct! Way to go! ' + 
                'You may now record a message for new participants! ' + 
                'Press pound when you are done recording.'));
            
            correctResp.append(new Twiml.Record({
                action: onRecordUri,
                method: 'POST',
                maxLength: 10,
                transcribe: true,
                finishOnKey: '#'
            }));
            correctResp.append(new Twiml.Say('Goodbye'));
            correctResp.append(new Twiml.Hangup());
            console.log(correctResp.toString());
            res.send(correctResp.toString());
        } else {
            var incorrectResp = new Twiml.Response();

            incorrectResp.append(new Twiml.Say('You are incorrect. I hope ' +
                'you feel really bad about this.'));
            incorrectResp.append(new Twiml.Hangup());
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

    resp.append(new Twiml.Gather(
        new Twiml.Say(questionText),
        {
            action: onGatherUri,
            method: 'POST',
            numDigits: 1
        }
    ));
    console.log(resp.toString());
    res.send(resp.toString());
});*/

var TwilioClient = require('../../lib').Client,
    Twiml = require('../../lib').Twiml,
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

var phone = client.getPhoneNumber(creds.incoming);

phone.setup(function() {
    phone.on('incomingCall', function(reqParams, res) {
        var intro = new Twiml.Say(
            'Welcome to Stephen\'s weird Canadian trivia game. It works like so. ' +
            'You will be asked a multiple choice question. Each answer is ' +
            'preceeded by a number. Choose an answer, and press that number on ' +
            'your phone. If you answer correctly, you get to replace the ' +
            'winner\'s message with your own.'),
            q = choose(questions),
            playMessage = currentWinnerMessage ? new Twiml.Play(currentWinnerMessage) : null;
        
        res.append(intro);

        if(!playMessage) {
            res.append(new Twiml.Say('Nobody has won yet.'));
        } else {
            res.append(new Twiml.Say('The previous winner said.')).
                append(playMessage);
        }
        
        // Build the question text
        var questionText = 'Here is your question. ' + q.q + '. ',
            cur = 1;

        // Add the multiple choice answers
        while(q.answers[cur]) {
            questionText +=  cur + '. ' + q.answers[cur] + '. ';
            cur++;
        }

        var question = new Twiml.Say(questionText),
            getAnswer = new Twiml.Gather(null, {numDigits: 1});

        getAnswer.append(question);

        getAnswer.on('gathered', function(reqParams, resp) {
            if(reqParams.Digits == q.correct) {
                // Woohoo, correct
                resp.append(new Twiml.Say('That is correct! You are brilliant! ' +
                    'You may now record a message for the next participant. ' +
                    'Press pound when you are done recording.'));
                
                var rec = new Twiml.Record({maxLength: 10, finishOnKey: '#'});
                
                rec.on('recorded', function(reqParams, resp) {
                    // Save the uri
                    currentWinnerMessage = reqParams.RecordingUrl;

                    resp.append(new Twiml.Say('Thanks for playing. Goodbye')).
                        append(new Twiml.Hangup());
                    resp.send();
                });

                resp.append(rec);
            } else {
                resp.append(new Twiml.Say('That is incorrect! Brush up on ' +
                    'your Canadeeyawna! Thanks for playing. Goodbye')).
                    append(new Twiml.Hangup());
            }
            resp.send();
        });
        res.append(getAnswer);
        console.log(res.toString());
        res.send();

    });
});

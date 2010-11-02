var Client = require('../lib').Client,
    credentials = require('./config').Credentials,
    errors = 0,
    passes = 0;

function debug(msg) {
    console.log(msg);
}

function ok(msg) {
    debug('OK: ' + msg);
    passes += 1;
}

function error(msg) {
    debug('Error!: ' + msg);
    error += 1;
}

function t(test, expected, postTest) {
    console.log('Running test: ' + test);

    return function(response) {
        for(var key in expected) {
            var r = response[key],
                e = expected[key];
            if(!r) {
                error(test + ': Did not get expected response parameter: ' + 
                      key + '. Full response: ' + JSON.stringify(response));
            } else if(!r.match(e)) {
                error(test + ': Expected ' + key + ' => ' + e +
                      ' but instead got ' + r);
            } else {
                ok(test + ': Got expected response parameter: ' + key);
            }
        }
        typeof postTest == 'function' && postTest(response);
    };
}

var c = new Client(credentials.sid, credentials.authToken, {hostname: credentials.hostname});

//c.getAccountInfo(r('Get account credentials'));
c.getAccountInfo(t('getAccountInfo', 
    {
        sid: /AC.*/,
        date_created: /.*/,
        date_updated: /.*/,
        friendly_name: /.*/,
        status: /Active/,
        auth_token: /.*/,
        uri: /.*/
    }
));

c.updateAccountInfo({FriendlyName: 'sjwalter-nodejs'}, t('updateAccountInfo', 
    {
        sid: /AC.*/,
        date_created: /.*/,
        date_updated: /.*/,
        friendly_name: /sjwalter-nodejs/,
        status: /Active/,
        auth_token: /.*/,
        uri: /.*/
    }
));

var smsList;
c.getSmsList(null, t('getSmsList',
    {
        uri: /.*/,
    },
    function(response) {
        // Scrape an SMS SID from the response
        if(response.sms_messages && response.sms_messages.length > 0) {
            var smsSid = response.sms_messages[0].sid;
            c.getSmsInstance(smsSid, t('getSmsInstance',
                {
                    account_sid: /AC.*/,
                    api_version: /.*/,
                    body: /.*/,
                    date_created: /.*/,
                    date_sent: /.*/,
                    date_updated: /.*/,
                    direction: /.*/,
                    from: /.*/,
                    price: /.*/,
                    sid: smsSid,
                    status: /.*/,
                    to: /.*/,
                    uri: /.*/
                }
            ));
        } else {
            error('Can not test SMS instance due to 0 sms in list');
        }
    }
));

c.getAvailableLocalNumbers('CA', null, t('getAvailableLocalNumbers', {
    uri: /.*/
}, function(res) {
    if(res.available_phone_numbers && res.available_phone_numbers.length > 0) {
        ok('Available phone numbers is non-zero');
    }
}));

c.getAvailableTollFreeNumbers('US', null, t('getAvailableTollFreeNumbers', {
    uri: /.*/
}, function(res) {
    if(res.available_phone_numbers && res.available_phone_numbers.length > 0) {
        ok('Available phone numbers is non-zero');
    }
}));

c.getOutgoingCallerIdList(null, t('getOutgoingCallerIdList', {
    uri: /.*/
}, function(res) {
    if(res.outgoing_caller_ids && res.outgoing_caller_ids.length > 0) {
        var ocSid = res.outgoing_caller_ids[0].sid;
        c.getOutgoingCallerId(ocSid, t('getOutgoingCallerId', 
            {
                sid: ocSid,
                date_created: /.*/,
                date_updated: /.*/,
                friendly_name: /.*/,
                account_sid: /AC.*/,
                phone_number: /.*/,
                uri: /.*/
            }
        ));
        c.updateOutgoingCallerId(ocSid, {FriendlyName: 'sjwalter-nodejs-test'},
            t('updateOutgoingCallerId', 
                {
                    friendly_name: 'sjwalter-node-js-test'
                }
            )
        );
    } else {
        error('Unable to test outgoing caller id instance. ' +
              'There are no outgoing caller ids associated with this account'
        );
    }
}));



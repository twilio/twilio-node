var Client = require('../lib/rest-client');
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

c.getIncomingNumbers(null, t('getIncomingNumbers', {
    uri: /.*/
}, function(res) {
    if(res.incoming_phone_numbers && res.incoming_phone_numbers.length > 0) {
        var inSid = res.incoming_phone_numbers[0].sid;
        c.getIncomingNumber(inSid, t('getIncomingNumber',
            {
                sid: inSid,
                account_sid: /AC.*/
            }
        ));
        c.updateIncomingNumber(inSid, {FriendlyName: 'sjwalter-node-test'}, t(
            'updateIncomingNumber',
            {
                friendly_name: 'sjwalter-node-test'
            }
        ));
    } else {
        error('Unable to test incoming phone number instance. ' +
              'There are no incoming phone numbers associated with this account'
        );
    }
}));

c.getCallList(t('getCallList', {
    uri: /.*/
}, function(res) {
    if(res.calls && res.calls.length > 0) {
        c.getCallInstance(res.calls[0].sid, null, t('getCallInstance',
            {
                sid: res.calls[0].sid,
                to: /.*/,
                from: /.*/,
                direction: /.*/
            })
        );
    }
}));

c.getRecordingList(null, t('getRecordingList', {
    uri: /.*/
}));

c.getNotificationList(null, t('getNotificationList', {
    uri: /.*/
}, function(res) {
    if(res.notifications && res.notifications.length > 0) {
        c.getNotificationInstance(res.notifications[0].sid, t('getNotificationInstance', {
            sid: res.notifications[0].sid,
            account_sid: /AC.*/,
            log: /.*/,
            request_method: /.*/
        }));
    }
}));

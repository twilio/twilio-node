var twilio = require('../index');

describe('The Twilio REST Client Calls resource', function () {
    var accountSid = 'AC123';
    var instanceSid = 'CA123';
    var client = new twilio.RestClient(accountSid, '123');

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('initiates a call from a purchased twilio number', function() {
        client.calls.create({
            to:'+14158675309',
            from:'+16517779311',
            url:'https://demo.twilio.com/welcome/voice'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Calls',
            method:'POST',
            form:{
                To:'+14158675309',
                From:'+16517779311',
                Url:'https://demo.twilio.com/welcome/voice'
            }
        }, undefined);
    });

    it('gets information about a specific call', function() {
        client.calls('CA123').get();
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Calls/CA123',
            method:'GET',
            qs:{}
        }, undefined);
    });

    it('uses shorthand to make a call', function() {
        client.makeCall({
            to:'+14158675309',
            from:'+16517779311',
            url:'https://demo.twilio.com/welcome/voice'
        });
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Calls',
            method:'POST',
            form:{
                To:'+14158675309',
                From:'+16517779311',
                Url:'https://demo.twilio.com/welcome/voice'
            }
        }, undefined);
    });

    it('gets a list of calls for a specific number', function() {
        var callback = function(err, data) {
            expect(data.total).not.toBeDefined();
        };
        client.calls.list({
            from:'+14158675309'
        }, callback);
        expect(client.request).toHaveBeenCalledWith({
            url:'/Accounts/AC123/Calls',
            method:'GET',
            qs:{
                From:'+14158675309'
            },
        }, callback);
    });

    it('can create call feedback', function() {
        client.calls(instanceSid).feedback.create({
            qualityScore:3,
            issue:['imperfect-audio', 'dropped-call']
        });
        expect(client.request).toHaveBeenCalled();
        expect(client.request).toHaveBeenCalledWith({
            'url': '/Accounts/' + accountSid + '/Calls/' + instanceSid + '/Feedback',
            'method': 'POST',
            'form': {
                'QualityScore': 3,
                'Issue': ['imperfect-audio', 'dropped-call']
            }
        }, undefined);
    });

    it('can get call feedback', function() {
        client.calls(instanceSid).feedback.get();
        expect(client.request).toHaveBeenCalled();
        expect(client.request).toHaveBeenCalledWith({
            'url': '/Accounts/' + accountSid + '/Calls/' + instanceSid + '/Feedback',
            'method': 'GET',
            'qs': {}
        }, undefined);
    });

    it('can delete call feedback', function() {
        client.calls(instanceSid).feedback.delete();
        expect(client.request).toHaveBeenCalled();
        expect(client.request).toHaveBeenCalledWith({
            'url': '/Accounts/' + accountSid + '/Calls/' + instanceSid + '/Feedback',
            'method': 'DELETE',
            'form': {}
        }, undefined);
    });

    it('can create a call feedback summary', function () {
        client.calls.feedbackSummary.create({
            startDate: '2014-01-01',
            endDate: '2014-01-31',
            includeSubaccounts: true,
            statusCallback: 'http://www.example.com/feedback'
        });
        expect(client.request).toHaveBeenCalled();
        expect(client.request).toHaveBeenCalledWith({
            'url': '/Accounts/' + accountSid + '/Calls/FeedbackSummary',
            'method': 'POST',
            'form': {
                'StartDate': '2014-01-01',
                'EndDate': '2014-01-31',
                'IncludeSubaccounts': true,
                'StatusCallback': 'http://www.example.com/feedback'
            }
        }, undefined);
    });

    it('can get a call feedback summary', function () {
        client.calls.feedbackSummary('FS123').get();
        expect(client.request).toHaveBeenCalled();
        expect(client.request).toHaveBeenCalledWith({
            'url': '/Accounts/' + accountSid + '/Calls/FeedbackSummary/FS123',
            'method': 'GET',
            'qs': {}
        }, undefined);
    });

    it('can delete a call feedback summary', function () {
        client.calls.feedbackSummary('FS123').delete();
        expect(client.request).toHaveBeenCalled();
        expect(client.request).toHaveBeenCalledWith({
            'url': '/Accounts/' + accountSid + '/Calls/FeedbackSummary/FS123',
            'method': 'DELETE',
            'form': {}
        }, undefined);
    });
});

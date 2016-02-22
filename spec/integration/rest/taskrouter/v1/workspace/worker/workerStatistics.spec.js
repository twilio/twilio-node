'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../../holodeck');
var Request = require('../../../../../../../lib/http/request');
var Response = require('../../../../../../../lib/http/response');
var Twilio = require('../../../../../../../lib');


var client;
var holodeck;

describe('WorkerStatistics', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.taskrouter.v1.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .workers('WKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .statistics().fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        workspaceSid: 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        workerSid: 'WKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/Workers/<%= workerSid %>/Statistics')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'cumulative': {
              'activity_durations': [
                  {
                      'avg': 0.0,
                      'friendly_name': '80fa2beb-3a05-11e5-8fc8-98e0d9a1eb73',
                      'max': 0,
                      'min': 0,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'total': 0
                  },
                  {
                      'avg': 0.0,
                      'friendly_name': '817ca1c5-3a05-11e5-9292-98e0d9a1eb73',
                      'max': 0,
                      'min': 0,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'total': 0
                  },
                  {
                      'avg': 0.0,
                      'friendly_name': 'Busy',
                      'max': 0,
                      'min': 0,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'total': 0
                  },
                  {
                      'avg': 0.0,
                      'friendly_name': 'Idle',
                      'max': 0,
                      'min': 0,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'total': 0
                  },
                  {
                      'avg': 0.0,
                      'friendly_name': 'Offline',
                      'max': 0,
                      'min': 0,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'total': 0
                  },
                  {
                      'avg': 0.0,
                      'friendly_name': 'Reserved',
                      'max': 0,
                      'min': 0,
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'total': 0
                  }
              ],
              'end_time': '2015-08-18T16:36:19Z',
              'reservations_accepted': 0,
              'reservations_canceled': 0,
              'reservations_created': 0,
              'reservations_rejected': 0,
              'reservations_rescinded': 0,
              'reservations_timed_out': 0,
              'start_time': '2015-08-18T16:21:19Z',
              'tasks_assigned': 0
          },
          'worker_sid': 'WKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .workers('WKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .statistics().fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});


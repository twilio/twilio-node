'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('WorkspaceStatistics', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, ''));

      var promise = client.taskrouter.v1.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .statistics().fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(Error.prototype.constructor);
      });
      promise.done();

      var solution = {
        workspaceSid: 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/Statistics')(solution);

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
              'avg_task_acceptance_time': 0.0,
              'end_time': '2015-08-18T17:03:13Z',
              'reservations_accepted': 0,
              'reservations_canceled': 0,
              'reservations_created': 0,
              'reservations_rejected': 0,
              'reservations_rescinded': 0,
              'reservations_timed_out': 0,
              'start_time': '2015-08-18T16:48:13Z',
              'tasks_canceled': 0,
              'tasks_created': 0,
              'tasks_deleted': 0,
              'tasks_moved': 0,
              'tasks_timed_out_in_workflow': 0
          },
          'realtime': {
              'activity_statistics': [
                  {
                      'friendly_name': 'Offline',
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'workers': 1
                  },
                  {
                      'friendly_name': 'Idle',
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'workers': 0
                  },
                  {
                      'friendly_name': '80fa2beb-3a05-11e5-8fc8-98e0d9a1eb73',
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'workers': 0
                  },
                  {
                      'friendly_name': 'Reserved',
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'workers': 0
                  },
                  {
                      'friendly_name': 'Busy',
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'workers': 0
                  },
                  {
                      'friendly_name': '817ca1c5-3a05-11e5-9292-98e0d9a1eb73',
                      'sid': 'WAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'workers': 0
                  }
              ],
              'longest_task_waiting_age': 0,
              'longest_task_waiting_sid': null,
              'tasks_by_status': {
                  'assigned': 0,
                  'pending': 0,
                  'reserved': 0
              },
              'total_tasks': 0,
              'total_workers': 1
          },
          'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
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


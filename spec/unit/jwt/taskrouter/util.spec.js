var _ = require('lodash');
var util = require('../../../../index').jwt.taskrouter.util;

describe('util', function() {

  describe('url utils', function() {

    var WORKSPACE_SID = "WS123";
    var WORKER_SID = "WK123";
    var ACTIVITY_SID = "AC123";
    var TASK_SID = "TK123";
    var TASK_QUEUE_SID = "TQ123";
    var RESERVATION_SID = "WR123";

    it('should generate workspaces url', function() {
      expect(util.workspacesUrl()).toEqual(
        'https://taskrouter.twilio.com/v1/Workspaces'
      );
    });

    it('should generate all workspaces url', function() {
      expect(util.workspacesUrl('**')).toEqual(
        'https://taskrouter.twilio.com/v1/Workspaces/**'
      );
    });

    it('should generate workspace url', function() {
      expect(util.workspacesUrl(WORKSPACE_SID)).toEqual(
        _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>')({
          workspaceSid: WORKSPACE_SID
        })
      );
    });

    it('should generate task queues url', function() {
      expect(util.taskQueuesUrl(WORKSPACE_SID)).toEqual(
        _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/TaskQueues')({
          workspaceSid: WORKSPACE_SID
        })
      );
    });

    it('should generate all task queues url', function() {
      expect(util.taskQueuesUrl(WORKSPACE_SID, '**')).toEqual(
        _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/TaskQueues/**')({
          workspaceSid: WORKSPACE_SID
        })
      );
    });

    it('should generate task queue url', function() {
      expect(util.taskQueuesUrl(WORKSPACE_SID, TASK_QUEUE_SID)).toEqual(
        _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/TaskQueues/<%= taskQueueSid %>')({
          workspaceSid: WORKSPACE_SID,
          taskQueueSid: TASK_QUEUE_SID
        })
      );
    });

    it('should generate tasks url', function() {
      expect(util.tasksUrl(WORKSPACE_SID)).toEqual(
        _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/Tasks')({
          workspaceSid: WORKSPACE_SID
        })
      );
    });

    it('should generate all tasks url', function() {
      expect(util.tasksUrl(WORKSPACE_SID, '**')).toEqual(
        _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/Tasks/**')({
          workspaceSid: WORKSPACE_SID
        })
      );
    });

    it('should generate task url', function() {
      expect(util.tasksUrl(WORKSPACE_SID, TASK_SID)).toEqual(
        _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/Tasks/<%= taskSid %>')({
          workspaceSid: WORKSPACE_SID,
          taskSid: TASK_SID
        })
      );
    });

    it('should generate activities url', function() {
      expect(util.activitiesUrl(WORKSPACE_SID)).toEqual(
        _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/Activities')({
          workspaceSid: WORKSPACE_SID
        })
      );
    });

    it('should generate all activities url', function() {
      expect(util.activitiesUrl(WORKSPACE_SID, '**')).toEqual(
        _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/Activities/**')({
          workspaceSid: WORKSPACE_SID
        })
      );
    });

    it('should generate activity url', function() {
      expect(util.activitiesUrl(WORKSPACE_SID, ACTIVITY_SID)).toEqual(
        _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/Activities/<%= activitySid %>')({
          workspaceSid: WORKSPACE_SID,
          activitySid: ACTIVITY_SID
        })
      );
    });

    it('should generate workers url', function() {
      expect(util.workersUrl(WORKSPACE_SID)).toEqual(
        _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/Workers')({
          workspaceSid: WORKSPACE_SID
        })
      );
    });

    it('should generate all workers url', function() {
      expect(util.workersUrl(WORKSPACE_SID, '**')).toEqual(
        _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/Workers/**')({
          workspaceSid: WORKSPACE_SID
        })
      );
    });

    it('should generate worker url', function() {
      expect(util.workersUrl(WORKSPACE_SID, WORKER_SID)).toEqual(
        _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/Workers/<%= workerSid %>')({
          workspaceSid: WORKSPACE_SID,
          workerSid: WORKER_SID
        })
      );
    });

    it('should generate reservations url', function() {
      expect(util.reservationsUrl(WORKSPACE_SID, WORKER_SID)).toEqual(
        _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/Workers/<%= workerSid %>/Reservations')({
          workspaceSid: WORKSPACE_SID,
          workerSid: WORKER_SID
        })
      );
    });

    it('should generate all reservations url', function() {
      expect(util.reservationsUrl(WORKSPACE_SID, WORKER_SID, '**')).toEqual(
        _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/Workers/<%= workerSid %>/Reservations/**')({
          workspaceSid: WORKSPACE_SID,
          workerSid: WORKER_SID
        })
      );
    });

    it('should generate reservations url', function() {
      expect(util.reservationsUrl(WORKSPACE_SID, WORKER_SID, RESERVATION_SID)).toEqual(
        _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/Workers/<%= workerSid %>/Reservations/<%= reservationSid %>')({
          workspaceSid: WORKSPACE_SID,
          workerSid: WORKER_SID,
          reservationSid: RESERVATION_SID
        })
      );
    });

  });

});
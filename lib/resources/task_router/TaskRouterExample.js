// require WorkflowBuilder module
var WorkflowBuilder = require('./WorkflowBuilder');
// require twilio
var twilio = require('../../../index.js');

// create the workflow and get the config JSON
var getWorkflowConfigJSON = function() {
    // set Qs
    salesQ = "WQe1ede0e33ca944bc752ac8d5a7fc719c";
    marketingQ = "WQb7a10a1eae97da6078ccedf18c8774ba";
    supportQ = "WQ11c9c9677c731bc0dc235f2f945d5d5f";
    defaultQ = "WQa3f2827c37cd1babd74f485abc82b8e5";

    // sales
    var salesTargetsList = [];
    var salesTarget = new WorkflowBuilder.WorkflowRuleTarget(salesQ, null, null, null);
    salesTargetsList.push(salesTarget);
    var salesRule = new WorkflowBuilder.WorkflowRule("type == \"sales\"", salesTargetsList);

    // marketing
    var marketingTargetsList = [];
    var marketingTarget = new WorkflowBuilder.WorkflowRuleTarget(marketingQ, null, null, null);
    marketingTargetsList.push(marketingTarget);
    var marketingRule = new WorkflowBuilder.WorkflowRule("type == \"marketing\"", marketingTargetsList);

    // support
    var supportTargetsList = [];
    var supportTarget = new WorkflowBuilder.WorkflowRuleTarget(supportQ, null, null, null);
    supportTargetsList.push(supportTarget);
    var supportRule = new WorkflowBuilder.WorkflowRule("type == \"support\"", supportTargetsList);

    // default
    var defaultTarget = new WorkflowBuilder.WorkflowRuleTarget(defaultQ);

    // workflow rules
    var workflowRules = [];
    workflowRules.push(salesRule);
    workflowRules.push(marketingRule);
    workflowRules.push(supportRule);

    // workflow configuration
    var workflowConfig = new WorkflowBuilder.WorkflowConfiguration(workflowRules, defaultTarget);

    // build it into a JSON representation
    var workflowConfigJSON = workflowConfig.makeJSON();
    //console.log(workflowConfigJSON);

    // convert it back into a workflow configuration object
    var workflowConfigObj = workflowConfig.fromJSON(workflowConfigJSON);
}


// make a workflow in the workspace
var makeWorkflow = function() {
    // get the workflow config JSON
    var workflowConfigJSON = getWorkflowConfigJSON();

    // create a twilio client
    // parameters: accountSid, authToken, workspaceSid
    var client = new twilio.TaskRouterClient('ACf311f84287661ac5761f9a7448fd12d7', '860f148a4475cfabf584a5f452d445a7', 'WSdb1cf5e828229c13ef8beb152994b767');
    var workflow = client.workspaces('WSdb1cf5e828229c13ef8beb152994b767').workflows.create({
        friendlyName: 'Test Workflow',
        configuration: workflowConfigJSON,
        assignmentCallbackUrl: 'http://www.example.org'
    });
}

// get the workflow that was just created
var getWorkflow = function(callback) {
    var client = new twilio.TaskRouterClient('ACf311f84287661ac5761f9a7448fd12d7', '860f148a4475cfabf584a5f452d445a7', 'WSdb1cf5e828229c13ef8beb152994b767');

    client.workspaces('WSdb1cf5e828229c13ef8beb152994b767').workflows('WWf72154b97715686c7b01dfd20885e158').get(
        function(err, result) {
            console.log(result.configuration);
        });
}


getWorkflowConfigJSON();

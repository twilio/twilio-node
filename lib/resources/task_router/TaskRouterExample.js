// require WorkflowBuilder module
var WorkflowBuilder = require('./WorkflowBuilder');

// create the workflow and get the config JSON
var getWorkflowConfigJSON = function() {
    // set Qs
    salesQ = "WQ1";
    marketingQ = "WQ2";
    supportQ = "WQ3";
    defaultQ = "WQ4";

    // sales
    var salesTargetsList = [];
    var salesTarget = new WorkflowBuilder.WorkflowRuleTarget(salesQ, null, null, null);
    salesTargetsList.push(salesTarget);
    var salesRule = new WorkflowBuilder.WorkflowRule("type == \"sales\"", salesTargetsList);
    //console.log(salesRule);

    // marketing
    var marketingTargetsList = [];
    var marketingTarget = new WorkflowBuilder.WorkflowRuleTarget(marketingQ, null, null, null);
    marketingTargetsList.push(marketingTarget);
    var marketingRule = new WorkflowBuilder.WorkflowRule("type == \"marketing\"", marketingTargetsList);
    //console.log(marketingRule);

    // support
    var supportTargetsList = [];
    var supportTarget = new WorkflowBuilder.WorkflowRuleTarget(supportQ, null, null, null);
    supportTargetsList.push(supportTarget);
    var supportRule = new WorkflowBuilder.WorkflowRule("type == \"support\"", supportTargetsList);
    //console.log(supportRule);

    // default
    var defaultTarget = new WorkflowBuilder.WorkflowRuleTarget(defaultQ);
    //console.log(defaultTarget);

    // workflow rules
    var workflowRules = [];
    workflowRules.push(salesRule);
    workflowRules.push(marketingRule);
    workflowRules.push(supportRule);

    // build the workflow configuration
    var workflowConfig = new WorkflowBuilder.WorkflowConfiguration(workflowRules, defaultTarget);

    // convert workflow config into a JSON
    var workflowConfigJSON = workflowConfig.makeJSON();
    //console.log(workflowConfigJSON);

    return workflowConfigJSON;
}

// make a workflow in the workspace
var makeWorkflow = function() {
    var workflowConfigJSON = getWorkflowConfigJSON();
    console.log(workflowConfigJSON);
}


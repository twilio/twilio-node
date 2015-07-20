var TaskRoutingConfiguration = require('./TaskRoutingConfiguration');

var WorkflowConfiguration = function(workflowRules, defaultTarget) {
    var taskRoutingConfiguration = new TaskRoutingConfiguration(workflowRules, defaultTarget);
    this.taskRoutingConfig = taskRoutingConfiguration;
}

WorkflowConfiguration.prototype = {
    // get Workflow Rules
    getWorkflowRules: function() {
        return this.taskRoutingConfig.getWorkflowRules();
    },
    // get DefaultTarget
    getDefaultTarget: function(){
        return this.taskRoutingConfig.getDefaultTarget();
    },
    // return JSON object
    toJSON: function() {
        return JSON.stringify(this);
    },
    // fromJSON
    fromJSON: function(jsonObj) {
        var obj = JSON.parse(jsonObj);
        return new WorkflowConfiguration(obj.filters, obj.defaultFilter);
    }
}


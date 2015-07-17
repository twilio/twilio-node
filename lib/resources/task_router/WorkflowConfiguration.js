var TaskRoutingConfiguration = require('./TaskRoutingConfiguration');

var WorkflowConfiguration = function(workflowRules, defaultTarget) {
    this.taskRoutingConfig = new TaskRoutingConfiguration(workflowRules, defaultTarget);
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
    // return a String representation
    toString: function() {
        return this.taskRoutingConfig.toString();
    }
}


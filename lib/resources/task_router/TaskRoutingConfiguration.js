var TaskRoutingConfiguration = function(workflowSid, defaultTarget) {
    if (!workflowRules) {
        throw new Error('Workflow Rules are required when defining a Task Routing Configuration');
    }
    this.filters = workflowRules;
    this.default_filter = defaultTarget;
}

TaskRoutingConfiguration.prototype = {
    // get Workflow Rules
    getWorkflowRules: function() {
        return this.filters;
    },

    // set Workflow Rules
    setWorkflowRules: function(workflowRules) {
        this.filters = workflowRules;
    },

    // get Default Target
    getDefaultTarget: function() {
        return this.default_filter;
    },

    // set Default Target
    setDefaultTarget: function(defaultTarget) {
        this.default_filter = defaultTarget;
    },

    // return a String representation of the Task Routing Configuration
    toString: function() {
        return JSON.stringify(this);
     }
}

module.exports = TaskRoutingConfiguration;

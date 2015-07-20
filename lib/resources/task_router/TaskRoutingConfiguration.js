var TaskRoutingConfiguration = function(workflowRules, defaultTarget) {
    if (!workflowRules) {
        throw new Error('Workflow Rules are required when defining a Task Routing Configuration');
    }
    if (defaultTarget) {
        this.defaultFilter = defaultTarget;
    }
    this.filters = workflowRules;
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
        return this.defaultFilter;
    },

    // set Default Target
    setDefaultTarget: function(defaultTarget) {
        this.defaultFilter = defaultTarget;
    },

    // return a String representation of the Task Routing Configuration
    toString: function() {
        return JSON.stringify(this);
     }
}

module.exports = TaskRoutingConfiguration;

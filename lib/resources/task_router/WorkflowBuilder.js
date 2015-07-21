var WorkflowRuleTarget = function(queue, expression, priority, timeout) {
    if (!queue) {
        throw 'QueueSid is required when defining a Workflow Rule Target';
    }
    if (expression && priority && timeout) {
        this.expression = expression;
        this.priority = priority;
        this.timeout = timeout;
    }
    this.queue = queue;
};

WorkflowRuleTarget.prototype = {
    // get Queue for the Workflow Rule Target
    getQueue: function() {
        return this.queue;
    },

    // set Queue for the Worfklow Rule Target
    setQueue: function(queue) {
        this.queue = queue;
    },

    // get Expression for the Workflow Rule Target
    getExpression: function() {
        return this.expression;
    },

    // set Expression for the Workflow Rule Target
    setExpression: function(expression) {
        this.expression = expression;
    },

    // get Priority for the Workflow Rule Target
    getPriority: function() {
         return this.priority;
     },

    // set Priority for the Workflow Rule Target
    setPriority: function(priority) {
        this.priority = priority;
    },

    // get Timeout for the Workflow Rule Target
    getTimeout: function() {
        return this.timeout;
    },

    // set Timeout for the Workflow Rule Target
    setTimeout: function(timeout) {
        this.timeout = timeout;
    },

    // return a JSON String representation of the Workflow Rule Target
    toString: function() {
        return JSON.stringify(this);
    }
};

var WorkflowRule = function(expression, targets, friendlyName) {
    if (!expression) {
        throw 'Expression for Workflow Rule is required';
    }
    if (!targets) {
        throw 'Targets for Workflow Rule are required';
    }
    if (friendlyName) {
        this.friendlyName = friendlyName;
    }
    this.expression = expression;
    this.targets = targets;
};

WorkflowRule.prototype = {
    // get Expression for the Workflow Rule
    getExpression: function() {
        return this.expression;
    },
    // set Expression for the Workflow Rule
    setExpression: function(expression) {
        this.expression = expression;
    },

    // get FriendlyName for the Workflow Rule
    getFriendlyName: function() {
        return this.friendlyName;
    },

    // set FriendlyName for the Workflow Rule
    setFriendlyName: function(friendlyName) {
        this.friendlyName = friendlyName;
    },

    // get WorkflowRuleTargets for the Workflow Rule
    getWorkflowRuleTargets: function() {
        return this.targets;
    },

    // set WorkflowRuleTargets for the Workflow Rule
    setWorkflowRuleTargets: function(targets) {
        this.targets = targets;
    },

    // append to WorkflowRuleTargets for the Workflow Rule
    addWorkflowRuleTarget: function(target) {
        this.targets.push(target);
    },

    // return a JSON String representation of the Workflow Rule
    toString: function() {
        return JSON.stringify(this);
    }
};

var TaskRoutingConfiguration = function(workflowRules, defaultTarget) {
    if (!workflowRules) {
        throw 'Workflow Rules are required when defining a Task Routing Configuration';
    }
    if (defaultTarget) {
        this.defaultFilter = defaultTarget;
    }
    this.filters = workflowRules;
};

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
    }
};

var WorkflowConfiguration = function(workflowRules, defaultTarget) {
    var taskRoutingConfiguration = new TaskRoutingConfiguration(workflowRules, defaultTarget);
    this.taskRoutingConfig = taskRoutingConfiguration;
};

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
};

module.exports = WorkflowRuleTarget;
// module.exports = WorkflowRule;
module.exports = TaskRoutingConfiguration;
module.exports = WorkflowConfiguration;

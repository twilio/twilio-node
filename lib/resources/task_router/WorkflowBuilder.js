var WorkflowRuleTarget = function(queue, expression, priority, timeout) {
    if (!queue) {
        throw 'QueueSid is required when defining a Workflow Rule Target';
    }
    if (expression) {
        this.expression = expression;
    }
    if (priority) {
        this.priority = priority;
    }
    if (timeout) {
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
    makeJSON: function() {
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
        this.friendly_name = friendlyName;
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
        return this.friendly_name;
    },

    // set FriendlyName for the Workflow Rule
    setFriendlyName: function(friendlyName) {
        this.friendly_name = friendlyName;
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
    makeJSON: function() {
        return JSON.stringify(this);
    }
};

var TaskRoutingConfiguration = function(workflowRules, defaultTarget) {
    if (!workflowRules) {
        throw 'Workflow Rules are required when defining a Task Routing Configuration';
    }
    if (defaultTarget) {
        this.default_filter = defaultTarget;
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
        return this.default_filter;
    },

    // set Default Target
    setDefaultTarget: function(defaultTarget) {
        this.default_filter = defaultTarget;
    }
};

var WorkflowConfiguration = function(workflowRules, defaultTarget) {
    var taskRoutingConfiguration = new TaskRoutingConfiguration(workflowRules, defaultTarget);
    this.task_routing = taskRoutingConfiguration;
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
    makeJSON: function() {
        return JSON.stringify(this);
    },
    // return a workflow configuration object from the JSON
    fromJSON: function(jsonObj) {
        var workflowConfigurationObj = JSON.parse(jsonObj)['task_routing'];

        for (var property in workflowConfigurationObj) {
            // default_filter is a workflow rule target
            if (property == "default_filter") {
                var default_filter = workflowConfigurationObj['default_filter'];
                var queueDefaultFilter = default_filter.queue;
                var expressionDefaultFilter = default_filter.expression;
                var priorityDefaultFilter = default_filter.priority;
                var timeoutDefaultFilter = default_filter.timeout;

                var defaultTarget = new WorkflowRuleTarget(queueDefaultFilter, expressionDefaultFilter, priorityDefaultFilter, timeoutDefaultFilter);
            }

            // filters is a list of workflow rules
            if (property == "filters") {
                var workflowRules = [];
                for (var workflowRuleIdx in workflowConfigurationObj['filters']) {
                    var workflowRule = workflowConfigurationObj['filters'][workflowRuleIdx];
                    var expression = workflowRule.expression;
                    var friendlyName = workflowRule.friendlyName;
                    var targets = [];
                    for (var targetIdx in workflowRule['targets']) {
                        var queueTarget = workflowRule['targets'][targetIdx].queue;
                        var expressionTarget = workflowRule['targets'][targetIdx].expression;
                        var priorityTarget = workflowRule['targets'][targetIdx].priority;
                        var timeoutTarget = workflowRule['targets'][targetIdx].timeout;

                        var target = new WorkflowRuleTarget(queueTarget, expressionTarget, priorityTarget, timeoutTarget);
                        targets.push(target);
                    }
                    var parsedWorkflowRule = new WorkflowRule(expression, targets, friendlyName);
                    workflowRules.push(parsedWorkflowRule);
                }
            }
        }
        var workflowConfiguration = new WorkflowConfiguration(workflowRules, defaultTarget);
        return workflowConfiguration;
    }
};


exports.WorkflowRuleTarget = WorkflowRuleTarget;
exports.WorkflowRule = WorkflowRule;
exports.TaskRoutingConfiguration = TaskRoutingConfiguration;
exports.WorkflowConfiguration = WorkflowConfiguration;


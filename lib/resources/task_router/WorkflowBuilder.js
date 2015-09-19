var _ = require('underscore');

/**
 * [WorkflowRuleTarget description]
 * @param {[type]} options [description]
 */
function WorkflowRuleTarget(options) {
    options || (options = {});

    if (!options.queue) {
        throw 'queue for WorkflowRuleTarget is required';
    }

    this.queue = options.queue;
    this.expression = options.expression;
    this.priority = options.priority;
    this.timeout = options.timeout;      
}

/**
 * [WorkflowRule description]
 * @param {[type]} options [description]
 */
function WorkflowRule(options) {
    options || (options = {});

    if (!options.expression) {
        throw 'expression for WorkflowRule is required';
    }

    if (!options.targets) {
        throw 'targets for WorkflowRule is required';
    }

    this.expression = options.expression;
    this.targets = _.map(options.targets, function(target) {
        return new WorkflowRuleTarget(target);
    });
    this.friendlyName = options.friendlyName;
}

WorkflowRule.prototype = {
    get friendly_name() {
        return this.friendlyName;
    },

    set friendly_name(value) {
        this.friendlyName = value;
    }
}

/**
 * [TaskRoutingConfiguration description]
 * @param {[type]} options [description]
 */
function TaskRoutingConfiguration(options) {
    options || (options = {});

    if (!options.filters) {
        throw 'filters for TaskRoutingConfiguration is required';
    }

    this.filters = _.map(options.filters, function(filter) {
        return new WorkflowRule(filter);
    });
    this.defaultFilter = options.defaultFilter;
}

/**
 * [WorkflowConfiguration description]
 * @param {[type]} options [description]
 */
function WorkflowConfiguration(options) {
    options || (options = {});

    this.taskRouting = new TaskRoutingConfiguration(options.taskRouting);
}

WorkflowConfiguration.prototype = {

    get task_routing() {
        return this.taskRouting;
    },

    set task_routing(o) {
        this.taskRouting = o;
    },

    toJSON: function() {
        //console.log(this);
        return JSON.stringify(this);
    },

    fromJSON: function(json) {
        return JSON.parse(json);
    }
}


module.exports = {

    WorkflowRuleTarget: WorkflowRuleTarget,
    WorkflowRule: WorkflowRule,
    TaskRoutingConfiguration: TaskRoutingConfiguration,
    WorkflowConfiguration: WorkflowConfiguration

}

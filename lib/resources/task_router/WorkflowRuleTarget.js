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
}

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
}

module.exports = WorkflowRuleTarget;

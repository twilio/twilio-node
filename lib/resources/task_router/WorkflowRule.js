var WorkflowRule = function(expression, targets, friendlyName) {
    if (!expression) {
        throw new Error('Expression for Workflow Rule is required');
    }
    if (!targets) {
        throw new Error('Targets for Workflow Rule are required');
    }
    if (friendlyName) {
        this.friendlyName = friendlyName;
    }
    this.expression = expression;
    this.targets = targets;
}

WorkflowRule.prototype = function() {
    // get Expression for the Workflow Rule
    getExpression:  function() {
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

    // return a String representation of the Workflow Rule
    toString: function() {
        return JSON.stringify(this);
    }
}

module.exports = WorkflowRule;


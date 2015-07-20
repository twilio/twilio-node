var WorkflowConfiguration = require('./WorkflowConfiguration.js');

var WorkflowBuilder = {};

WorkflowBuilder.prototype = {
    // toJSON
    parseToJSON: function(workflowConfiguration) {
        return JSON.stringify(workflowConfiguration);
    },
    // fromJSON
    parseFromJSON: function(workflowConfigurationJSON) {
        var obj = JSON.parse(workflowConfigurationJSON);
        return new WorkflowConfiguration(obj.filters, obj.default_filters);
    }
}

module.exports = WorkflowBuilder;

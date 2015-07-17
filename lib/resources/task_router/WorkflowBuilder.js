var WorkflowConfiguration = require('./WorkflowConfiguration.js');

var WorkflowBuilder = {};

WorkflowBuilder.prototype = {
    // parse from Workflow Configuration to JSON
    parseWorkflowConfiguration: function(workflowConfiguration) {
        return JSON.stringify(workflowConfiguration);
    },
    // parse from JSON to Workflow Configuration object
    parseJSON: function(workflowConfigurationJSON) {
        console.log(JSON.parseText
    }
}

module.exports = WorkflowBuilder;

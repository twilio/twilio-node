var twilio = require('../index');
var WorkflowBuilder = require('../lib/resources/task_router/WorkflowBuilder');

describe('The Twilio Workflow Configuration resource', function() {
    var client = new twilio.TaskRouterClient('AC123', '123', 'WS123');
    var workflowRules = [];
    var defaultTarget = null;
    var workflowConfig = null;

    beforeEach(function() {
        spyOn(client, 'request');
    });

    it('creates a workflow rule target', function() {
        // sales
        var salesTarget = new WorkflowBuilder.WorkflowRuleTarget('WQ1', null, null, null);
        var salesTarget2 = {
            queue: 'WQ1'
        };

        // marketing
        var marketingTarget = new WorkflowBuilder.WorkflowRuleTarget('WQ2', null, null, null);
        var marketingTarget2 = {
            queue: 'WQ2'
        };

        // support
        var supportTarget = new WorkflowBuilder.WorkflowRuleTarget('WQ3', null, null, null);
        var supportTarget2 = {
            queue: 'WQ3'
        };

        // default
        defaultTarget = new WorkflowBuilder.WorkflowRuleTarget('WQ4', null, null, null);
        var defaultTarget2 = {
            queue: 'WQ4'
        };

        expect(JSON.stringify(salesTarget)).toEqual(JSON.stringify(salesTarget2));
        expect(JSON.stringify(marketingTarget)).toEqual(JSON.stringify(marketingTarget2));
        expect(JSON.stringify(supportTarget)).toEqual(JSON.stringify(supportTarget2));
        expect(JSON.stringify(defaultTarget)).toEqual(JSON.stringify(defaultTarget2));
    });

    it('creates a workflow rule', function() {
        // sales
        var salesTarget = new WorkflowBuilder.WorkflowRuleTarget('WQ1', null, null, null);
        var salesRule = new WorkflowBuilder.WorkflowRule("type == \"sales\"", [salesTarget]);

        var salesRule2 = {
            expression: "type == \"sales\"",
            targets: [
                {
                    queue: 'WQ1'
                }
            ]
        };

        // marketing
        var marketingTarget = new WorkflowBuilder.WorkflowRuleTarget('WQ2', null, null, null);
        var marketingRule = new WorkflowBuilder.WorkflowRule("type == \"marketing\"", [marketingTarget]);

        var marketingRule2 = {
            expression: "type == \"marketing\"",
            targets: [
                {
                    queue: 'WQ2'
                }
            ]
        };

        // support
        var supportTarget = new WorkflowBuilder.WorkflowRuleTarget('WQ3', null, null, null);
        var supportRule = new WorkflowBuilder.WorkflowRule("type == \"support\"", [supportTarget]);

        var supportRule2 = {
            expression: "type == \"support\"",
            targets: [
                {
                    queue: 'WQ3'
                }
            ]
        };

        expect(JSON.stringify(salesRule)).toEqual(JSON.stringify(salesRule2));
        expect(JSON.stringify(marketingRule)).toEqual(JSON.stringify(marketingRule2));
        expect(JSON.stringify(supportRule)).toEqual(JSON.stringify(supportRule2));

        workflowRules.push(salesRule);
        workflowRules.push(marketingRule);
        workflowRules.push(supportRule);

    });

    it('creates a workflow configuration', function() {
        workflowConfig = new WorkflowBuilder.WorkflowConfiguration(workflowRules, defaultTarget);

        var workflowConfig2 = {
            task_routing: {
                default_filter: {
                    queue: 'WQ4'
                },
                filters: [
                    {
                        expression: "type == \"sales\"",
                        targets: [
                            {
                                queue: 'WQ1'
                            }
                        ]
                    },
                    {
                        expression: "type == \"marketing\"",
                        targets: [
                            {
                                queue: 'WQ2'
                            }
                        ]
                    },
                    {
                        expression: "type == \"support\"",
                        targets: [
                            {
                                queue: 'WQ3'
                            }
                        ]
                    }
                ]
            }
        };
        expect(JSON.stringify(workflowConfig)).toEqual(JSON.stringify(workflowConfig2));
    });

    it('creates a JSON representation of the workflow configuration', function() {
        var workflowConfigJSON = workflowConfig.makeJSON();

        var workflowConfigJSON2 =
        {
            "task_routing":{
                "default_filter":{
                    "queue":"WQ4"},"filters":[{
                        "expression":"type == \"sales\"","targets":[{
                            "queue":"WQ1"}]},{
                                "expression":"type == \"marketing\"","targets":[{
                                    "queue":"WQ2"}]},{
                                        "expression":"type == \"support\"","targets":[{
                                            "queue":"WQ3"}]}]}
        };
        expect(workflowConfigJSON).toEqual(JSON.stringify(workflowConfigJSON2));
    });

    it('converts a workflow configuration object from JSON representation', function() {
        var workflowConfigJSON = workflowConfig.makeJSON();
        var workflowConfigObject = workflowConfig.fromJSON(workflowConfigJSON);

        expect(workflowConfigObject).toEqual(workflowConfig);
    });
});


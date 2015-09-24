var wb = require('../lib/resources/task_router/WorkflowBuilder');

describe('The Twilio Workflow Configuration resource', function() {

    it('should marshal a task routing configuration through properties', function() {
        var target = new wb.WorkflowRuleTarget({
            queue: 'WQaaa'
        });
        target.expression = '1==2';
        target.priority = "20";

        var filter = new wb.WorkflowRule({
            expression : '1==1',
            targets : [target]
        });
        filter.friendlyName = 'name';

        var taskRouting = new wb.TaskRoutingConfiguration({
            filters : [filter]
        });
        var config = new wb.WorkflowConfiguration({
            taskRouting: taskRouting
        });

        expect(config.toJSON()).toBe(JSON.stringify({
            task_routing: {
                filters: [
                    {
                        friendly_name: 'name',
                        expression: '1==1',
                        targets: [
                            {
                                queue: 'WQaaa',
                                expression: '1==2',
                                priority: '20'
                            }
                        ]
                    }
                ]
            }
        }));
    });

    it('should marshal a task routing configuration', function() {
        var config = {
            taskRouting: {
                filters: [
                    {
                        friendlyName: "filter a",
                        expression: "expression a",
                        targets: [
                            {
                                queue: "WQaaa",
                                expression: "expression b",
                                priority: "10",
                                timeout: 300,
                            },
                            {
                                queue: "WQbbb"
                            },
                            {
                                queue: "WQccc",
                                timeout: 300
                            }
                        ]
                    },
                    {
                        friendlyName: "filter b",
                        expression: "expression z",
                        targets: [
                            {
                                queue: "WQddd",
                                expression: "expression y",
                                priority: "10",
                            }
                        ]
                    }
                ],
                defaultFilter: {
                    queue: "WQxxx"
                }
            }
        };

        expect(new wb.WorkflowConfiguration(config).toJSON()).toEqual(JSON.stringify(
            {
                task_routing: {
                    filters: [
                        {
                            friendly_name: "filter a",
                            expression: "expression a",
                            targets: [
                                {
                                    queue: "WQaaa",
                                    expression: "expression b",
                                    priority: "10",
                                    timeout: 300,
                                },
                                {
                                    queue: "WQbbb"
                                },
                                {
                                    queue: "WQccc",
                                    timeout: 300
                                }
                            ]
                        },
                        {
                            friendly_name: "filter b",
                            expression: "expression z",
                            targets: [
                                {
                                    queue: "WQddd",
                                    expression: "expression y",
                                    priority: "10",
                                }
                            ]
                        }
                    ],
                    default_filter: {
                        queue: "WQxxx"
                    }
                }
            }
        ));
    });

    it('should unmarshal a task routing configuration', function() {
        var jsonConfig = JSON.stringify({
            task_routing: {
                filters: [
                    {
                        friendly_name: "filter a",
                        expression: "expression a",
                        targets: [
                            {
                                queue: "WQaaa",
                                expression: "expression b",
                                priority: "10",
                                timeout: 300,
                            },
                            {
                                queue: "WQbbb"
                            },
                            {
                                queue: "WQccc",
                                timeout: 300
                            }
                        ]
                    },
                    {
                        friendly_name: "filter b",
                        expression: "expression z",
                        targets: [
                            {
                                queue: "WQddd",
                                expression: "expression y",
                                priority: "10",
                            }
                        ]
                    }
                ],
                default_filter: {
                    queue: "WQxxx"
                }
            }
        });

        var config = wb.WorkflowConfiguration.fromJSON(jsonConfig);
        expect(config.taskRouting.filters.length).toBe(2);
        expect(config.taskRouting.filters[0].friendlyName).toBe('filter a');
        expect(config.taskRouting.filters[0].expression).toBe('expression a');
        expect(config.taskRouting.filters[0].targets.length).toBe(3);
        expect(config.taskRouting.filters[0].targets[0].queue).toBe('WQaaa');
        expect(config.taskRouting.filters[0].targets[0].expression).toBe('expression b');
        expect(config.taskRouting.filters[0].targets[0].priority).toBe('10');
        expect(config.taskRouting.filters[0].targets[0].timeout).toBe(300);
        expect(config.taskRouting.defaultFilter.queue).toBe('WQxxx');
    });

});

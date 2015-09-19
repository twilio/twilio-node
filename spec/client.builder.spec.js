var wb = require('../lib/resources/task_router/WorkflowBuilder');

describe('The Twilio Workflow Configuration resource', function() {

    it('marshal a task routing configuration', function() {
        var config = {  
            taskRouting: {

                filters: [  
                    {  
                        friendlyName: "filter a",
                        expression: "expression a",
                        targets: [  
                            {  
                                queue: "WQaaa",
                                priority: "10",
                                timeout: 300,
                                expression: "expression b"
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
                                priority: "10",
                                expression: "expression y"   
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
                                    priority: "10",
                                    timeout: 300,
                                    expression: "expression b"
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
                                    priority: "10",
                                    expression: "expression y"   
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

    it('unmarshal a task routing configuration', function() {

    });

});


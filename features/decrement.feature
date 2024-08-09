Feature: Decrement (--) 
        Scenario: 1--
            Given i start with 1
            When i decrement 1
            Then i end up with 0

        Scenario: 2--
            Given i start with 2
            When i decrement 1
            Then i end up with 1
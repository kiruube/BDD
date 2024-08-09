Feature: Negation (-) 
        Scenario:  -j;
            Given i start with 3
            When i negate 3
            Then i end up with -3

        Scenario: j1 = -j;
            Given i start with 4
            When i negate 4
            Then i end up with -4
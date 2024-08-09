Feature: unary (+) 
        Scenario:  +i
            Given i start with 3
            When i unary start with 3
            Then i end up with 3

        Scenario: i1 = +i
            Given i start with 4
            When i unary start with 4
            Then i end up with 4
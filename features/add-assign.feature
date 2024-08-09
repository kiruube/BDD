Feature: Addition Assignment (+=) 
        Scenario: a = b + 3
            Given b equals 2
            When I start with 3
            And I add 3 to b
            Then a equals 5
            
        Scenario: a = b + 6
            Given b equals 5
            When I start with 6
            And I add 6 to b
            Then a equals 11
         
            
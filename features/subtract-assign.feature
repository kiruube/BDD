Feature: Subtract Assignment (-=) 
        Scenario: a = b - 1
            Given b equals 4
            When I start with 1
            And I subtract 1 from b
            Then a equals 3
            
        Scenario: a = b - 3
            Given b equals 10
            When I start with 3
            And I subtract 3 from b
            Then a equals 7

            
            
         
            
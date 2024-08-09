Feature: equality (==) 
        Scenario: val1 == val2
        Given val1 = 1
            And val2 = 1
            When I compare val1 with val2
            Then the result should be true
            
       
            
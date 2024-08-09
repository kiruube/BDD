Feature: Login Feature
    Scenario: Successful Login
        Given I am on the login page
        When I enter valid credentials
        Then I am redirected to the dashboard

    Scenario: Unsuccessful Login
        Given I am on the login page
        When I enter invalid credentials
        Then I remain on the login page

    Scenario: 1+0
        Given i start with 1
        When i add 0
        Then i end up with 1

    Scenario: 1+1
        Given i start with 1
        When i add 1
        Then i end up with 2

    Scenario: 1*0
        Given i start with 1
        When i multiply by 0
        Then i end up with 0
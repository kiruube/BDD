Feature: Login Feature
    Scenario: Successful Login
        Given I am on the login page
        When I enter valid credentials
        Then I am redirected to the dashboard

    Scenario: Unsuccessful Login
        Given I am on the login page
        When I enter invalid credentials
        Then I remain on the login page


    
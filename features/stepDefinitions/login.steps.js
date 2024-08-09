const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

//Steps for successful login 
    Given('I am on the login page', function() {
        console.log('Given am on the login page');
    });

    When('I enter valid credentials', function() {
        console.log('When I enter valid credentials');
    });

    Then('I am redirected to the dashboard', function() {
        console.log('Then am redirected to the dashboard');
    });

    //Steps for unsuccessful login    
    When('I enter invalid credentials', function() {
        console.log('When I enter invalid credentials');
    });
    
    Then('I remain on the login page', function() {
        console.log('Then I remain on the login page');
    });

    let answer = 0;

    Given('i start with {int}', function(input){
        answer = input;
    });
    
    When('i add {int}', function(input){
        answer += input;
    });
    
    Then('i end up with {int}', function(input){
        assert.equal(answer, input);
    });

    When('i multiply by {int}', function(input){
        answer *= input;	
    });
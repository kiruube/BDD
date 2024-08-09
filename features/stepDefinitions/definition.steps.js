const { Given, When, Then } = require('@cucumber/cucumber');

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


//Steps for calculator
const assert = require('assert');
    let answer = 0;
    Given('i start with {int}', function(input){
        answer = input;
    });
    
    When('i add {int}', function(input){
        answer += input;
    });
    
    Then('i end up with {int}', function(input){
        assert.equal(answer, input);
        console.log('Then i end up with', answer);
    });

    When('i subtract {int}', function(input){
        answer -= input;
    });

    When('i multiply by {int}', function(input){
        answer *= input;	
    });


    When('i divide by {int}', function(input){
        answer /= input;
    });

    When ('i % {int}', function(input){
        answer %= input;
    })

    When('i ** by {int}', function(input){
        answer **= input;
    })

    When('i increment {int}', function(input){
        answer += input;
    })

    When('i decrement {int}', function(input){
        answer -= input;
    })

    When('i unary start with {int}', function(input){
        answer = input;
    })

    When('i negate {int}', function(input){
        answer = -input;
    })

    When('i assign {int}', function(input){
      answer = input;
    })
    


    let a, b;

    Given('b equals {int}', function (value) {
        b = value;
      });
      
    When('I start with {int}', function (value) {
        a = value;
      });
    When('I add {int} to b', function (value) {
        a = b + value;
      });
    
    Then('a equals {int}', function (expectedValue) {
        assert.strictEqual(a, expectedValue);
      });
    
    When('I subtract {int} from b', function (value) {
        a = b - value;
      });
    
    
      let val1, val2, result;

      Given('val1 = {int}', function (value) {
        val1 = value;
      });
      
      Given('val2 = {int}', function (value) {
        val2 = value;
      });
      
      When('I compare val1 with val2', function () {
        result = val1 === val2;
      });
      
      Then('the result should be true', function () {
        assert.strictEqual(result, true);
      });
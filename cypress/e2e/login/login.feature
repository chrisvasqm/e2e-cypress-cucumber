Feature: Automaty

Scenario: Login with valid credentials
  Given I visit the website
  When I enter valid credentials
  Then I should be logged in
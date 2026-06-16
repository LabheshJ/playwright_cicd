@login
Feature: Login User

  Scenario: User logs in successfully

    Given User is on Login Page
    When User enters valid credentials
    And User clicks Login button
     Then User should be logged in successfully
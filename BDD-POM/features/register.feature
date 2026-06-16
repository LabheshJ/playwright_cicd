@register
Feature: Register User

  Scenario: Register new user successfully

    Given User is on Register Page
    When User enters valid registration details
    And User clicks Register button
    Then User account should be created successfully


    
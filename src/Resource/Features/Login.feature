@Login


Feature: I want to test Login Feature

  Background: I am on Login Page

  Scenario Outline: Login Feature

    When I enter Username as <username>
    And I enter Password <password>
    And I click on Login Button
    Then login should be successful with Message <message>

    Examples:
      |username         |password        |message                 |
      |Admin            |admin123        |login successful        |
      #|admin            |                |Password cannot be empty|
      #|                 |admin123        |Username cannot be empty|
      #|                 |                |Username cannot be empty|
      #|admin123         |admin           |Invalid Credentials     |
      #|admin@yahoo.com  |admin123        |Invalid Credentials     |


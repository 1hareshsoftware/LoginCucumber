package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDef {

    Login login = new Login();

    @When("^I enter Username as Admin$")
    public void i_enter_Username_as_Admin() {
        login.login();
    }

    @When("^I enter Password admin(\\d+)$")
    public void i_enter_Password_admin(String password) {
        login.login();
    }

    @When("^I click on Login Button$")
    public void i_click_on_Login_Button(){
        login.login();
    }

    @Then("^login should be successful with Message login successful$")
    public void login_should_be_successful_with_Message_login_successful() {
    }

    @When("^I enter Username as admin$")
    public void i_enter_Username_as_admin() {
        login.login();
    }

    @When("^I enter Password $")
    public void i_enter_Password() {
        login.login();
    }

    @Then("^login should be successful with Message Password cannot be empty$")
    public void login_should_be_successful_with_Message_Password_cannot_be_empty() {
    }

    @When("^I enter Username as $")
    public void i_enter_Username_as() {
        login.login();
    }

    @Then("^login should be successful with Message Username cannot be empty$")
    public void login_should_be_successful_with_Message_Username_cannot_be_empty() {
    }

    @When("^I enter Username as admin(\\d+)$")
    public void i_enter_Username_as_admin(String username) {
        login.login();
    }

    @When("^I enter Password admin$")
    public void i_enter_Password_admin() {
        login.login();
    }

    @Then("^login should be successful with Message Invalid Credentials$")
    public void login_should_be_successful_with_Message_Invalid_Credentials() {
    }

    @When("^I enter Username as admin@yahoo\\.com$")
    public void i_enter_Username_as_admin_yahoo_com() {
        login.login();
    }



}

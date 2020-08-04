package org.example;

import org.Utils;
import org.openqa.selenium.By;

import static org.Utils.utils.ClickOnElement;
import static org.Utils.utils.enterText;

public class Login extends Utils {

    //public static void enterText(By by, String text) {
        //driver.findElement(by).sendKeys(text);
    //}
    //public static void ClickOnElement(By by) {
        //driver.findElement(by).click();
    //}

    private By _login = By.id("txtUsername");
    private By _password =  By.id("txtPassword");
    private By _loginButton = By.id("btnLogin");

    public void login(){
        enterText(_login, "Admin");
        enterText(_password, "admin123");
        ClickOnElement(_loginButton);




    }
}

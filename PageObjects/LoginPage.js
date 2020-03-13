
class LoginPage {

    constructor()
    {
        //Elements
        this.userNameTxt = element(by.id('username'));
        this.passwordTxt = element(by.id('password'));
        this.sessionLocationLink = element(by.id('sessionLocation'));
        this.loginBtn = element(by.id('loginButton'));
    }
  
    //Actions
    accessToLoginPage() {
        browser.get('https://demo.openmrs.org/openmrs/login.htm');
    }

    sendLoginCredentials() {
        this.userNameTxt.sendKeys('Admin');	
	    this.passwordTxt.sendKeys('Admin123');
	    this.sessionLocationLink.element(by.id('Inpatient Ward')).click();
    }	

    clickLoginButton() {
        this.loginBtn.click();
    }

    isLoggedSuccessfull() {
        return element.all(by.css('h4')).get(0).getText();
    }

}

module.exports = LoginPage;
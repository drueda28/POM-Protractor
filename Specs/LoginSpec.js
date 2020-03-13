const LoginPage = require('../PageObjects/LoginPage');

describe('Login Page', function() {
	
    it('Validate Login', function() {
      //When website is not angular page
      browser.waitForAngularEnabled(false);
      
      const loginPage = new LoginPage();

      loginPage.accessToLoginPage();
      loginPage.sendLoginCredentials();
      loginPage.clickLoginButton();
      
      expect(loginPage.isLoggedSuccessfull()).toBe('Logged in as Super User (admin) at Inpatient Ward.');

    });
    
});
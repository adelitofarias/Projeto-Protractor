//Helper
module.exports = {
    path: function () {

        return "http://demo.cs-cart.com/";
    },

    loginUser: function () {
        //Realiza o login
        element(by.id('username')).sendKeys('admin');
        element(by.id('password')).sendKeys('admin123');
        element(by.id('button')).click();
    },


    logout: function () {
        linkExit = element(by.id('navigation_auth_logout'));
        linkExit.click();
        browser.driver.sleep(1000);
        confirmexit = element(by.buttonText("Sair"));
        confirmexit.click();
    },


};

const BasePage = require('../utils/BasePage');

class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        // Locator
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.errorMessage = page.locator('.oxd-alert-content-text');
    }

    async navigate() {
        await this.open('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async enterUsername(username) {
        await this.fill(this.usernameInput, username);
    }

    async enterPassword(password) {
        await this.fill(this.passwordInput, password);
    }

    async clickLogin() {
        await this.click(this.loginButton);
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async getErrorMessage() {
        return await this.getText(this.errorMessage);
    }
}

module.exports = LoginPage;
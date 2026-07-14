const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const LoginData = require('../data/LoginData');

// CI Test - First Commit

test('Login dengan credential valid', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigate();

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await dashboardPage.verifyDashboardDisplayed();

    await expect(dashboardPage.dashboardTitle).toHaveText('Dashboard');

});

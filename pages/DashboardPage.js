const BasePage = require('../utils/BasePage');

class DashboardPage extends BasePage {

    constructor(page) {
        super(page);

        this.dashboardTitle = page.locator('h6');
    }

    async verifyDashboardDisplayed() {
        await this.wait(this.dashboardTitle);
    }

}

module.exports = DashboardPage;
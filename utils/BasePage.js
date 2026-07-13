class BasePage {
    constructor(page) {
        this.page = page;
    }

    async open(url) {
        await this.page.goto(url);
    }

    async click(locator) {
        await locator.click();
    }

    async fill(locator, text) {
        await locator.fill(text);
    }

    async wait(locator) {
        await locator.waitFor();
    }

    async getText(locator) {
        return await locator.textContent();
    }
}

module.exports = BasePage;
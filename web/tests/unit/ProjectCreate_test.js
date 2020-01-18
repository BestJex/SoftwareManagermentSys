const puppeteer = require('puppeteer');
const home = require('./home');
const {
    homeBrowser,
    page
} = new home(puppeteer).browser();


class projectCreat {
    constructor(browser, page) {
        this.browser = browser
        this.page = page;
        console.log(page)
    }

    async addProject() {
        let browser = await this.browser;
        console.log(page)

    }
    async close() {
        let browser = await this.browser;
        browser.close()
    }
}

const project = new projectCreat(homeBrowser, page);
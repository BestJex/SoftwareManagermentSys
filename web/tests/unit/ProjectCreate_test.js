const puppeteer = require('puppeteer');
const home = require('./home');
const homeBrowser = new home(puppeteer).browser();



class projectCreat {
    constructor(browser) {
        this.browser = browser
    }

    async create() {
        let page = await this.browser;
        await page.click('.projectCreate'); //点击创建项目

        await page.click('.projectName');
        await page.type('.projectName', '自动化测试输入单位');

        await page.click('.projectFeatures');
        await page.type('.projectFeatures', '自动化测试输入项目简介');

        await page.click('.sendProjectItem') //创建项目
        it('测试', () => {
            console.log('1')
        })
    }

    async close() {
        let page = await this.browser;
        page.close()
    }
}

const project = new projectCreat(homeBrowser);
project.create()
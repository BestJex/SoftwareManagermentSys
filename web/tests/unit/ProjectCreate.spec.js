const puppeteer = require('puppeteer');
const home = require('./home');
const homeBrowser = new home(puppeteer);



class projectCreat {
    constructor(browser) {
        this.browser = browser
    }

    async create() {
        describe('创建项目(projectCreate.vue)', () => {
            let page;

            it('生成页面', async () => {
                page = await this.browser;
            })

            it('点击创建项目', async () => {
                await page.click('.projectCreate'); //点击创建项目
                await page.click('.projectName');
            })

            it('输入项目名称和项目简介', async () => {
                await page.click('.projectName');
                await page.type('.projectName', '自动化测试输入单位');

                await page.click('.projectFeatures');
                await page.type('.projectFeatures', '自动化测试输入项目简介');
            })

            it('点击创建项目', async () => {
                await page.click('.sendProjectItem') //创建项目
            })

            it('确认项目创建成功', async () => {
                let successMessage = await page.$eval('.el-notification__title', el => el.innerText)
                expect(successMessage).toBe(`成功`)
            })
        })
    }

    async close() {
        describe('创建项目(projectCreate.vue)', () => {
            let page;

            it('关闭页面', async () => {
                page = await this.browser;
                await page.closePage();
            })
        })
    }
}

const project = new projectCreat(homeBrowser.browser());
project.create();
project.close();
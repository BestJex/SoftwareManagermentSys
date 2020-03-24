const puppeteer = require("puppeteer");
const home = require("./home");
const homeBrowser = new home(puppeteer);

class User {
  constructor(browser) {
    this.browser = browser;
  }

  async login() {
    describe("尝试正常登录(login.vue)", () => {
      let page;
      it("到达登录页面", async () => {
        page = await this.browser;
      }, 20000);

      it("输入账号密码", async () => {
        await page.click(".userName");
        await page.type(".userName", "xiaowu");

        await page.click(".passWord");
        await page.type(".passWord", "xiaowu");
      });

      it("输入验证码", async () => {
        await page.click(".captcha");
        await page.type(".captcha", "zhimakaimen");
      });

      it("点击登录", async () => {
        await page.click(".SubBtn ");
        await page.waitForNavigation();
      });
    });
  }

  async close() {
    describe("尝试关闭页面", () => {
      let page;
      it("关闭页面", async () => {
        page = await this.browser;
        await page.closePage();
      });
    });
  }
}

module.exports = User;

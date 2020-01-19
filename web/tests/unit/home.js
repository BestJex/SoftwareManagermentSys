const puppeteer = require('puppeteer');

class index {
    constructor(puppeteer) {
        this.puppeteer = puppeteer;
    }

    async browser() {
        const browserFetcher = this.puppeteer.createBrowserFetcher() //版本校验
        const canDownload = await browserFetcher.canDownload('706915'); //校验当前版本是否可以下载
        let verflyChromiumVersion;

        if (canDownload) { //如果可以下载并且当前环境没有该版本的chromium的话就去执行下载
            verflyChromiumVersion = await browserFetcher.download('706915');
        } else {
            console.log(`无法下载706915版本的chromium`, canDownload)
            return false
        }

        let browser = await this.puppeteer.launch({
            executablePath: verflyChromiumVersion.executablePath,
            headless: false,
            // slowMo :'500' //每个操作的延迟单位是毫秒，life is short but i want to slow down
        });
        const page = await browser.newPage();
        await page.goto('http://localhost:8080');
        return page;
    }



};

module.exports = index;
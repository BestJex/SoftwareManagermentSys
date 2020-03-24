const puppteer = require("puppeteer");
const home = require("./home");
const user = require("./User.spec.js");
const project = require("./ProjectCreate.spec");

const homeBrowser = new home(puppteer);

class AllTesting {
  constructor(browser) {
    this.browser = browser;
    this.user = user;
    this.project = project;
  }

  User() {
    const users = new user(this.browser);
    users.login();
  }

  Project() {
    const projects = new project(this.browser);
    projects.create();
  }
}

const allTesting = new AllTesting(homeBrowser.browser());
allTesting.User();
allTesting.Project();

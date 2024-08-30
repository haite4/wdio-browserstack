import dotenv from 'dotenv';
dotenv.config();
export const config = {
  user: process.env.BROWSERSTACK_USERNAME ,
  key: process.env.BROWSERSTACK_ACCESS_KEY ,
  hostname: 'hub.browserstack.com',

  services: [
    [
      'browserstack',
      {
        app: process.env.BROWSERSTACK_APP_ID
          ? process.env.BROWSERSTACK_APP_ID
          : { custom_id: 'myApp' },
        browserstackLocal: true
      },
    ]
  ],


  updateJob: false,
  specs: ["../test/specs/**.e2e.js"],
  exclude: [],

  capabilities: [{
    'bstack:options': {
      deviceName: 'Xiaomi Redmi Note 11',
      platformVersion: '11.0',
      platformName: 'android',
    }
 } ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 30000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 70000,
  },
  reporters: [['allure', {
    outputDir: 'allure-results',
}]],
};


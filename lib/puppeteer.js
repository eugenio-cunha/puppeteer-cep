'use strict';

const puppeteer = require('puppeteer');

exports.init = async preset => {
  const options = {
    headless: process.env.HEADLESS === 'true',
    ignoreHTTPSErrors: true,
    executablePath: process.env.EXECUTABLE_PATH,
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
    ...preset
  };

  const browser = await puppeteer.launch(options);
  const [page] = await browser.pages();

  return { browser, page };
};

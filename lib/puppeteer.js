'use strict';

const puppeteer = require('puppeteer');

exports.init = async preset => {
  const options = {
    headless: process.env.HEADLESS === 'true' || true,
    ignoreHTTPSErrors: true,
    args: [],
    ...preset
  };

  if (process.env.NODE_ENV === 'production') {
    options.executablePath = '/usr/bin/chromium-browser';
    options.args = [...options.args, '--no-sandbox', '--disable-dev-shm-usage'];
  }

  const browser = await puppeteer.launch(options);
  const [page] = await browser.pages();

  return { browser, page };
};

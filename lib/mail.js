'use strict';

const puppeteer = require('./puppeteer');

exports.cep = async address => {
  const { browser, page } = await puppeteer.init();
  const selector = {
    buttonSearch: '.btn2',
    tableResult: '.tmptabela',
    tableRow: '.tmptabela > tbody:nth-child(1) > tr',
    inputCep: '.contentform > span:nth-child(3) > label:nth-child(1) > input:nth-child(3)'
  };

  await page.goto('http://www.buscacep.correios.com.br/sistemas/buscacep/BuscaCepEndereco.cfm', {
    waitUntil: 'domcontentloaded'
  });

  // preenche o cep
  await page.waitForSelector(selector.inputCep, { timeout: 3000 });
  await page.type(selector.inputCep, address);

  // pesquisa o cep
  await page.waitFor(selector.buttonSearch, { timeout: 3000 });
  await page.click(selector.buttonSearch);

  // extrair as linhas da tabela
  await page.waitForSelector(selector.tableResult, { timeout: 3000 });
  const rows = await page.$$(selector.tableRow);

  const adresses = [];
  for (const i in rows) {
    const text = await page.evaluate(td => td.textContent, rows[i]);
    adresses.push(text.replace(/\n/g, ''));
  }

  await browser.close();

  return adresses;
};

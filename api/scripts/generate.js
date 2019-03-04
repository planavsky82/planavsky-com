// https://medium.freecodecamp.org/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3

const puppeteer = require('puppeteer');
const $ = require('cheerio');

async function run() {
  console.log('test');
  /* const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://sports.yahoo.com/nfl/players/');
  const content = await page.content();
  const teams = [];
  $('#Main a', content).each(function() {
    teams.push({
      link: $(this)[0].attribs.href,
      name: $(this).text()
    })
  });
  
  console.log(teams); */

  /* await page.goto('https://www.google.com');
  await teams.forEach(async function(team) {
    let z = await page.goto('https://www.google.com');
  }); */
  /* teams.forEach(function(team) {
    await page.goto('https://sports.yahoo.com/' + team.link);
    let teamContent = await page.content();
    teamBrowser.close();  
  }); */
  
  /* $('.ys-roster-table a', teamContent).each(function() {
    console.log($(this));
  }); */

  //browser.close();
}

run();

/* const rp = require('request-promise');
const puppeteer = require('puppeteer');
const $ = require('cheerio');
const item = require('./item');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States'; */

/* rp(url) 
  .then(function(html){
    //success!
    //console.log(html);
    //console.log($('big > a', html).length);
    //console.log($('big > a', html));
    const wikiUrls = [];
    for (let i = 0; i < 45; i++) {
      wikiUrls.push($('big > a', html)[i].attribs.href);
    }
    return Promise.all(
      wikiUrls.map(function(url) {
        return item('https://en.wikipedia.org' + url);
      })
    );
  })
  .then(function(presidents) {
    console.log(presidents);
  })
  .catch(function(err) {
    //handle error
    console.log(err);
  }); */

/* const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.google.com/';

puppeteer
  .launch()
  .then(function(browser) {
    console.log('test 1');
    return browser.newPage();
  })
  .then(function(page) {
    console.log('test 2');
    return page.goto(url).then(function() {
      console.log('test 3');
      return page.content();
    });
  })
  .then(function(html, browser) {
    $('div', html).each(function() {
      console.log($(this).text());
      browser.close();
    });
     console.log('test 4');
  })
  .catch(function(err) {
    //handle error
    console.log(err);
  }); */

const axios = require('axios');
const cheerio = require('cheerio');
const parse = require('node-html-parser').parse;

axios.get('https://www.pro-football-reference.com/fantasy/RB-fantasy-matchups.htm')
  .then(response => {
    const html = parse(response.data);
    // get only the body tag on the html const
    const root = parse('<ul id="list"><li>Hello World</li></ul>');
    console.log(root.querySelector('#list'));
  });

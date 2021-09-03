const axios = require('axios');
const cheerio = require('cheerio');
const parse = require('node-html-parser').parse;

axios.get('https://www.pro-football-reference.com/fantasy/RB-fantasy-matchups.htm')
  .then(response => {
    // get only the body tag and its children from the html const
    const body = parse('<body' + response.data.split('<body')[1].split('</body>')[0] + '</body>');
    console.log(body.querySelector('#inner_nav'));
  });

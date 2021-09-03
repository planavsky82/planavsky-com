const axios = require('axios');
const cheerio = require('cheerio');
const parse = require('node-html-parser').parse;

axios.get('https://www.pro-football-reference.com/fantasy/RB-fantasy-matchups.htm')
  .then(response => {
    const html = parse(response.data);
    // get only the body tag and its children from the html const
    const body = parse('<body' + response.data.split('<body')[1].split('</body>')[0] + '</body>');
    //const root = parse('<div><div><div><div><ul id="list"><li>Hello World</li></ul></div></div></div></div>');
    //console.log(root.querySelector('#list'));
    console.log(body);
    //console.log(html.querySelector('#fantasy_stats'));
  });

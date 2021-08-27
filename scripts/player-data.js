const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.pro-football-reference.com/fantasy/RB-fantasy-matchups.htm')
  .then(response => {
    const html = response.data;
    console.log(html);
  });

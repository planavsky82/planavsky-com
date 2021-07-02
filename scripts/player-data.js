const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.footballdb.com/players/index.html')
  .then(response => {
    const html = response.data;
    console.log(html);
  })

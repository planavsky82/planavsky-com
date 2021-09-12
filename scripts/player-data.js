const axios = require('axios');
const cheerio = require('cheerio');

const positions = ['QB', 'RB', 'WR', 'TE'];

let getPlayers = (position) => {
  axios.get('https://www.pro-football-reference.com/fantasy/' + position + '-fantasy-matchups.htm')
  .then(response => {
    console.log('---------------------------------------');
    console.log(position);
    console.log('---------------------------------------');
    const delim = '</a></th><td class="left "';
    const rows = response.data.split(delim);
    rows.forEach((playerData, index) => {
      let playerDataSplit = playerData.split('.htm">');
      let player = playerDataSplit[playerDataSplit.length - 1];
      if (index !== (rows.length - 1)) {
        console.log(player);
      }
    });
  });
}

positions.forEach(position => {
  getPlayers(position);
});

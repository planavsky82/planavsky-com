const axios = require('axios');
const fs = require('fs');

const positions = ['QB', 'RB', 'WR', 'TE'];

let playerData = {
  position: [
    {
      type: 'qb',
      players: [
        {
          id: ''
        }
      ]
    }
  ]
};

// json data
var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';

// parse json
var jsonObj = JSON.parse(jsonData);
console.log(jsonObj);

// stringify JSON Object
var jsonContent = JSON.stringify(jsonObj);
console.log(jsonContent);

fs.writeFile("player-data.json", jsonContent, 'utf8', function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
});

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

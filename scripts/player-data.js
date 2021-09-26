const axios = require('axios');
const fs = require('fs');

const positions = ['QB', 'RB', 'WR', 'TE'];

let playerJSON = {
  positions: [
    {
      type: positions[0],
      players: []
    },
    {
      type: positions[1],
      players: []
    },
    {
      type: positions[2],
      players: []
    },
    {
      type: positions[3],
      players: []
    },
    {
      type: 'DST',
      players: []
    },
    {
      type: 'K',
      players: []
    }
  ],
  teams: [
    { id: 'PIT', name: 'Pittsburgh Steelers '}
  ]
};

let getPlayers = (position) => {
  axios.get('https://www.pro-football-reference.com/fantasy/' + position + '-fantasy-matchups.htm')
  .then(response => {
    console.log('---------------------------------------');
    console.log(position);
    console.log('---------------------------------------');
    const delim = '</a></th><td class="left "';
    const rows = response.data.split(delim);
    let team;
    const positionIndex = positions.findIndex(value => {
      return value === position;
    })
    rows.forEach((playerData, index) => {
      let playerDataSplit = playerData.split('.htm">');
      console.log('----------------------');
      try {
        team = rows[index + 1].split('/teams/')[1].split('/')[0];
        console.log(team);
      }
      catch(err) {
        console.log('no data');
      }
      let player = playerDataSplit[playerDataSplit.length - 1];
      if (index !== (rows.length - 1)) {
        console.log(player);
        playerJSON.positions[positionIndex].players.push({
          name: player,
          id: (player + '-' + position).toLowerCase().trim().replace(' ', '-', /g/),
          team: team.toUpperCase()
        });
      }
    });
  }).then(response => {
    fs.writeFile("player-data.json", JSON.stringify(playerJSON, null, 2), 'utf8', function (err) {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }
      console.log("JSON file has been saved.");
    });
  });
}

positions.forEach(position => {
  getPlayers(position);
});

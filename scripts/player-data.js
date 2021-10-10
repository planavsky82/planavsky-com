// Credit https://www.pro-football-reference.com for player information data.

const axios = require('axios');
const fs = require('fs');

const positions = ['QB', 'RB', 'WR', 'TE'];
let existingData, positionData;

try {
  if (fs.existsSync('player-data.json')) {
    existingData = fs.readFileSync('player-data.json', 'utf8') || true;
    positionData = JSON.parse(existingData).positions;
  }
} catch(err) {
  console.error('File does not yet exist');
}

let playerJSON = {
  positions: [
    {
      type: positions[0],
      players: positionData ? positionData[0].players : []
    },
    {
      type: positions[1],
      players: positionData ? positionData[1].players : []
    },
    {
      type: positions[2],
      players: positionData ? positionData[2].players : []
    },
    {
      type: positions[3],
      players: positionData ? positionData[3].players : []
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
    { id: 'PIT', name: 'Pittsburgh Steelers'},
    { id: 'CIN', name: 'Cincinnati Bengals'},
    { id: 'RAV', name: 'Baltimore Ravens'},
    { id: 'CLE', name: 'Cleveland Browns'},
    { id: 'MIA', name: 'Miami Dolphins'},
    { id: 'NWE', name: 'New England Patriots'},
    { id: 'BUF', name: 'Buffalo Bills'},
    { id: 'NYJ', name: 'New York Jets'},
    { id: 'CLT', name: 'Indianapolis Colts'},
    { id: 'JAX', name: 'Jacksonville Jaguars'},
    { id: 'OTI', name: 'Tennessee Titans'},
    { id: 'HTX', name: 'Houston Texans'},
    { id: 'SDG', name: 'Los Angelos Chargers'},
    { id: 'KAN', name: 'Kansas City Chiefs'},
    { id: 'DEN', name: 'Denver Broncos'},
    { id: 'RAI', name: 'Lav Vegas Raiders'},
    { id: 'GNB', name: 'Green Bay Packers'},
    { id: 'CHI', name: 'Chicago Bears'},
    { id: 'MIN', name: 'Minnesota Vikings'},
    { id: 'DET', name: 'Detroit Lions'},
    { id: 'WAS', name: 'Washington Football Team'},
    { id: 'DAL', name: 'Dallas Cowboys'},
    { id: 'NYG', name: 'New York Giants'},
    { id: 'PHI', name: 'Philadelphia Eagles'},
    { id: 'NOR', name: 'New Orleans Saints'},
    { id: 'TAM', name: 'Tampa Bay Buccaneers'},
    { id: 'ATL', name: 'Atlanta Falcons'},
    { id: 'CAR', name: 'Carolina Panthers'},
    { id: 'SFO', name: 'San Francisco 49ers'},
    { id: 'RAM', name: 'Los Angelos Rams'},
    { id: 'SEA', name: 'Seattle Seahawks'},
    { id: 'CRD', name: 'Arizona Cardinals'}
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

      try {
        team = rows[index + 1].split('/teams/')[1].split('/')[0];
      }
      catch(err) {
        return true;
      }
      const player = playerDataSplit[playerDataSplit.length - 1];
      if (index !== (rows.length - 1)) {
        const playerId = (player + '-' + position).toLowerCase().trim().replace(' ', '-', /g/);
        // check if player already exists
        let exists = playerJSON.positions[positionIndex].players.findIndex((player) => {
          return player.id === playerId;
        });
        if (exists === -1) {
          playerJSON.positions[positionIndex].players.push({
            name: player,
            id: playerId,
            team: team.toUpperCase(),
            dateAdded: new Date(),
            dateUpdated: null,
            previousTeams: []
          });
          console.log('----------------------');
          console.log(player + ' from ' + team.toUpperCase() + ' added.');
        } else {
          // check for a new team
          let currentPlayer = playerJSON.positions[positionIndex].players[exists];
          if (currentPlayer.team !== team.toUpperCase()) {
            console.log('----------------------');
            console.log(player + ' team updated to ' + team.toUpperCase() + '.');
            currentPlayer.previousTeams.push(currentPlayer.team);
            currentPlayer.team = team.toUpperCase();
          }
        }
      }
    });
  }).then(response => {
    fs.writeFile('player-data.json', JSON.stringify(playerJSON, null, 2), 'utf8', function (err) {
      if (err) {
        console.log('An error occured while writing JSON Object to File.');
        return console.log(err);
      }
      console.log('JSON file has been saved.');
    });
  });
}

playerJSON.positions[4].players = playerJSON.teams;
positions.forEach(position => {
  getPlayers(position);
});

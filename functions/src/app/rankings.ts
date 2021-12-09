import { Rankings, RankingsData } from '../models/ranking';
import { Player } from '../models/player';

export class PlayerRankings {
  public completeRankings: Rankings[] = [];

  constructor(userRankings: Rankings[], baseRankings: RankingsData[]) {
    this.completeRankings = this.createRankings(userRankings, baseRankings);
  }

  private createRankings = (userRankings: Rankings[], baseRankings: RankingsData[]): Rankings[] => {
    //let completeRankings: Rankings[] = [];
    baseRankings.forEach((rankings: RankingsData) => {
      console.log(rankings.type);
      if (rankings.players) {
        let baseRankingIDs = rankings.players.map((player: Player) => {
          return player.id;
        });
        let userPositionRanking = userRankings.find((userRanking: Rankings) => {
          return userRanking.type === rankings.type;
        });
        console.log(baseRankingIDs);
        if (userPositionRanking) {
          console.log(userPositionRanking.players);
        }
        /* if (userPositionRanking) {
          completeRankings = Array.from(new Set(baseRankingIDs.concat(userPositionRanking.players)));
        } */
      }
    });
    return userRankings;
  }
}

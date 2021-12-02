import { Rankings } from '../models/ranking';

export class PlayerRankings {
  public completeRankings: Rankings[] = [];

  constructor(userRankings: Rankings[], baseRankings: Rankings[]) {
    this.completeRankings = this.createRankings(userRankings, baseRankings);
  }

  private createRankings = (userRankings: Rankings[], baseRankings: Rankings[]): Rankings[] => {
    return userRankings;
  }
}

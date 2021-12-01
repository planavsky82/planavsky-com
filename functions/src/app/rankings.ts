import { Rankings } from '../models/ranking';

export class PlayerRankings {
  public completeRankings: Rankings[] = [];

  constructor(userRankings: Rankings[], baseRankings: Rankings[]) {
    this.completeRankings = userRankings;
  }
}

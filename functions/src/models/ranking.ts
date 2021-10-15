import { Player } from './player';

export interface Rankings {
  players: Player[];
  type: 'QB' | 'RB' | 'WR' | 'TE' | 'DST' | 'K';
}

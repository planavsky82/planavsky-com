import { Player } from './player';

export interface Rankings {
  players: Player[];
  position: 'QB' | 'RB' | 'WR' | 'TE' | 'DST' | 'K';
}

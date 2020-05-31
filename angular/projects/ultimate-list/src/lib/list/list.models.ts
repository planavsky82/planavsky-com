export interface UlimateListItem {
  id?: string | number;
  title?: string;
  desc?: string;
  icon?: string;
  img?: string;
  component?: any;
  data?: any;
  color?: string;
}

export class UltimateListItemClass implements UlimateListItem {
  id?: string | number;
  title?: string;
  desc?: string;
  icon?: string;
  img?: string;
  component?: any;
  data?: any;
  color?: string;
  index: number;
  
  constructor(
    public state = 'inactive') { }
  
  activate() {
    this.state = 'active';
  }

  deactivate() {
    this.state = 'inactive';
  }
}

export type UltimateListDirection = 'up' | 'down';

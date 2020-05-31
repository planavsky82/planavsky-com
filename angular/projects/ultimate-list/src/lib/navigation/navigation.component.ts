import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ul-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
	
  @Input() items: any;
  @Output() change: EventEmitter<string> = new EventEmitter();

  private _active:number = 0;

  get active() {
  	return this._active;
  }

  activate(index: number, id: string) {
	  this._active = index;
    this.change.emit(id);
  }

}

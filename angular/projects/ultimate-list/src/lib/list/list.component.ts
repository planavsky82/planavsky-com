import { Component, Directive, OnInit, AfterViewInit, Input, ViewChild, ViewContainerRef, 
         ComponentFactoryResolver, ComponentRef, ElementRef, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { UlimateListItem, UltimateListItemClass, UltimateListDirection } from './list.models';

@Directive({
  selector: '[ultimate-list-component]'
})
export class ListComponentDirective implements OnInit {
  @Input() component: any;
  @Input() data: { [key: string]: string };

  constructor(private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    let factory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    this.component = this.viewContainerRef.createComponent(factory, 0);
    for (let key in this.data) {
      if (this.data.hasOwnProperty(key)) { 
        let value = this.data[key];
        this.component.instance[key] = value;
      }
    }
  }
}

@Component({
  selector: 'ultimate-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('controlStateTop', [
      state('inactive', style({
        transform: 'scale(1)',
        marginBottom: '0px'
      })),
      state('active', style({
        transform: 'scale(1.9)',
        marginBottom: '10px'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('controlStateBtm', [
      state('inactive', style({
        transform: 'scale(1)',
        marginTop: '0px'
      })),
      state('active', style({
        transform: 'scale(1.9)',
        marginTop: '10px'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('overlayState', [
      state('disabled', style({
        opacity: '0',
        display: 'none'
      })),
      state('enabled', style({
        opacity: '0.85',
        display: 'block'
      })),
      transition('disabled => enabled', animate('800ms ease-in')),
      transition('enabled => disabled', animate('800ms ease-out'))
    ])
  ]
})
export class ListComponent implements AfterViewInit {
  @Input() collection: UlimateListItem[];
  @Input() fontSize: string = '14px';
  @Input() color: string; // hex value
  @Input() readOnly: boolean = false;
  
  @ViewChild("myElem") MyProp: ElementRef;

  public displayItems: UltimateListItemClass[] = [];

  public active: number;
  public activeMode: string = 'disabled';
  public timeoutHandler: any;

  constructor(private element: ElementRef,
    private renderer: Renderer2) { }

  ngAfterViewInit() {
    // TODO: remove setTimeout. currently without it, a 'ExpressionChangedAfterItHasBeenCheckedError'
    // error for this.displayItems shows up in development mode. Does not show up in AOT.
    setTimeout(() => {
      this.setDisplayItems();      
    });
  }

  setDisplayItems() {
    this.displayItems = [];
    if (this.collection) {
      this.collection.forEach((item, index) => { 
        let displayItem = new UltimateListItemClass();
        displayItem.id = item.id;
        displayItem.title = item.title;
        displayItem.desc = item.desc;
        displayItem.icon = item.icon;
        displayItem.img = item.img;
        displayItem.component = item.component;
        displayItem.data = item.data;
        displayItem.color = item.color;
        displayItem.index = index;
        this.displayItems.push(displayItem);
      });
    }
  }

  done() {
    this.parseItems((item) => {
      this.displayItems[item.index].deactivate();
    })
    this.activeMode = 'disabled';
  }

  scroll() {
    let activeElement = this.element.nativeElement.querySelector('.ultimate-list-item-active');
    if (activeElement) {
      activeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } 
  }

  activate(index: number, direction: UltimateListDirection, mobile: boolean) {
    if (index === this.active && this.activeMode === 'enabled') {
      if (mobile) {
        this.move(index, direction);
      } else {
        this.mousedown(index, direction);
      }
    } else {
      if (this.activeMode) {
        this.done();
      } 
      this.active = index;
      this.parseItems((item) => {
        this.displayItems[item.index].activate();
      });
      this.activeMode = 'enabled';
      let ul = this.element.nativeElement.querySelector('.ultimate-list');
      let width = ul.clientWidth;   
      this.renderer.setStyle(ul, 'width', width + 'px');   
    }
  }

  mouseup() {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }
  
  mousedown(index: number, direction: UltimateListDirection) {
    if (this.activeMode) {
      this.timeoutHandler = setInterval(() => {
        this.move(index, direction);
      }, 80);
    } 
  }

  move(index: number, direction: UltimateListDirection) {
    if (this.activeMode) {
      index = this.active;
      let newIndex;
      if (!(this.reachedEnd(index, direction))) {      
        this.reorder(index, direction, true);
        if (direction === 'up') {
          newIndex = index - 1;
        } else {
          newIndex = index + 1;
        }
        this.active = newIndex;
        this.parseItems((item) => {
          this.displayItems[item.index].activate();
        });
      }
    } 
  }

  reachedEnd(index: number, direction: UltimateListDirection): boolean {
    let first: boolean = (index === 0 && direction === 'up');
    let last: boolean = (index === this.displayItems.length - 1 && direction === 'down');
    return first || last;
  }
  
  parseItems(callback: Function) {
    this.displayItems.forEach((item) => {
      if (item.index === this.active) {
        callback(item);
      }
    });
  }

  reorder(index: number, direction: UltimateListDirection, hold?: boolean) {
    let newIndex, removeIndex: number;
    let activeItem: UlimateListItem = this.collection[index];
    if (direction === 'up') {
      newIndex = index - 1;
      removeIndex = index + 1;
      if (newIndex > -1) {
        this.collection.splice(newIndex, 0, activeItem);
        this.collection.splice(removeIndex, 1); 
      } 
    } else {
      newIndex = index + 1;
      removeIndex = index;
      if (newIndex < this.displayItems.length) {        
        this.collection.splice(removeIndex, 1);        
        this.collection.splice(newIndex, 0, activeItem);
      }
    }
    this.setDisplayItems();
    if (!hold) {
      this.activate(newIndex, 'up', false);
    }
  }

  constructStateClasses(item: UlimateListItem): string {
    let cssState = '';    
    cssState = item.title ? cssState.concat('ultimate-list-state-title ') : cssState;
    cssState = item.desc ? cssState.concat('ultimate-list-state-desc ') : cssState;
    cssState = item.component ? cssState.concat('ultimate-list-state-content ') : cssState;
    cssState = item.icon ? cssState.concat('ultimate-list-state-icon ') : cssState;
    cssState = item.img ? cssState.concat('ultimate-list-state-img ') : cssState;
    return cssState.trim();
  }

  activeModeDisplay(index: number) {
    return index === this.active ||
      index === this.active + 1 ||
      index === this.active - 1;
  }
}

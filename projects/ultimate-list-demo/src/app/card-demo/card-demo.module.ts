import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDemoComponent } from './card-demo.component';
import { CardModule } from '../../../../ultimate-list/src/lib/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule
  ],
  declarations: [CardDemoComponent]
})
export class CardDemoModule { }

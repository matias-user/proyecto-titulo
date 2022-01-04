import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PanelRoutingModule,
    PrimeNgModule
  ]
})
export class PanelModule { }

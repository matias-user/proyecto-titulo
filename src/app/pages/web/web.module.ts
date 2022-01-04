import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { HomeComponent } from './home/home.component';
import {MenubarModule} from 'primeng/menubar';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    MenubarModule,
    SharedModule
  ]
})
export class WebModule { }

import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    MenubarModule,
    CardModule,
    DividerModule
  ]
})
export class PrimeNgModule { }

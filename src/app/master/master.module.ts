import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { Hijo3Component } from './hijo3/hijo3.component';


@NgModule({
  declarations: [
    PadreComponent,
    HijoComponent,
    Hijo2Component,
    Hijo3Component
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }

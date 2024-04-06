import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { Hijo3Component } from './hijo3/hijo3.component';
import { PadreComponent } from './padre/padre.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PadreComponent },
      { path: 'padre', component: PadreComponent },
      { path: 'hijo', component: HijoComponent },
      { path: 'hijo2', component: Hijo2Component }, 
      { path: 'hijo3', component: Hijo3Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }

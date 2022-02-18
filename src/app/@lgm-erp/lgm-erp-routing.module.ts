import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LgmErpComponent } from './lgm-erp.component';

const routes: Routes = [
  {
    path: 'app',
    component: LgmErpComponent,
    children: [
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LgmErpRoutingModule { }

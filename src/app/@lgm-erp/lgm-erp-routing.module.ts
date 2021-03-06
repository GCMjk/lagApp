import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LgmErpComponent } from './lgm-erp.component';

const routes: Routes = [
  {
    path: 'app',
    component: LgmErpComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LgmErpRoutingModule { }

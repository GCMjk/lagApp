import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RrhhComponent } from './rrhh.component';

const routes: Routes = [
  {
    path: 'rrhh',
    component: RrhhComponent,
    children: [
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RrhhRoutingModule { }

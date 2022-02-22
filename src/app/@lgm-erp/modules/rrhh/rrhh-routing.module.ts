import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RrhhComponent } from './rrhh.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'rrhh',
    component: RrhhComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RrhhRoutingModule { }

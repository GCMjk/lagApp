import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';


@NgModule({
  declarations: [
    ModulesComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }

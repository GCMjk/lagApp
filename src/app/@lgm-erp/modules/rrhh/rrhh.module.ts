import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@lgm-erp-shared/shared.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { RrhhRoutingModule } from './rrhh-routing.module';
import { RegisterComponent } from './register/register.component';
import { RrhhComponent } from './rrhh.component';

export const NGX_MASK_OPTIONS: Partial<IConfig> = {
  thousandSeparator: ",",
};

@NgModule({
  declarations: [
    RegisterComponent,
    RrhhComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forRoot(NGX_MASK_OPTIONS),
    RrhhRoutingModule
  ]
})
export class RrhhModule { }

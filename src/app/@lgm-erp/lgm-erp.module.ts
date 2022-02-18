import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@lgm-erp-core/core.module';

import { LgmErpRoutingModule } from './lgm-erp-routing.module';
import { LgmErpComponent } from './lgm-erp.component';


@NgModule({
  declarations: [
    LgmErpComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    LgmErpRoutingModule
  ]
})
export class LgmErpModule { }

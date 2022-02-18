import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@lgm-web-core/core.module';

import { LgmWebRoutingModule } from './lgm-web-routing.module';
import { LgmWebComponent } from './lgm-web.component';


@NgModule({
  declarations: [
    LgmWebComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    LgmWebRoutingModule
  ]
})
export class LgmWebModule { }

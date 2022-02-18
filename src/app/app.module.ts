import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LgmErpModule } from '@lgm-erp/lgm-erp.module';
import { LgmWebModule } from '@lgm-web/lgm-web.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LgmErpModule,
    LgmWebModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

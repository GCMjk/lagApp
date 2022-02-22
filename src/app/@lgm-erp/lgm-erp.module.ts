import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@lgm-erp-core/core.module';
import { ModulesModule } from './modules/modules.module';
import { SharedModule } from './shared/shared.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../environments/environment';

import { LgmErpRoutingModule } from './lgm-erp-routing.module';
import { LgmErpComponent } from './lgm-erp.component';


@NgModule({
  declarations: [
    LgmErpComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ModulesModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    LgmErpRoutingModule
  ]
})
export class LgmErpModule { }

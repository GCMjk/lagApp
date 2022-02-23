import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@lgm-erp-shared/shared.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


export const NGX_MASK_OPTIONS: Partial<IConfig> = {
  thousandSeparator: ",",
};

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forRoot(NGX_MASK_OPTIONS),
    AuthRoutingModule
  ]
})
export class AuthModule { }

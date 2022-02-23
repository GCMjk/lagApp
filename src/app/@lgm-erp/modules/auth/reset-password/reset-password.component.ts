import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '@lgm-erp-core/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  resetForm: FormGroup;
  minCharacters: number = 6;
  pattern: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              // private sweetAlert: string,
              private router: Router) { 
                this.resetForm = this.fb.group({
                  email: ['', [
                    Validators.required,
                    Validators.pattern(this.pattern)
                  ]]
                });
  }

  // Abbreviation of loginForm.controls
  get fm() {
    return this.resetForm.controls;
  }

  reset() {}

}

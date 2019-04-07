import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {constants} from '../app.constant';
// import {LoginService} from './login.service';
import {ToastrService} from 'ngx-toastr';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  model:any={};
  constructor(public router: Router,
    private formBuilder: FormBuilder,
    private _signupService:SignupService,
    private toast: ToastrService) {}

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(255)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
        confirm_password: ['', [Validators.required]]
      });
    }
    eventHandlerForPassword(event) {
      var k = event ? event.which : event.keyCode;
      if (k == 32) return false;
    }

    onRegister() {
      this._signupService.register(this.model)
      .subscribe(
        data => {
          if (true == data[constants.FLAG] && null !== data[constants.FLAG]) {
            this.toast.success(data[constants.MESSAGE]);
            this.router.navigate([constants.LOGIN]);
          }else{
            alert("else")
            this.toast.warning(data[constants.MESSAGE]);
          }
        },
        error => {
          this.toast.warning(constants.LOGIN_ERROR);
        }
      );
    }
  }

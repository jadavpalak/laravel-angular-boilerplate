import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { constants } from '../app.constant';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  model: any = {};

  constructor(public router: Router,
    private formBuilder: FormBuilder,
    private _loginService: LoginService,
    private toast: ToastrService,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(191)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])]
    });

  }
  eventHandlerForPassword(event) {
    var k = event ? event.which : event.keyCode;
    if (k == 32) return false;
  }

  onLoggedin() {
    this._loginService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          if (true == data[constants.FLAG] && null !== data[constants.FLAG]) {
            // localStorage.setItem('token', data['data'].token);
            // localStorage.setItem('user', JSON.stringify(data['data'].user));
            const expires = 10000;
            this.cookieService.set('token', data['data'].token, expires, '/');
            this.cookieService.set('user', data['data'].user, expires, '/');
            this.toast.success(data[constants.MESSAGE]);
            this.router.navigate(['/dashboard']);
          } else {
            this.toast.warning(data[constants.MESSAGE]);
          }
        },
        error => {
          this.toast.warning(constants.LOGIN_ERROR);
        });
    // setTimeout(() => {
    //   this._loginService.login(this.model.email,this.model.password)
    //   .subscribe(
    //     data => {
    //       if (true == data[constants.FLAG] && null !== data[constants.FLAG]) {
    //         localStorage.setItem('token', data['data'].token);
    //         localStorage.setItem('user', JSON.stringify(data['data'].user));
    //         this.toast.success(data[constants.MESSAGE]);
    //         this.router.navigate(['/dashboard']);
    //       }else{
    //         this.toast.warning(data[constants.MESSAGE]);
    //       }
    //     },
    //     error => {
    //       this.toast.warning(constants.LOGIN_ERROR);
    //     }
    //   );
    // }, 1000);
  }
}

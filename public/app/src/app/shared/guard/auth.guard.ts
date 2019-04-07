import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import {ToastrService} from 'ngx-toastr';
import {constants} from '../../app.constant';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private _auth:AuthService,
    public jwtHelper: JwtHelperService,
    private toast: ToastrService
  ) {
    // alert("auth guard called");
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let currentUser = this._auth.currentUserValue;
    // console.log(currentUser);
    let token = this._auth.currentUserToken;
    // console.log(token);
    if (null!=currentUser && null!=token && '' !=currentUser && ''!=token) {
      let isTokenExpired = this.jwtHelper.isTokenExpired(token);
      // console.log(isTokenExpired); // true or false
      if(!isTokenExpired){
        // alert("in if");
        return true;
      }else{
        // alert("in else inner");
        this.toast.warning(constants.JWT_TOKEN_ERROR);
        this.router.navigate(['/logout']);
        return false;
      }
    }else{
      // alert("in else out");
      this.toast.warning(constants.JWT_TOKEN_ERROR);
      this.router.navigate(['/logout']);
      return false;
    }
  }
}

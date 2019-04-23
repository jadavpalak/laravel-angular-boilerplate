import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import {ToastrService} from 'ngx-toastr';
import {constants} from '../../app.constant';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private _auth:AuthService,
    public jwtHelper: JwtHelperService,
    private toast: ToastrService,
    private cookieService: CookieService 
  ) {
    // alert("auth guard called");
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let currentUser = this._auth.currentUserValue;
    let token = this._auth.currentUserToken;
    if (null!=currentUser && null!=token && '' !=currentUser && ''!=token) {
      let isTokenExpired = this.jwtHelper.isTokenExpired(token);
      if(!isTokenExpired){
        return true;
      }else{
        this.toast.warning(constants.JWT_TOKEN_ERROR);
        this.router.navigate(['/logout']);
        return false;
      }
    }else{
      this.toast.warning(constants.JWT_TOKEN_ERROR);
      this.router.navigate(['/logout']);
      return false;
    }
  }
}

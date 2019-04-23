/**
 * @author : ####
 * Created on : ####
 * Note : create resolve for access page according to user role.
 */
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../shared/services/auth.service";
import { constants } from "../app.constant";
import { Location } from "@angular/common";
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class LogoutResolver implements Resolve<any> {
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private auth: AuthService,
    private _location: Location,
    private cookieService: CookieService
  ) {}
  resolve(): Observable<any> {
    return this.auth.logout().pipe(
      map(
        res => {
          if (true == res[constants.FLAG] && null !== res[constants.FLAG]) {
            // localStorage.removeItem("token");
            // localStorage.removeItem("user");
            this.deleteCookie();
            this.router.navigate([constants.LOGIN]);
          } else {
            if (res[constants.CODE] == 999) {
              // localStorage.removeItem("token");
              // localStorage.removeItem("user");
              this.deleteCookie();
              this.router.navigate([constants.LOGIN]);
            }
          }
        },
        err => {
          this.toastr.error(constants.CONTACT_ADMIN);
          this._location.back();
          return Observable.throw(err.json().error || "Server Error");
        }
      )
    );
  }

  deleteCookie(){
    this.cookieService.deleteAll('/', 'localhost'); 
  }
}

/**
* @author : ####
* Created on : Dec 20, 2017
* Note : create resolve for access page according to user role.
*/
import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Router} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import { AuthService } from '../shared/services/auth.service';
import {constants} from '../app.constant';

@Injectable()
export class LoginResolver implements Resolve<any> {
  constructor(
    private router: Router, private toastr: ToastrService,private auth:AuthService
  ) {}

  resolve(): Observable<any> {
    let token = this.auth.currentUserToken;
    let user = this.auth.currentUserValue;
    if (null != token && undefined != token && null != user && undefined != user) {
      this.router.navigate([constants.DASHBOARD]);
      return;
    } else {
      return;
    }
  }
}

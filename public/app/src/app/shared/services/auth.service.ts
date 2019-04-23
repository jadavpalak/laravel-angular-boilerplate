import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  APIURL = environment.APIURL;
  constructor(private http: HttpClient ,  private cookieService: CookieService) {
  }

  public get currentUserValue(): any {
    var currentuser = localStorage.getItem('user');
    if(null!=currentuser && ''!=currentuser){
      currentuser = JSON.parse(currentuser);
    }
    return currentuser;
  }

  public get currentUserToken(): any {
    const cookieExists: boolean = this.cookieService.check('token');
    if(cookieExists){
      return this.cookieService.get('token');
    }else{
      return null;
    }
    
  }

  logout() {
    /* remove user from local storage to log user out */
    return this.http.post<any>( this.APIURL+`logout`,'')
    .pipe(map(res => res));

  }
}

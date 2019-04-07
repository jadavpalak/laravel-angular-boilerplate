import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {
  //
  // readonly httpOptions:any ={
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //   })
  // };

  APIURL = environment.APIURL;
  constructor(private _http: HttpClient) {  }

  // login(model:any) {
  //   var data = JSON.stringify(model);
  //   return this.http.post<any>(this.APIURL+`login`, data,this.httpOptions)
  //   .pipe(map(user => {
  //     console.log(user);
  //     return user;
  //   })).toPromise();

  login(email, password) : Observable<any>{
    // var data = JSON.stringify(model);
    return this._http.post<any>(this.APIURL+`login`, { email:email, password:password})
    .pipe(map(user => {
      return user;
    }));
  }


}

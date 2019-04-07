import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable()
export class SignupService {
  APIURL = environment.APIURL;
  constructor(private _http: HttpClient) { }

  register(data:any) : Observable<any>{
    // var data = JSON.stringify(model);
    return this._http.post<any>(this.APIURL+`register`, { data:data})
    .pipe(map(user => {
      return user;
    }));
  }
}

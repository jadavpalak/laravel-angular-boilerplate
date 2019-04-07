import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HttpReqInterceptor } from '../shared/_helpers/http-req.interceptor';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  declarations: [LoginComponent],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: HttpReqInterceptor, multi: true },
  ]
  })
  export class LoginModule {}

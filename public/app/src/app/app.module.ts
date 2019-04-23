
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { NgModule } from '@angular/core';
import { NgxLoadingModule } from 'ngx-loading';
import { CookieService } from 'ngx-cookie-service';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'
import { ToastrModule } from 'ngx-toastr';
//Routing
import { AppRoutingModule } from './app-routing.module';
// Guard
import { AuthGuard } from './shared';
//Interceptor
import { HttpReqInterceptor } from './shared/_helpers/http-req.interceptor';
import { JwtInterceptor } from './shared/_helpers/jwt.interceptor';
// components
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LanguageTranslationModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        whitelistedDomains: ['localhost:8000']
      }
    }),
    NgxLoadingModule.forRoot({})
  ],
  declarations: [AppComponent],
  providers: [AuthGuard,CookieService
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
    bootstrap: [AppComponent]
  })
  export class AppModule {}

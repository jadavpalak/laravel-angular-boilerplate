import { NgModule } from '@angular/core';
import { Routes, RouterModule,Resolve } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginResolver } from './login.resolver';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    resolve: {
      isLogin: LoginResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[LoginResolver]
})
export class LoginRoutingModule {}

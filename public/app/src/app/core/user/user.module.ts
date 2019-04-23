import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeactiveComponent } from './user-deactive/user-deactive.component';
import { UserReactiveComponent } from './user-reactive/user-reactive.component';

@NgModule({
  declarations: [UserCreateComponent, UserEditComponent, UserDeactiveComponent, UserReactiveComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

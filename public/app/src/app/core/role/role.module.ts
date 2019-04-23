import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleCreateComponent } from './role-create/role-create.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleDeactiveComponent } from './role-deactive/role-deactive.component';
import { RoleReactiveComponent } from './role-reactive/role-reactive.component';

@NgModule({
  declarations: [RoleCreateComponent, RoleEditComponent, RoleDeactiveComponent, RoleReactiveComponent],
  imports: [
    CommonModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }

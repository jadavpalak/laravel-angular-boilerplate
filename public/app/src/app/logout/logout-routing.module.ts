import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout.component';
import { LogoutResolver } from './logout.resolver';

const routes: Routes = [
    {
        path: '',
        component: LogoutComponent,
        resolve:{
          logout:LogoutResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LogoutRoutingModule {}

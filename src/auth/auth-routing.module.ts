import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestgerUserComponent } from './restger-user/restger-user.component';

const routes: Routes = [
  {path:'',component:RestgerUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

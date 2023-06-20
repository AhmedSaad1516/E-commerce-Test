import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestpasswordComponent } from './restpassword/restpassword.component';

const routes: Routes = [
  {path:'',component:RestpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestPasswordRoutingModule { }

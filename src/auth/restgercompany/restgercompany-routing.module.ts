import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestgerComponent } from './restger/restger.component';

const routes: Routes = [
  {path:'',component:RestgerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestgercompanyRoutingModule { }

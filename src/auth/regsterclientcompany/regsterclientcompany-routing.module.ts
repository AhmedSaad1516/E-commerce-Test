import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegsterclientcompanyComponent } from './regsterclientcompany/regsterclientcompany.component';

const routes: Routes = [
  {path:'',component:RegsterclientcompanyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegsterclientcompanyRoutingModule { }

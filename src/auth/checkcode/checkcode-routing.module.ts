import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckcodeComponent } from './checkcode/checkcode.component';

const routes: Routes = [
  {path:'',component:CheckcodeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckcodeRoutingModule { }

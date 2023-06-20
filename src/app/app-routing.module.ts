import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/auth/login/login/login.component';
import { GuardLoginGuard } from 'src/core/guard-login.guard';

const routes: Routes = [
    
  {path:'',
  loadChildren: () =>import('../leyout/leyout.module').then(m => m.LeyoutModule)},

  {path:'login',component:LoginComponent,canActivate:[GuardLoginGuard]},   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/auth/login/login/login.component';
import { RestgerUserComponent } from 'src/auth/restger-user/restger-user.component';
import { GuardLoginGuard } from 'src/core/guard-login.guard';
import { HomeComponent } from 'src/leyout/home/home/home.component';

const routes: Routes = [
    
  {path:'',
  loadChildren: () =>import('../leyout/leyout.module').then(m => m.LeyoutModule)},

  {path:'login',component:LoginComponent,canActivate:[GuardLoginGuard]},   

  {path:'Restger',component:RestgerUserComponent,canActivate:[GuardLoginGuard]},
  {path:'forgetpassword',
  loadChildren: () =>import('../auth/forgetpassword/forgetpassword.module').then(m => m.ForgetpasswordModule),canActivate:[GuardLoginGuard]},
  {path:'checkcode',
  loadChildren: () =>import('../auth/checkcode/checkcode.module').then(m => m.CheckcodeModule),canActivate:[GuardLoginGuard]},
  {path:'restpassword',
  loadChildren: () =>import('../auth/rest-password/rest-password.module').then(m => m.RestPasswordModule),canActivate:[GuardLoginGuard]},
  {path:'restgerCompany',
  loadChildren: () =>import('../auth/restgercompany/restgercompany.module').then(m => m.RestgercompanyModule),canActivate:[GuardLoginGuard]},
  {path:'restgerClientCompany',
  loadChildren: () =>import('../auth/regsterclientcompany/regsterclientcompany.module').then(m => m.RegsterclientcompanyModule),canActivate:[GuardLoginGuard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

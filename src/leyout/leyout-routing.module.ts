import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardLoginGuard } from 'src/core/guard-login.guard';
import { GuardUserGuard } from 'src/core/guard-user.guard';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  
  {
    path:'',
   component:NavbarComponent,
   children:[

   
    {path:'',
    loadChildren: () =>import('../leyout/home/home.module').then(m => m.HomeModule),canActivate:[GuardUserGuard] },
    {path:'home',
    loadChildren: () =>import('../leyout/home/home.module').then(m => m.HomeModule),canActivate:[GuardUserGuard]},

 {path:'cart',
 loadChildren: () =>import('../leyout/profile-user/profile-user.module').then(m => m.ProfileUserModule)},


 {path:'details/:id',
 loadChildren: () =>import('../leyout/service/service.module').then(m => m.ServiceModule) },
 {path:'show',
 loadChildren: () =>import('../leyout/show-favorite/show-favorite.module').then(m => m.ShowFavoriteModule) },
 

   ]
  }
]





@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeyoutRoutingModule { }

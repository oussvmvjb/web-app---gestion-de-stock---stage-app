import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { MenuComponent } from './menu/menu.component';
import { LogeInComponent } from './loge-in/loge-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EditaccComponent } from './editacc/editacc.component';
import { AddstorComponent } from './addstor/addstor.component';
import { authGuard } from './auth.guard';
import { StoreComponent } from './store/store.component';
import { StatComponent } from './stat/stat.component';
import { EddartComponent } from './eddart/eddart.component';
const routes: Routes = [
  
  
  { path: '', redirectTo: '/loge-in', pathMatch: 'full' },
  { path: 'loge-in', component: LogeInComponent },
  {path: 'menu',component: MenuComponent,
    canActivate: [authGuard],
    children: [
      {path:'sign-up',component:SignUpComponent},
      {path:'account',component:AccountComponent}, 
      {path:'add',component:AddstorComponent},
      {path:'edit/:sn',component:EddartComponent},
      {path:'store',component:StoreComponent},
      {path:'stat',component:StatComponent},
      {path:'editacc/:cin',component:EditaccComponent},
      {path:'',component:StoreComponent},
    ]
  },
  { path: '**', redirectTo: '/loge-in' }
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

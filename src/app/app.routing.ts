import { Routes,RouterModule } from "@angular/router";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';

import { UserGuardService } from './user-guard.service';



import { HomeComponent } from './home/home.component';

const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr);

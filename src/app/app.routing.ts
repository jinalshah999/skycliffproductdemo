import { Routes,RouterModule } from "@angular/router";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'customer',loadChildren:'./customer/customer.module#CustomerModule'},
  {path:'user1',loadChildren:'./users/users.module#UsersModule'},
  {path:'product',loadChildren:'./productdisplay/product.module#ProductModule'},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr);

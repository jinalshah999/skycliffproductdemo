import { Routes,RouterModule } from "@angular/router";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdiuserreactiveComponent } from './userdisplay/ediuserreactive/ediuserreactive.component';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from './user-guard.service';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { UsersComponent } from './users/users.component';
import { UserResolverService } from './user-resolver.service';
import { Product1Component } from './product1/product1.component';
import { ProductResolverService } from './product-resolver.service';
import { HomeComponent } from './home/home.component';

const arr : Routes=[
  {path:'',component:HomeComponent},

  {path:'product1',resolve:{pdata:ProductResolverService},component:Product1Component},
  {path:'signup2',canActivate:[UserGuardService],component:SignupReactiveDemoComponent},

  {path:'user1', resolve:{uData:UserResolverService}, component:UsersComponent},
  {path:'login',component:LoginComponent},
  {path:'demo',component:DemoComponent},
  {path:'demo1/:id',component:Demo1Component},
  {path:'demo2',component:Demo2Component},

  {path:'edituserreactive/:user_email',component:EdiuserreactiveComponent},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr);

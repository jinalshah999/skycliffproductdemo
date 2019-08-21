import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { routing } from "./app.routing";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdiuserreactiveComponent } from './userdisplay/ediuserreactive/ediuserreactive.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Interceptordemo } from './interceptordemo';
import { UsersComponent } from './users/users.component';
import { Product1Component } from './product1/product1.component';
import { ProductModule } from './productdisplay/product.module';
import { UserModule } from './userdisplay/user.module';
import { HomeComponent } from './home/home.component';
import { CustomerModule } from './customer/customer.module';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PagenotfoundComponent,

    SignupReactiveDemoComponent,
    EdiuserreactiveComponent,
    LoginComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    UsersComponent,
    Product1Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProductModule,
    UserModule,
    CustomerModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:Interceptordemo,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

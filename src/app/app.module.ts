import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { Interceptordemo } from './interceptordemo';

import { routing } from "./app.routing";

import { ProductModule } from './productdisplay/product.module';
import { UserModule } from './userdisplay/user.module';
import { HomeComponent } from './home/home.component';
import { CustomerModule } from './customer/customer.module';
import { MiscModule } from './misc.module';
import { Product1Module } from './product1/product1.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PagenotfoundComponent,
    LoginComponent,
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
    CustomerModule,
    MiscModule,
    Product1Module,
    UsersModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:Interceptordemo,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

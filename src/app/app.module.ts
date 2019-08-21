import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { Interceptordemo } from './interceptordemo';

import { routing } from "./app.routing";


import { UserModule } from './userdisplay/user.module';
import { HomeComponent } from './home/home.component';
import { MiscModule } from './misc.module';
import { Product1Module } from './product1/product1.module';

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
    ReactiveFormsModule,
    UserModule,
    MiscModule,
    Product1Module
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:Interceptordemo,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

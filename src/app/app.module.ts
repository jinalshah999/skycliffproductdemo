import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductdisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

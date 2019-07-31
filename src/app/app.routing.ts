import { Routes,RouterModule } from "@angular/router";
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';

const arr : Routes=[
  {path:'',component:ProductdisplayComponent}
];

export const routing=RouterModule.forRoot(arr);

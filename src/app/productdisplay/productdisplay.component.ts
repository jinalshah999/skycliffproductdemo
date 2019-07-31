import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent implements OnInit {

arr:Product[]=[
  new Product(1,'fdsdf',322,'fsdf',1,'sfsdf','sdfsdfsd'),
  new Product(2,'fdsdf',322,'fsdf',1,'sfsdf','sdfsdfsd')

];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { ProductdataService } from "./productdata.service";

@Component({
  selector: "app-productdisplay",
  templateUrl: "./productdisplay.component.html",
  styleUrls: ["./productdisplay.component.css"]
})
export class ProductdisplayComponent implements OnInit {
  arr: Product[] = [];
  name:string="watch";
  constructor(private _data: ProductdataService) {}

  ngOnInit() {
    this._data.getAllProducts().subscribe(
      (data: Product[]) => {
        this.arr = data;
      },
      function(error) {
        alert(error);
      },
      function() {}
    );
  }
}

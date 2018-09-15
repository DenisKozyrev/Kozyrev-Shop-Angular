import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../../../shared/product";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  @Input()
  public categoryName: string = "";
  @Input()
  public productsCollection: Product[] = [];

  currentPageProducts: Product[];

  constructor() {}

  ngOnInit() {
    this.currentPageProducts = this.productsCollection.slice(0, 3);
  }

  pageChange(currenPage) {
    this.currentPageProducts = this.productsCollection;
    this.currentPageProducts = this.currentPageProducts.slice(
      currenPage * 3 - 3,
      currenPage * 3
    );
  }
}

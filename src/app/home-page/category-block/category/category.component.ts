import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../../../shared/product";
import { Subject } from "rxjs";
import { filteredCategoryService } from "../../../shared/filtered-category.service";

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

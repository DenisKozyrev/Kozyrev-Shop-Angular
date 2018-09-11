import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./products.service";
import { ProductsCategory } from "./productsCategory";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "KozyrevShop";

  productsCategory: ProductsCategory[] = [];

  filteredCategory: ProductsCategory[] = [];

  constructor(private ProductsService: ProductsService) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    this.productsCategory = this.ProductsService.getProducts();
    this.filteredCategory = [...this.productsCategory];
  }

  chooseCategory(filteredCategory: ProductsCategory[]) {
    this.filteredCategory = filteredCategory;
    console.log("choose", this.filteredCategory);
  }

  chooseAllCategories(filteredCategory: ProductsCategory[]) {
    this.filteredCategory = filteredCategory;
    console.log("all", this.filteredCategory);
  }
}

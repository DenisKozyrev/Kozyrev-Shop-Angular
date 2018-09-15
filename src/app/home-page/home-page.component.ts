import { Component, OnInit } from "@angular/core";
import { ProductsCategory } from "../shared/productsCategory";
import { Subject } from "rxjs";
import { filteredCategoryService } from "../shared/filtered-category.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  title = "KozyrevShop";

  products: ProductsCategory[] = this.filteredCategoryService.getProducts();

  filteredCategoriesBlock: ProductsCategory[] = this.products;

  filteredCategories$: Subject<ProductsCategory[]>;

  categoryNames: string[] = [];

  constructor(private filteredCategoryService: filteredCategoryService) {}

  ngOnInit() {
    this.filteredCategories$ = this.filteredCategoryService.getfilteredCategories();
    this.filteredCategories$.subscribe(data => {
      this.filteredCategoriesBlock = data;
    });
  }

  onSetCheckboxesState(checkboxes) {
    this.filteredCategoryService.setCheckboxesState(checkboxes);
  }
}

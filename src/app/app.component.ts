import { Component, OnInit } from "@angular/core";
import { filteredCategoryService } from "./shared/filtered-category.service";
import { ProductsCategory } from "./shared/productsCategory";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "KozyrevShop";

  filteredCategory: ProductsCategory[] = [];

  constructor(private filteredCategoryService: filteredCategoryService) {}

  ngOnInit() {
    this.filteredCategory = this.filteredCategoryService.getfilteredCategories();
  }

  chooseCategory(filterValue: string) {
    this.filteredCategoryService.setCategoryName(filterValue);
    this.filteredCategory = this.filteredCategoryService.getfilteredCategories();
  }

  removeCategory(filterValue: string) {
    this.filteredCategoryService.removeCategoryName(filterValue);
    this.filteredCategory = this.filteredCategoryService.getfilteredCategories();
  }

  chooseAllCategories() {
    this.filteredCategoryService.chooseAllCategoties();
    this.filteredCategory = this.filteredCategoryService.getfilteredCategories();
  }
}

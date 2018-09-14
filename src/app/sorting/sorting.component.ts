import { Component } from "@angular/core";
import { filteredCategoryService } from "../shared/filtered-category.service";
@Component({
  selector: "app-clothes-sorting",
  templateUrl: "./sorting.component.html",
  styleUrls: ["./sorting.component.css"]
})
export class SortingComponent {
  constructor(private filteredCategoryService: filteredCategoryService) {}

  chooseSortingValue() {
    let sortingValue = (document.getElementById(
      "sortingSelect"
    ) as HTMLInputElement).value;
    if (sortingValue === "name") {
      this.filteredCategoryService.filterProductsByName();
    } else if (sortingValue === "price") {
      this.filteredCategoryService.filterProductsByPrice();
    }
  }
}

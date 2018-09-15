import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ProductsCategory } from "../../shared/productsCategory";
import { filteredCategoryService } from "../../shared/filtered-category.service";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  productCategories: ProductsCategory[] = [];

  private categoryNames: string[] = [];

  @Output()
  setCheckboxesState = new EventEmitter();

  constructor(private filteredCategoryService: filteredCategoryService) {}

  ngOnInit() {
    this.productCategories = this.filteredCategoryService.getProducts();
  }

  onSetCheckboxesState(filterChecked: boolean, filterValue: string) {
    this.categoryNames = this.setCategoryName(filterChecked, filterValue);
    this.setCheckboxesState.emit(this.categoryNames);
  }

  setCategoryName(filterChecked: boolean, filterValue: string) {
    let categoryNames = [...this.categoryNames];
    if (filterChecked) {
      categoryNames.push(filterValue);
    } else {
      categoryNames.splice(categoryNames.indexOf(filterValue), 1);
    }
    return categoryNames;
  }

  chooseAllCategoties() {
    this.categoryNames = [];
    this.setCheckboxesState.emit(this.categoryNames);
  }
}

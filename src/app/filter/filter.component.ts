import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ProductsCategory } from "../shared/productsCategory";
import { filteredCategoryService } from "../shared/filtered-category.service";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  productCategories: ProductsCategory[] = [];

  @Output()
  public chooseCategory = new EventEmitter();
  @Output()
  public removeCategory = new EventEmitter();
  @Output()
  public chooseAllCategories = new EventEmitter();

  // public allCategfoeries$ = this.allCategories.asObservable();

  constructor(private filteredCategoryService: filteredCategoryService) {}

  ngOnInit() {
    this.productCategories = this.filteredCategoryService.getProducts();
  }

  chooseCategoryName(filterChecked: boolean, filterValue: string) {
    if (filterChecked) {
      this.chooseCategory.emit(filterValue);
    } else {
      this.removeCategory.emit(filterValue);
    }
  }

  chooseAllCategoties() {
    this.chooseAllCategories.emit();
  }
}

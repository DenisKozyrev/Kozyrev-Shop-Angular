import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ProductsCategory } from "../productsCategory";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  productsCategory: ProductsCategory[] = [];

  filteredCategory: ProductsCategory[] = [];

  private categoriesName: string[] = [];

  @Output()
  public chooseCategory = new EventEmitter();
  @Output()
  public allCategories = new EventEmitter();

  public allCategfoeries$ = this.allCategories.asObservable();

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsCategory = this.productsService.getProducts();
  }

  onChooseCategory(filterChecked: boolean, filterValue) {
    this.categoryFilter(filterChecked, filterValue);
    this.chooseCategory.emit(this.filteredCategory);
  }

  chooseAllCategoties() {
    this.categoriesName = [];
    this.setFilteredProducts();
    this.allCategories.emit(this.filteredCategory);
    this.resetCheckboxes();
  }

  setFilteredProducts() {
    if (this.categoriesName.length === 0) {
      this.filteredCategory = [...this.productsCategory];
    } else {
      this.filteredCategory = this.categoriesName.map(category => {
        return this.productsCategory.find(product => {
          return product.name === category;
        });
      });
    }
  }

  categoryFilter(filterChecked: boolean, filterValue) {
    if (filterChecked) {
      this.categoriesName.push(filterValue);
    } else {
      this.categoriesName.splice(this.categoriesName.indexOf(filterValue), 1);
    }
    this.setFilteredProducts();
  }

  resetCheckboxes() {
    let checkboxes = document.getElementsByName("categoryCheckbox");
    Array.from(checkboxes).forEach(checkbox => {
      (checkbox as HTMLInputElement).checked = false;
    });
  }
}

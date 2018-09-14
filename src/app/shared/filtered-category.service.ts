import { Injectable } from "@angular/core";
import { PRODUCTS } from "./mock-products";
import { ProductsCategory } from "./productsCategory";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class filteredCategoryService {
  products: ProductsCategory[] = PRODUCTS;

  filteredCategories$: Subject<ProductsCategory[]> = new Subject<
    ProductsCategory[]
  >();

  filteredCategoriesBlock: ProductsCategory[] = [];

  categoryNames: string[] = [];

  getProducts(): ProductsCategory[] {
    return this.products;
  }

  getfilteredCategories() {
    return this.filteredCategories$;
  }

  pushToFilteredProductsSubject(filteredCategories: ProductsCategory[]) {
    this.filteredCategories$.next(filteredCategories);
  }

  setCheckboxesState(checkboxes) {
    this.categoryNames = checkboxes;
    this.filteredCategoriesBlock = this.filterCategories(
      this.filteredCategoriesBlock,
      this.categoryNames
    );
    this.pushToFilteredProductsSubject(this.filteredCategoriesBlock);
  }

  filterCategories(filteredCategories: ProductsCategory[], categoriesName) {
    if (this.categoryNames.length === 0) {
      return (filteredCategories = [...this.products]);
    } else {
      return (filteredCategories = this.categoryNames.map(category => {
        return this.products.find(product => {
          return product.name === category;
        });
      }));
    }
  }

  chooseAllCategoties() {
    this.categoryNames = [];
    this.filteredCategoriesBlock = this.filterCategories(
      this.filteredCategoriesBlock,
      this.categoryNames
    );
    this.pushToFilteredProductsSubject(this.filteredCategoriesBlock);
    this.resetCheckboxes();
  }

  resetCheckboxes() {
    let checkboxes = document.getElementsByName("categoryCheckbox");
    Array.from(checkboxes).forEach(checkbox => {
      (checkbox as HTMLInputElement).checked = false;
    });
  }

  filterProductsByName() {
    this.products.forEach(category => {
      category.products.sort((a, b) => {
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    });
  }

  filterProductsByPrice() {
    this.products.forEach(category => {
      category.products.sort((a, b) => {
        return a.price - b.price;
      });
    });
  }
}

import { Injectable } from "@angular/core";
import { PRODUCTS } from "./mock-products";
import { ProductsCategory } from "./productsCategory";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class filteredCategoryService {
  productsCategory: ProductsCategory[] = PRODUCTS;

  filteredCategories$: Subject<ProductsCategory[]> = new Subject<
    ProductsCategory[]
  >();

  filteredCategoriesBlock: ProductsCategory[] = [];

  getProducts(): ProductsCategory[] {
    return this.productsCategory;
  }
  getfilteredCategories() {
    return this.filteredCategories$;
  }

  pushToFilteredProductsSubject(filteredCategories: ProductsCategory[]) {
    this.filteredCategories$.next(filteredCategories);
  }

  setCheckboxesState(checkboxes) {
    this.filteredCategoriesBlock = this.filterCategories(
      this.filteredCategoriesBlock,
      checkboxes
    );
    this.pushToFilteredProductsSubject(this.filteredCategoriesBlock);
  }

  filterCategories(filteredCategories: ProductsCategory[], categoriesNames) {
    if (categoriesNames.length === 0) {
      this.resetCheckboxes();
      return (filteredCategories = [...this.productsCategory]);
    } else {
      return (filteredCategories = categoriesNames.map(category => {
        return this.productsCategory.find(product => {
          return product.name === category;
        });
      }));
    }
  }

  resetCheckboxes() {
    let checkboxes = document.getElementsByName("categoryCheckbox");
    Array.from(checkboxes).forEach(checkbox => {
      (checkbox as HTMLInputElement).checked = false;
    });
  }

  filterProductsBy(sortingValue) {
    let sortedProducts;
    if (this.filteredCategoriesBlock.length === 0) {
      sortedProducts = [...this.productsCategory];
    } else {
      sortedProducts = [...this.filteredCategoriesBlock];
    }
    if (sortingValue === "name") {
      sortedProducts.forEach(category => {
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
      sortedProducts = [...sortedProducts];
    } else if (sortingValue === "price") {
      sortedProducts.forEach(category => {
        category.products.sort((a, b) => {
          return a.price - b.price;
        });
      });
      sortedProducts = [...sortedProducts];
    }
    this.pushToFilteredProductsSubject(sortedProducts);
  }
}

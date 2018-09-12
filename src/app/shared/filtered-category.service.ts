import { Injectable } from "@angular/core";
import { PRODUCTS } from "./mock-products";
import { ProductsCategory } from "./productsCategory";

@Injectable({
  providedIn: "root"
})
export class filteredCategoryService {
  products: ProductsCategory[] = PRODUCTS;

  filteredCategories: ProductsCategory[] = this.products;

  categoryNames: string[] = [];

  getProducts(): ProductsCategory[] {
    return this.products;
  }

  getfilteredCategories() {
    return this.filteredCategories;
  }

  setCategoryName(name: string) {
    this.categoryNames.push(name);
    this.filteredCategories = this.filterCategories(
      this.filteredCategories,
      this.categoryNames
    );
  }

  removeCategoryName(name: string) {
    this.categoryNames.splice(this.categoryNames.indexOf(name), 1);
    this.filteredCategories = this.filterCategories(
      this.filteredCategories,
      this.categoryNames
    );
  }

  filterCategories(filteredCategory: ProductsCategory[], categoriesName) {
    if (this.categoryNames.length === 0) {
      return (filteredCategory = [...this.products]);
    } else {
      return (filteredCategory = this.categoryNames.map(category => {
        return this.products.find(product => {
          return product.name === category;
        });
      }));
    }
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

  chooseAllCategoties() {
    this.categoryNames = [];
    this.filteredCategories = this.filterCategories(
      this.filteredCategories,
      this.categoryNames
    );
    this.resetCheckboxes();
  }

  resetCheckboxes() {
    let checkboxes = document.getElementsByName("categoryCheckbox");
    Array.from(checkboxes).forEach(checkbox => {
      (checkbox as HTMLInputElement).checked = false;
    });
  }
}

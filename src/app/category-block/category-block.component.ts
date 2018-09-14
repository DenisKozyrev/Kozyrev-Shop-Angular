import { Component, OnInit, Input } from "@angular/core";
import { ProductsCategory } from "../shared/productsCategory";
import { Subject } from "rxjs";
import { filteredCategoryService } from "../shared/filtered-category.service";

@Component({
  selector: "app-category-block",
  templateUrl: "./category-block.component.html",
  styleUrls: ["./category-block.component.css"]
})
export class CategoryBlockComponent implements OnInit {
  products: ProductsCategory[] = this.filteredCategoryService.getProducts();

  filteredCategoriesBlock: ProductsCategory[] = this.products;

  filteredCategories$: Subject<ProductsCategory[]>;

  constructor(private filteredCategoryService: filteredCategoryService) {}

  ngOnInit() {
    this.filteredCategories$ = this.filteredCategoryService.getfilteredCategories();
    this.filteredCategories$.subscribe(data => {
      this.filteredCategoriesBlock = data;
    });
  }
}

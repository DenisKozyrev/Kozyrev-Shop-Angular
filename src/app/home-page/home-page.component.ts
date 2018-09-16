import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ProductsCategory } from "../shared/productsCategory";
import { Subject } from "rxjs";
import { filteredCategoryService } from "../shared/filtered-category.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  title = "KozyrevShop";

  filteredCategoriesBlock: ProductsCategory[] = this.filteredCategoryService.getProducts();

  filteredCategories$: Subject<ProductsCategory[]>;

  constructor(private filteredCategoryService: filteredCategoryService) {}

  ngOnInit() {
    this.filteredCategories$ = this.filteredCategoryService.getfilteredCategories();
    this.filteredCategories$.subscribe(data => {
      this.filteredCategoriesBlock = [...data];
    });
  }

  onSetCheckboxesState(checkboxes) {
    this.filteredCategoryService.setCheckboxesState(checkboxes);
  }
}

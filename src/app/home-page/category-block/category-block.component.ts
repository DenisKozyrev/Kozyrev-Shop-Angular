import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { ProductsCategory } from "../../shared/productsCategory";
import { filteredCategoryService } from "../../shared/filtered-category.service";

@Component({
  selector: "app-category-block",
  templateUrl: "./category-block.component.html",
  styleUrls: ["./category-block.component.css"]
})
export class CategoryBlockComponent {
  @Input()
  filteredCategoriesBlock: ProductsCategory[];

  constructor(private filteredCategoryService: filteredCategoryService) {}

  onSetSotringValue(sortingValue) {
    this.filteredCategoryService.filterProductsBy(sortingValue);
  }
}

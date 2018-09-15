import { Component, Input } from "@angular/core";
import { ProductsCategory } from "../../shared/productsCategory";

@Component({
  selector: "app-category-block",
  templateUrl: "./category-block.component.html",
  styleUrls: ["./category-block.component.css"]
})
export class CategoryBlockComponent {
  @Input()
  filteredCategoriesBlock: ProductsCategory[];
}

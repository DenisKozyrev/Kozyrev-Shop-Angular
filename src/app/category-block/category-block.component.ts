import { Component, OnInit, Input } from "@angular/core";
import { ProductsCategory } from "../shared/productsCategory";

@Component({
  selector: "app-category-block",
  templateUrl: "./category-block.component.html",
  styleUrls: ["./category-block.component.css"]
})
export class CategoryBlockComponent implements OnInit {
  @Input()
  public filteredCategory: ProductsCategory[] = [];

  ngOnInit() {}
}

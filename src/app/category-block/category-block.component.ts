import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { ProductsCategory } from "../productsCategory";

@Component({
  selector: "app-category-block",
  templateUrl: "./category-block.component.html",
  styleUrls: ["./category-block.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryBlockComponent implements OnInit {
  @Input()
  public filteredCategory: ProductsCategory[] = [];

  ngOnInit() {}
}

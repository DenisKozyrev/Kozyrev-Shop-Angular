import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter } from "events";
import { filteredCategoryService } from "../shared/filtered-category.service";
@Component({
  selector: "app-clothes-sorting",
  templateUrl: "./sorting.component.html",
  styleUrls: ["./sorting.component.css"]
})
export class SortingComponent implements OnInit {
  @Output()
  public sortingValue: EventEmitter = new EventEmitter();

  constructor(private filteredCategoryService: filteredCategoryService) {}

  ngOnInit() {}

  chooseSortingValue() {
    let sortingValue = (document.getElementById(
      "sortingSelect"
    ) as HTMLInputElement).value;
    if (sortingValue === "name") {
      this.filteredCategoryService.filterProductsByName();
    } else if (sortingValue === "price") {
      this.filteredCategoryService.filterProductsByPrice();
    }
  }
}

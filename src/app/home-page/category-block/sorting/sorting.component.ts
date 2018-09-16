import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-clothes-sorting",
  templateUrl: "./sorting.component.html",
  styleUrls: ["./sorting.component.css"]
})
export class SortingComponent {
  @Output()
  setSortingValue = new EventEmitter();

  sortingValue: string;

  onSetSortingValue() {
    this.sortingValue = (document.getElementById(
      "sortingSelect"
    ) as HTMLInputElement).value;
    this.setSortingValue.emit(this.sortingValue);
  }
}

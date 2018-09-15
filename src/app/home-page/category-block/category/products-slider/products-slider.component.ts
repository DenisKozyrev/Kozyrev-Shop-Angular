import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Product } from "../../../../shared/product";

@Component({
  selector: "app-products-slider",
  templateUrl: "./products-slider.component.html",
  styleUrls: ["./products-slider.component.css"]
})
export class ProductsSliderComponent implements OnInit {
  @Input()
  public productsCollection: Product[] = [];

  @Output()
  pageChange = new EventEmitter();

  allPages: number;

  currentPage: number = 1;

  constructor() {}

  ngOnInit() {
    this.allPages = Math.ceil(this.productsCollection.length / 3);
  }

  onPageChange(currentPage) {
    this.pageChange.emit(currentPage);
  }
  previousPage() {
    this.currentPage;
    if (this.currentPage !== 1) {
      this.currentPage -= 1;
    }
    this.onPageChange(this.currentPage);
  }

  nextPage() {
    this.currentPage;
    if (this.currentPage < this.allPages) {
      this.currentPage += 1;
    }
    this.onPageChange(this.currentPage);
  }
}

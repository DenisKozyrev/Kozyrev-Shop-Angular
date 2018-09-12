import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../../shared/product";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  @Input()
  public categoryName: string = "";
  @Input()
  public productsCollection: Product[] = [];

  constructor() {}

  ngOnInit() {}
}

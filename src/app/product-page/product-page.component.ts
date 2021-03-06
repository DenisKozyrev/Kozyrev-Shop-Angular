import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"]
})
export class ProductPageComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {}

  product: Object;

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(data => {
      this.product = data;
    });
  }
}

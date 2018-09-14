import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { FilterComponent } from "./filter/filter.component";
import { CategoryComponent } from "./category-block/category/category.component";
import { CategoryBlockComponent } from "./category-block/category-block.component";
import { ProductComponent } from "./product/product.component";
import { SortingComponent } from "./sorting/sorting.component";
import { ProductPageComponent } from "./product-page/product-page.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes = [
  { path: "", component: HomePageComponent },
  { path: "product", component: ProductPageComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    FilterComponent,
    SortingComponent,
    CategoryComponent,
    CategoryBlockComponent,
    ProductComponent,
    ProductPageComponent,
    HomePageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

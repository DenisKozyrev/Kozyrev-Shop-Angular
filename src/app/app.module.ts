import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { FilterComponent } from "./home-page/filter/filter.component";
import { CategoryComponent } from "./home-page/category-block/category/category.component";
import { CategoryBlockComponent } from "./home-page/category-block/category-block.component";
import { ProductComponent } from "./home-page/category-block/category/product/product.component";
import { SortingComponent } from "./home-page/category-block/sorting/sorting.component";
import { ProductPageComponent } from "./product-page/product-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ProductsSliderComponent } from "./home-page/category-block/category/products-slider/products-slider.component";

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
    HomePageComponent,
    ProductsSliderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

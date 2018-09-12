import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { FilterComponent } from "./filter/filter.component";
import { CategoryComponent } from "./category-block/category/category.component";
import { CategoryBlockComponent } from "./category-block/category-block.component";
import { ProductComponent } from "./product/product.component";
import { SortingComponent } from "./sorting/sorting.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    FilterComponent,
    SortingComponent,
    CategoryComponent,
    CategoryBlockComponent,
    ProductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

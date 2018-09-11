import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
// import { ProductFilterPipe } from "./products-filter.pipe";
import { AppComponent } from "./app.component";
import { FilterComponent } from "./filter/filter.component";
import { CategoryComponent } from "./category-block/category/category.component";
import { CategoryBlockComponent } from "./category-block/category-block.component";
import { ProductComponent } from "./product/product.component";
import { SortingComponent } from "./sorting/sorting.component";
// import { CategoryFilterPipe } from "./categoryFilter.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    FilterComponent,
    SortingComponent,
    CategoryComponent,
    CategoryBlockComponent,
    ProductComponent
    // CategoryFilterPipe,
    // ProductFilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

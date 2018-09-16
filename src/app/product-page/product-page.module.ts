import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductPageComponent } from "./product-page.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{ path: "", component: ProductPageComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ProductPageComponent]
})
export class ProductPageModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FilterComponent } from "./filter/filter.component";
import { GenderPipe } from "./gender.pipe";
import { ClothesBlockComponent } from './clothes-block/clothes-block.component';
import { ClothesBoxComponent } from './clothes-box/clothes-box.component';
import { ClothesSortingComponent } from './clothes-sorting/clothes-sorting.component';
import { GenderBlockPipe } from './gender-block.pipe';

@NgModule({
  declarations: [AppComponent, FilterComponent, GenderPipe, ClothesBlockComponent, ClothesBoxComponent, ClothesSortingComponent, GenderBlockPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

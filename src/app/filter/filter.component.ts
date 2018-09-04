import { Component, OnInit } from "@angular/core";
import { ClothesService } from "../clothes.service";
import { Clothes } from "../clothes";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  public genderCollection: any[] = [];

  public clothesBoxes: Clothes[] = [];

  public gender: any[] = [];

  constructor(private clothesService: ClothesService) {}

  getClothes(): void {
    this.clothesBoxes = this.clothesService.getClothes();
  }

  genderBlockFilter(): void {
    this.clothesBoxes.forEach(box => {
      if (!this.genderCollection.includes(box.gender)) {
        this.genderCollection.push(box.gender);
      }
    });
  }

  ngOnInit() {
    this.getClothes();
    this.genderBlockFilter();
  }

  public toggle(clothesfilter: boolean, event) {
    if (clothesfilter) {
      this.gender = [...this.gender, event.target.value];
    } else {
      this.gender.splice(this.gender.indexOf(event.target.value), 1);
      this.gender = [...this.gender];
    }
  }
}

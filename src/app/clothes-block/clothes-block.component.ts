import { Component, OnInit, Input } from "@angular/core";
import { ClothesService } from "../clothes.service";
import { Clothes } from "../clothes";

@Component({
  selector: "app-clothes-block",
  templateUrl: "./clothes-block.component.html",
  styleUrls: ["./clothes-block.component.css"]
})
export class ClothesBlockComponent implements OnInit {
  @Input()
  public gender: string = "";
  clothesBoxes: Clothes[] = [];

  constructor(private clothesService: ClothesService) {}

  ngOnInit() {
    this.clothesBoxes = this.clothesService.getClothes();
  }
}

import { Injectable } from "@angular/core";
import { CLOTHES } from "./mock-clothes";

@Injectable({
  providedIn: "root"
})
export class ClothesService {
  constructor() {}

  getClothes() {
    return CLOTHES;
  }
}

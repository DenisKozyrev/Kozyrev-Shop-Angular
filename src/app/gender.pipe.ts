import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "genderFilter"
})
export class GenderPipe implements PipeTransform {
  transform(allClothes: any[], gender: string): any {
    if (!allClothes || !gender) {
      return allClothes;
    } else {
      return allClothes.filter(clothes => clothes.gender === gender);
    }
  }
}

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "genderBlockFilter"
})
export class GenderBlockPipe implements PipeTransform {
  transform(allClothes: any[], gender: any[]): any {
    if (!allClothes || gender.length === 0) {
      console.log(allClothes, gender);
      return allClothes;
    } else {
      console.log(allClothes, gender);
      return allClothes.filter(clothes => gender.includes(clothes));
    }
  }
}

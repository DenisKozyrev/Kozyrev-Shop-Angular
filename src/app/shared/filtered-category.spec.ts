import { TestBed, inject } from "@angular/core/testing";

import { filteredCategoryService } from "./filtered-category.service";

describe("filteredCategoryService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [filteredCategoryService]
    });
  });

  it("should be created", inject(
    [filteredCategoryService],
    (service: filteredCategoryService) => {
      expect(service).toBeTruthy();
    }
  ));
});

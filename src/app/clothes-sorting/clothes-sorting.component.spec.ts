import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesSortingComponent } from './clothes-sorting.component';

describe('ClothesSortingComponent', () => {
  let component: ClothesSortingComponent;
  let fixture: ComponentFixture<ClothesSortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesSortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

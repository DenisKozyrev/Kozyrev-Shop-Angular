import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesBoxComponent } from './clothes-box.component';

describe('ClothesBoxComponent', () => {
  let component: ClothesBoxComponent;
  let fixture: ComponentFixture<ClothesBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

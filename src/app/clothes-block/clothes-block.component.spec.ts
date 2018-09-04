import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesBlockComponent } from './clothes-block.component';

describe('ClothesBlockComponent', () => {
  let component: ClothesBlockComponent;
  let fixture: ComponentFixture<ClothesBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

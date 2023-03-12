import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllProductsComponent } from './show-all-products.component';

describe('ShowAllProductsComponent', () => {
  let component: ShowAllProductsComponent;
  let fixture: ComponentFixture<ShowAllProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

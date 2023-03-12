import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserOrdersComponent } from './all-user-orders.component';

describe('AllUserOrdersComponent', () => {
  let component: AllUserOrdersComponent;
  let fixture: ComponentFixture<AllUserOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUserOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUserOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

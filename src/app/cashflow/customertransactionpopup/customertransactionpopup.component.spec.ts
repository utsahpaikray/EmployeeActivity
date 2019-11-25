import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomertransactionpopupComponent } from './customertransactionpopup.component';

describe('CustomertransactionpopupComponent', () => {
  let component: CustomertransactionpopupComponent;
  let fixture: ComponentFixture<CustomertransactionpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomertransactionpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomertransactionpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

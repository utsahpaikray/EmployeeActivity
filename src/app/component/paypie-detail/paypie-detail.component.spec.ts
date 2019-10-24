import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypieDetailComponent } from './paypie-detail.component';

describe('PaypieDetailComponent', () => {
  let component: PaypieDetailComponent;
  let fixture: ComponentFixture<PaypieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

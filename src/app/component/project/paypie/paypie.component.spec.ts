import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypieComponent } from './paypie.component';

describe('PaypieComponent', () => {
  let component: PaypieComponent;
  let fixture: ComponentFixture<PaypieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

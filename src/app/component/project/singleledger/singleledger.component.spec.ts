import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleledgerComponent } from './singleledger.component';

describe('SingleledgerComponent', () => {
  let component: SingleledgerComponent;
  let fixture: ComponentFixture<SingleledgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleledgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleledgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

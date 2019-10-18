import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickpieComponent } from './slickpie.component';

describe('SlickpieComponent', () => {
  let component: SlickpieComponent;
  let fixture: ComponentFixture<SlickpieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlickpieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlickpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

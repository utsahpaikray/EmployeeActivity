import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDialogOverviewExampleDialogComponent } from './dialog-dialog-overview-example-dialog.component';

describe('DialogDialogOverviewExampleDialogComponent', () => {
  let component: DialogDialogOverviewExampleDialogComponent;
  let fixture: ComponentFixture<DialogDialogOverviewExampleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDialogOverviewExampleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDialogOverviewExampleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

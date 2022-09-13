import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTrackerComponent } from './change-tracker.component';

describe('ChangeTrackerComponent', () => {
  let component: ChangeTrackerComponent;
  let fixture: ComponentFixture<ChangeTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

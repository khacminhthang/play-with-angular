import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingDatabaseComponent } from './existing-database.component';

describe('ExistingDatabaseComponent', () => {
  let component: ExistingDatabaseComponent;
  let fixture: ComponentFixture<ExistingDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

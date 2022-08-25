import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitOfWorkComponent } from './unit-of-work.component';

describe('UnitOfWorkComponent', () => {
  let component: UnitOfWorkComponent;
  let fixture: ComponentFixture<UnitOfWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitOfWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitOfWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

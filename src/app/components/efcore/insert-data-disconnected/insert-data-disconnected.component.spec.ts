import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDataDisconnectedComponent } from './insert-data-disconnected.component';

describe('InsertDataDisconnectedComponent', () => {
  let component: InsertDataDisconnectedComponent;
  let fixture: ComponentFixture<InsertDataDisconnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDataDisconnectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDataDisconnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

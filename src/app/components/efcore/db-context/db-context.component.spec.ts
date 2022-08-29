import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbContextComponent } from './db-context.component';

describe('DbContextComponent', () => {
  let component: DbContextComponent;
  let fixture: ComponentFixture<DbContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbContextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

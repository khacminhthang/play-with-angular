import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneToManyConventionsComponent } from './one-to-many-conventions.component';

describe('OneToManyConventionsComponent', () => {
  let component: OneToManyConventionsComponent;
  let fixture: ComponentFixture<OneToManyConventionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneToManyConventionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneToManyConventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

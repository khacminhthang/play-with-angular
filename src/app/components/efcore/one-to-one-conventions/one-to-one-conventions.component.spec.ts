import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneToOneConventionsComponent } from './one-to-one-conventions.component';

describe('OneToOneConventionsComponent', () => {
  let component: OneToOneConventionsComponent;
  let fixture: ComponentFixture<OneToOneConventionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneToOneConventionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneToOneConventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

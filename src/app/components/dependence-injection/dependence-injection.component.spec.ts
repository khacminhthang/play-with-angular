import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependenceInjectionComponent } from './dependence-injection.component';

describe('DependenceInjectionComponent', () => {
  let component: DependenceInjectionComponent;
  let fixture: ComponentFixture<DependenceInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependenceInjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependenceInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

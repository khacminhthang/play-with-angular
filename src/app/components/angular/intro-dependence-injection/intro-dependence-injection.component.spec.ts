import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroDependenceInjectionComponent } from './intro-dependence-injection.component';

describe('IntroDependenceInjectionComponent', () => {
  let component: IntroDependenceInjectionComponent;
  let fixture: ComponentFixture<IntroDependenceInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroDependenceInjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroDependenceInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

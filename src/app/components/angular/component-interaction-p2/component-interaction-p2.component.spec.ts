import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionP2Component } from './component-interaction-p2.component';

describe('ComponentInteractionP2Component', () => {
  let component: ComponentInteractionP2Component;
  let fixture: ComponentFixture<ComponentInteractionP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInteractionP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractionP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardsAndResolversPart1Component } from './guards-and-resolvers-part1.component';

describe('GuardsAndResolversPart1Component', () => {
  let component: GuardsAndResolversPart1Component;
  let fixture: ComponentFixture<GuardsAndResolversPart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardsAndResolversPart1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardsAndResolversPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

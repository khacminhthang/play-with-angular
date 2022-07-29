import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardsAndResolversPart2Component } from './guards-and-resolvers-part2.component';

describe('GuardsAndResolversPart2Component', () => {
  let component: GuardsAndResolversPart2Component;
  let fixture: ComponentFixture<GuardsAndResolversPart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardsAndResolversPart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardsAndResolversPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

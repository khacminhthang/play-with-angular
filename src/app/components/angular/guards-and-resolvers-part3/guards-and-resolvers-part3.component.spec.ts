import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardsAndResolversPart3Component } from './guards-and-resolvers-part3.component';

describe('GuardsAndResolversPart3Component', () => {
  let component: GuardsAndResolversPart3Component;
  let fixture: ComponentFixture<GuardsAndResolversPart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardsAndResolversPart3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardsAndResolversPart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

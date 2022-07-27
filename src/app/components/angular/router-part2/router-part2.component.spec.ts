import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterPart2Component } from './router-part2.component';

describe('RouterPart2Component', () => {
  let component: RouterPart2Component;
  let fixture: ComponentFixture<RouterPart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterPart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

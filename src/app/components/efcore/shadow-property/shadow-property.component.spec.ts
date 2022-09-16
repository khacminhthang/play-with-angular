import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowPropertyComponent } from './shadow-property.component';

describe('ShadowPropertyComponent', () => {
  let component: ShadowPropertyComponent;
  let fixture: ComponentFixture<ShadowPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

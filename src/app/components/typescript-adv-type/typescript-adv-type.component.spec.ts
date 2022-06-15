import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptAdvTypeComponent } from './typescript-adv-type.component';

describe('TypescriptAdvTypeComponent', () => {
  let component: TypescriptAdvTypeComponent;
  let fixture: ComponentFixture<TypescriptAdvTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptAdvTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptAdvTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptDataTypeComponent } from './typescript-data-type.component';

describe('TypescriptDataTypeComponent', () => {
  let component: TypescriptDataTypeComponent;
  let fixture: ComponentFixture<TypescriptDataTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptDataTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptDataTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

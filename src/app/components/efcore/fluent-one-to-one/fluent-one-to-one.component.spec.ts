import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluentOneToOneComponent } from './fluent-one-to-one.component';

describe('FluentOneToOneComponent', () => {
  let component: FluentOneToOneComponent;
  let fixture: ComponentFixture<FluentOneToOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluentOneToOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluentOneToOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

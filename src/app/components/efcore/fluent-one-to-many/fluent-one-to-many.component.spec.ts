import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluentOneToManyComponent } from './fluent-one-to-many.component';

describe('FluentOneToManyComponent', () => {
  let component: FluentOneToManyComponent;
  let fixture: ComponentFixture<FluentOneToManyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluentOneToManyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluentOneToManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

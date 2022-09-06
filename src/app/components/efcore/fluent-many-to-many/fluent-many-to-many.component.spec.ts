import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluentManyToManyComponent } from './fluent-many-to-many.component';

describe('FluentManyToManyComponent', () => {
  let component: FluentManyToManyComponent;
  let fixture: ComponentFixture<FluentManyToManyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluentManyToManyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluentManyToManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

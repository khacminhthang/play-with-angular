import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluentApiComponent } from './fluent-api.component';

describe('FluentApiComponent', () => {
  let component: FluentApiComponent;
  let fixture: ComponentFixture<FluentApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluentApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluentApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsFilteringOperatorsComponent } from './rxjs-filtering-operators.component';

describe('RxjsFilteringOperatorsComponent', () => {
  let component: RxjsFilteringOperatorsComponent;
  let fixture: ComponentFixture<RxjsFilteringOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsFilteringOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsFilteringOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

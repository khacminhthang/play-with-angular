import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCreationOperatorsComponent } from './rxjs-creation-operators.component';

describe('RxjsCreationOperatorsComponent', () => {
  let component: RxjsCreationOperatorsComponent;
  let fixture: ComponentFixture<RxjsCreationOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsCreationOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsCreationOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

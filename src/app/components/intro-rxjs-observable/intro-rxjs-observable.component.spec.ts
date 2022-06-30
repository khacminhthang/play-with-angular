import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroRxjsObservableComponent } from './intro-rxjs-observable.component';

describe('IntroRxjsObservableComponent', () => {
  let component: IntroRxjsObservableComponent;
  let fixture: ComponentFixture<IntroRxjsObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroRxjsObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroRxjsObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsHoosComponent } from './rxjs-hoos.component';

describe('RxjsHoosComponent', () => {
  let component: RxjsHoosComponent;
  let fixture: ComponentFixture<RxjsHoosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsHoosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsHoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

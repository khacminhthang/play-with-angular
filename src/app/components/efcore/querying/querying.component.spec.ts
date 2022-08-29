import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryingComponent } from './querying.component';

describe('QueryingComponent', () => {
  let component: QueryingComponent;
  let fixture: ComponentFixture<QueryingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

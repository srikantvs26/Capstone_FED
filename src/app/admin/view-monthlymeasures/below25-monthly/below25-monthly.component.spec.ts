import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Below25MonthlyComponent } from './below25-monthly.component';

describe('Below25MonthlyComponent', () => {
  let component: Below25MonthlyComponent;
  let fixture: ComponentFixture<Below25MonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Below25MonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Below25MonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

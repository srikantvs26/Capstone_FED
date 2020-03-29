import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Above25MonthlyComponent } from './above25-monthly.component';

describe('Above25MonthlyComponent', () => {
  let component: Above25MonthlyComponent;
  let fixture: ComponentFixture<Above25MonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Above25MonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Above25MonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyMeasurementsComponent } from './monthly-measurements.component';

describe('MonthlyMeasurementsComponent', () => {
  let component: MonthlyMeasurementsComponent;
  let fixture: ComponentFixture<MonthlyMeasurementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyMeasurementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMonthlyComponent } from './view-monthly.component';

describe('ViewMonthlyComponent', () => {
  let component: ViewMonthlyComponent;
  let fixture: ComponentFixture<ViewMonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMonthlymeasuresComponent } from './view-monthlymeasures.component';

describe('ViewMonthlymeasuresComponent', () => {
  let component: ViewMonthlymeasuresComponent;
  let fixture: ComponentFixture<ViewMonthlymeasuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMonthlymeasuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMonthlymeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

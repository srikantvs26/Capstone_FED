import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDailyComponent } from './view-daily.component';

describe('ViewDailyComponent', () => {
  let component: ViewDailyComponent;
  let fixture: ComponentFixture<ViewDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

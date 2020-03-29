import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDailylogsComponent } from './view-dailylogs.component';

describe('ViewDailylogsComponent', () => {
  let component: ViewDailylogsComponent;
  let fixture: ComponentFixture<ViewDailylogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDailylogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDailylogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

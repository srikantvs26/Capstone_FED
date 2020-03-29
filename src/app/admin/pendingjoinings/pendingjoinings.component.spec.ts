import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingjoiningsComponent } from './pendingjoinings.component';

describe('PendingjoiningsComponent', () => {
  let component: PendingjoiningsComponent;
  let fixture: ComponentFixture<PendingjoiningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingjoiningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingjoiningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

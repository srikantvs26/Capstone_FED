import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Below25Component } from './below25.component';

describe('Below25Component', () => {
  let component: Below25Component;
  let fixture: ComponentFixture<Below25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Below25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Below25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

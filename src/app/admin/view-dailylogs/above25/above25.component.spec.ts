import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Above25Component } from './above25.component';

describe('Above25Component', () => {
  let component: Above25Component;
  let fixture: ComponentFixture<Above25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Above25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Above25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

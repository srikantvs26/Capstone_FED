import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Abovebmi25Component } from './abovebmi25.component';

describe('Abovebmi25Component', () => {
  let component: Abovebmi25Component;
  let fixture: ComponentFixture<Abovebmi25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abovebmi25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Abovebmi25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

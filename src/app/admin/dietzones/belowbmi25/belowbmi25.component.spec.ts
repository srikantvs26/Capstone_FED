import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Belowbmi25Component } from './belowbmi25.component';

describe('Belowbmi25Component', () => {
  let component: Belowbmi25Component;
  let fixture: ComponentFixture<Belowbmi25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Belowbmi25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Belowbmi25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

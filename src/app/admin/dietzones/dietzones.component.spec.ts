import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietzonesComponent } from './dietzones.component';

describe('DietzonesComponent', () => {
  let component: DietzonesComponent;
  let fixture: ComponentFixture<DietzonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietzonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietzonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

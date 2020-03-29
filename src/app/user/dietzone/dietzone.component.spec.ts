import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietzoneComponent } from './dietzone.component';

describe('DietzoneComponent', () => {
  let component: DietzoneComponent;
  let fixture: ComponentFixture<DietzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

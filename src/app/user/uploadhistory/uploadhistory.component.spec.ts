import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadhistoryComponent } from './uploadhistory.component';

describe('UploadhistoryComponent', () => {
  let component: UploadhistoryComponent;
  let fixture: ComponentFixture<UploadhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

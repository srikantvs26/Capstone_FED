import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTimelineComponent } from './chat-timeline.component';

describe('ChatTimelineComponent', () => {
  let component: ChatTimelineComponent;
  let fixture: ComponentFixture<ChatTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

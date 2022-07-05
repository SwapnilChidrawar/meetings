import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleNewMeetingComponent } from './schedule-new-meeting.component';

describe('ScheduleNewMeetingComponent', () => {
  let component: ScheduleNewMeetingComponent;
  let fixture: ComponentFixture<ScheduleNewMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleNewMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleNewMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

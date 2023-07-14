import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfCourseEditComponent } from './golf-course-edit.component';

describe('GolfCourseEditComponent', () => {
  let component: GolfCourseEditComponent;
  let fixture: ComponentFixture<GolfCourseEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolfCourseEditComponent]
    });
    fixture = TestBed.createComponent(GolfCourseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

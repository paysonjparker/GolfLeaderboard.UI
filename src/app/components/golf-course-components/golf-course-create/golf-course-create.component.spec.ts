import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfCourseCreateComponent } from './golf-course-create.component';

describe('GolfCourseCreateComponent', () => {
  let component: GolfCourseCreateComponent;
  let fixture: ComponentFixture<GolfCourseCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolfCourseCreateComponent]
    });
    fixture = TestBed.createComponent(GolfCourseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

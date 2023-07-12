import { Component } from '@angular/core';

@Component({
  selector: 'app-golf-course-list',
  templateUrl: './golf-course-list.component.html',
  styleUrls: ['./golf-course-list.component.css']
})
export class GolfCourseListComponent {

  golfCourses!: any[];

  ngOnInit(){
    this.golfCourses = [
      {
        name: "Grays Harbor Country Club",
        location: "Aberdeen, WA",
        slopeRating: 120,
        courseRating: 68.0,
        yardage: 5758,
        par: 70,
      },
      {
        name: "Augusta National Golf Club",
        location: "Augusta, GA",
        slopeRating: 135,
        courseRating: 74.0,
        yardage: 7475,
        par: 72,
      }
    ];
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-golf-course-list',
  templateUrl: './golf-course-list.component.html',
  styleUrls: ['./golf-course-list.component.css']
})
export class GolfCourseListComponent {

  golfCourses!: any[];

  selectedGolfCourse!: any;

  constructor(private router: Router){
    
  }

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

  onSelectGolfCourse(golfCourseName: string){
    console.log(golfCourseName);
    this.router.navigate(['/golf-course/' + golfCourseName]);
  }
}

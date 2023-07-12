import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GolfCourse } from 'src/app/models/golf-course';
import { GolfCourseServiceService } from 'src/app/services/golf-course-service.service';

@Component({
  selector: 'app-golf-course',
  templateUrl: './golf-course.component.html',
  styleUrls: ['./golf-course.component.css']
})
export class GolfCourseComponent {

  @Input()
  golfCourse!: GolfCourse;

  constructor(private router: Router, private route: ActivatedRoute, private service: GolfCourseServiceService){
    
  }

  ngOnInit(){
    console.log(this.route.snapshot.params['Id']);
    this.service.getGolfCourseById(this.route.snapshot.params['Id'],(golfCourse: GolfCourse) => this.golfCourse = golfCourse);
    console.log(this.golfCourse);
  }
}

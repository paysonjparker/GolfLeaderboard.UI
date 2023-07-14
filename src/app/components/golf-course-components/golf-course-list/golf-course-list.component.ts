import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GolfCourse } from 'src/app/models/golf-course';
import { GolfCourseServiceService } from 'src/app/services/golf-course-service.service';


@Component({
  selector: 'app-golf-course-list',
  templateUrl: './golf-course-list.component.html',
  styleUrls: ['./golf-course-list.component.css']
})
export class GolfCourseListComponent {

  @Input()
  golfCourse!: GolfCourse;

  golfCourses: GolfCourse[] = [];

  selectedGolfCourse!: any;

  constructor(private router: Router, private service: GolfCourseServiceService){
    
  }

  ngOnInit(){
    this.service.getGolfCourses((golfCourses: GolfCourse[]) => this.golfCourses = golfCourses);
    console.log(this.golfCourses);
  }

  onSelectGolfCourse(golfCourseId: string){
    console.log(golfCourseId);
    this.router.navigate(['/golf-course/' + golfCourseId]);
  }
}

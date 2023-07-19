import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GolfCourse } from 'src/app/models/golf-course';
import { GolfCourseRequest } from 'src/app/models/golf-course-request';
import { GolfCourseServiceService } from 'src/app/services/golf-course-service.service';

@Component({
  selector: 'app-golf-course-create',
  templateUrl: './golf-course-create.component.html',
  styleUrls: ['./golf-course-create.component.css']
})
export class GolfCourseCreateComponent {

  golfCourse: GolfCourse = {
    id: "",
    name: "",
    location: "",
    slopeRating: 0,
    courseRating: 0,
    yardage: 0,
    par: 0
  };

  constructor(private router: Router, private route: ActivatedRoute, private service: GolfCourseServiceService, private formBuilder: FormBuilder) {

  }


  onSubmit() {
    const golfCourseRequest: GolfCourseRequest = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      location: (document.getElementById("location") as HTMLInputElement).value,
      slopeRating: Number((document.getElementById("slopeRating") as HTMLInputElement).value),
      courseRating: Number((document.getElementById("courseRating") as HTMLInputElement).value),
      yardage: Number((document.getElementById("yardage") as HTMLInputElement).value),
      par: Number((document.getElementById("par") as HTMLInputElement).value),
    };
    let status = this.service.createGolfCourse(golfCourseRequest, () => {
      console.log("Success create a Golf Course");
    });    
    this.router.navigate(['/golf-course-list']);
  }

  onCancel(){
    history.back();
  }
}

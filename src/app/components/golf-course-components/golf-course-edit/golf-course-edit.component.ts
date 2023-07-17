import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GolfCourse } from 'src/app/models/golf-course';
import { GolfCourseServiceService } from 'src/app/services/golf-course-service.service';

@Component({
  selector: 'app-golf-course-edit',
  templateUrl: './golf-course-edit.component.html',
  styleUrls: ['./golf-course-edit.component.css']
})
export class GolfCourseEditComponent {

  golfCourseEditForm!: FormGroup;

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

  ngOnInit() {
    // this.golfCourseEditForm = this.createGolfCourseEditForm();
    var id = this.route.snapshot.params['Id'];
    this.service.getGolfCourseById(id).subscribe((golfCourse: GolfCourse) => this.golfCourse = golfCourse);
  }

  onSubmit() {
    const golfCourseRequest: GolfCourse = {
      id: this.route.snapshot.params['Id'],
      name: (document.getElementById("name") as HTMLInputElement).value,
      location: (document.getElementById("location") as HTMLInputElement).value,
      slopeRating: Number((document.getElementById("slopeRating") as HTMLInputElement).value),
      courseRating: Number((document.getElementById("courseRating") as HTMLInputElement).value),
      yardage: Number((document.getElementById("yardage") as HTMLInputElement).value),
      par: Number((document.getElementById("par") as HTMLInputElement).value),
    };
    console.log(golfCourseRequest);
    this.service.updateProduct(golfCourseRequest.id, golfCourseRequest).subscribe((golfCourse: GolfCourse) => this.golfCourse = golfCourse);
    this.router.navigate(['/golf-course/' + golfCourseRequest.id]);
  }

  onCancel(){
    this.router.navigate(['/golf-course/' + this.route.snapshot.params['Id']]);
  }
}

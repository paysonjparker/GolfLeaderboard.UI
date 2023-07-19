import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GolfCourse } from 'src/app/models/golf-course';
import { GolfCourseRequest } from 'src/app/models/golf-course-request';
import { Golfer } from 'src/app/models/golfer';
import { GolferRequest } from 'src/app/models/golfer-request';
import { GolfCourseServiceService } from 'src/app/services/golf-course-service.service';
import { GolferServiceService } from 'src/app/services/golfer-service.service';

@Component({
  selector: 'app-golfer-edit',
  templateUrl: './golfer-edit.component.html',
  styleUrls: ['./golfer-edit.component.css']
})
export class GolferEditComponent {

  golfer: Golfer = {
    id: "",
    name: "",
    handicapIndex: 0,
    homeCourse: "",
    scores: [],
  };

  constructor(private router: Router, private route: ActivatedRoute, private service: GolferServiceService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    // this.golfCourseEditForm = this.createGolfCourseEditForm();
    var id = this.route.snapshot.params['Id'];
    this.service.getGolferById(id).subscribe((golfer: Golfer) => this.golfer = golfer);
  }

  onSubmit() {
    const golferRequest: GolferRequest = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      handicapIndex: Number((document.getElementById("handicapIndex") as HTMLInputElement).value),
      homeCourse: (document.getElementById("homeCourse") as HTMLInputElement).value,
      scores: this.golfer.scores,
    };
    this.service.updateGolfer(this.golfer.id, golferRequest).subscribe((golfer: Golfer) => this.golfer = golfer);
    this.router.navigate(['/golfer/' + this.golfer.id]);
  }

  onCancel(){
    this.router.navigate(['/golfer/' + this.route.snapshot.params['Id']]);
  }
}

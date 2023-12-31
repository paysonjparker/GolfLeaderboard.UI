import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GolfCourse } from 'src/app/models/golf-course';
import { Golfer } from 'src/app/models/golfer';
import { GolferRequest } from 'src/app/models/golfer-request';
import { GolfCourseServiceService } from 'src/app/services/golf-course-service.service';
import { GolferServiceService } from 'src/app/services/golfer-service.service';

@Component({
  selector: 'app-golfer-create',
  templateUrl: './golfer-create.component.html',
  styleUrls: ['./golfer-create.component.css']
})
export class GolferCreateComponent implements OnInit {

  golfer: Golfer = {
    id: "",
    name: "",
    handicapIndex: 0,
    homeCourse: "",
    scores: [],
  };

  
  golfCourses: GolfCourse[] | undefined;

  // Used for dropdown on selecting home course
  // Must be a string
  golfCourseNames: string[] | undefined;

  selectedGolfCourse: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private service: GolferServiceService, private formBuilder: FormBuilder, private golfCourseService: GolfCourseServiceService) {

  }

  ngOnInit(): void {    
    this.golfCourseService.getGolfCourseNames((golfCourseNames: string[]) => this.golfCourseNames = golfCourseNames);
  }


  onSubmit() {
    const golferRequest: GolferRequest = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      handicapIndex: Number((document.getElementById("handicapIndex") as HTMLInputElement).value),
      homeCourse: (document.getElementById("homeCourse") as HTMLInputElement).value,
      scores: this.golfer.scores,
    };
    let status = this.service.createGolfer(golferRequest, () => {
      console.log("Success create a Golfer");
    });    
    this.router.navigate(['/golfer-list']);
  }

  onCancel(){
    history.back();
  }
}

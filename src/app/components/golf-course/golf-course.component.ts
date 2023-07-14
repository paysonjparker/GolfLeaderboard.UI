import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GolfCourse } from 'src/app/models/golf-course';
import { GolfCourseServiceService } from 'src/app/services/golf-course-service.service';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';


@Component({
  selector: 'app-golf-course',
  templateUrl: './golf-course.component.html',
  styleUrls: ['./golf-course.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class GolfCourseComponent {

  golfCourse: GolfCourse = {
    id: "",
    name: "",
    location: "",
    slopeRating: 0,
    courseRating: 0,
    yardage: 0,
    par: 0
  };

  constructor(private router: Router, private route: ActivatedRoute, private service: GolfCourseServiceService, private confirmationService: ConfirmationService, private messageService: MessageService) {

  }

  ngOnInit() {
    console.log(this.route.snapshot.params['Id']);
    this.service.getGolfCourseById(this.route.snapshot.params['Id']).subscribe((golfCourse: GolfCourse) => this.golfCourse = golfCourse);
  }

  onDeleteButtonClick() {
    this.confirmationService.confirm({
      message: 'Do you want to delete ' + this.golfCourse.name + '?',
      header: 'Confirm Delete',
      icon: 'pi pi-info-circle',
      accept: () => {
        // this.service.deleteGolfCourse(this.golfCourse.id);
        this.service.deleteGolfCourse(this.route.snapshot.params['Id']).subscribe({
          next: () => {
            this.router.navigate(['golf-course-list']);
            // this.messageService.add({ severity: 'error', summary: 'Successfully deleted:', detail: this.golfCourse.name});
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
    });
  }

  onEditButtonClick(){

  }
}

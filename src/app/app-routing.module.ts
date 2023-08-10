import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GolfCourseListComponent } from './components/golf-course-components/golf-course-list/golf-course-list.component';
import { HomeComponent } from './components/home/home.component';
import { GolfCourseComponent } from './components/golf-course-components/golf-course/golf-course.component';
import { GolfCourseEditComponent } from './components/golf-course-components/golf-course-edit/golf-course-edit.component';
import { GolfCourseCreateComponent } from './components/golf-course-components/golf-course-create/golf-course-create.component';
import { GolferListComponent } from './components/golfer-components/golfer-list/golfer-list.component';
import { GolferComponent } from './components/golfer-components/golfer/golfer.component';
import { GolferEditComponent } from './components/golfer-components/golfer-edit/golfer-edit.component';
import { GolferCreateComponent } from './components/golfer-components/golfer-create/golfer-create.component';
import { ScoreCreateComponent } from './components/score-components/score-create/score-create.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'golf-course-list',
    component: GolfCourseListComponent
  },
  {
    path: 'golf-course/:Id',
    component: GolfCourseComponent,
  },
  {
    path: 'editGolfCourse/:Id',
    component: GolfCourseEditComponent
  },
  {
    path: 'createGolfCourse',
    component: GolfCourseCreateComponent
  },
  {
    path: 'golfer-list',
    component: GolferListComponent
  },
  {
    path: 'golfer/:Id',
    component: GolferComponent,
  },
  {
    path: 'editGolfer/:Id',
    component: GolferEditComponent
  },
  {
    path: 'createGolfer',
    component: GolferCreateComponent
  },
  {
    path: 'addScore/:Id',
    component: ScoreCreateComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

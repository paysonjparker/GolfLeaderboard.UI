import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GolfCourseListComponent } from './components/golf-course-list/golf-course-list.component';
import { HomeComponent } from './components/home/home.component';
import { GolfCourseComponent } from './components/golf-course/golf-course.component';

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
    path: 'golf-course/:golfCourseName',
    component: GolfCourseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

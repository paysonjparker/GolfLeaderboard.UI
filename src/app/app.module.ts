import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GolfCourseComponent } from './components/golf-course-components/golf-course/golf-course.component';
import { GolfCourseListComponent } from './components/golf-course-components/golf-course-list/golf-course-list.component';
import { GolfCourseEditComponent } from './components/golf-course-components/golf-course-edit/golf-course-edit.component';
import { GolfCourseCreateComponent } from './components/golf-course-components/golf-course-create/golf-course-create.component';
import { GolferListComponent } from './components/golfer-components/golfer-list/golfer-list.component';
import { GolferComponent } from './components/golfer-components/golfer/golfer.component';
import { GolferCreateComponent } from './components/golfer-components/golfer-create/golfer-create.component';
import { GolferEditComponent } from './components/golfer-components/golfer-edit/golfer-edit.component';
import { ScoreEditComponent } from './components/score-components/score-edit/score-edit.component';
import { ScoreCreateComponent } from './components/score-components/score-create/score-create.component';

//Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { GalleriaModule } from 'primeng/galleria';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    GolfCourseComponent,
    GolfCourseListComponent,
    GolfCourseEditComponent,
    GolfCourseCreateComponent,
    GolferListComponent,
    GolferComponent,
    GolferCreateComponent,
    GolferEditComponent,
    ScoreEditComponent,
    ScoreCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MenubarModule,
    TableModule,
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    ToastModule,
    InputTextModule,
    GalleriaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

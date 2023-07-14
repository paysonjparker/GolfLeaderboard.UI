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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    GolfCourseComponent,
    GolfCourseListComponent,
    GolfCourseEditComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

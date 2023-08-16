import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { LeaderboardListComponent } from './components/leaderboard-components/leaderboard-list/leaderboard-list.component';
import { LeaderboardComponent } from './components/leaderboard-components/leaderboard/leaderboard.component';
import { LeaderboardCreateComponent } from './components/leaderboard-components/leaderboard-create/leaderboard-create.component';
import { LeaderboardEditComponent } from './components/leaderboard-components/leaderboard-edit/leaderboard-edit.component';

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
import { TooltipModule } from 'primeng/tooltip';
import { AboutComponent } from './components/about/about.component';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
    LeaderboardListComponent,
    LeaderboardComponent,
    LeaderboardCreateComponent,
    LeaderboardEditComponent,
    AboutComponent,
    NotFoundComponent,
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
    TooltipModule,
    ChipModule,
    DividerModule,
    AutoCompleteModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    MessageModule,
    MessagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

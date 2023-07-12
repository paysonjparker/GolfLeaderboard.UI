import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../enironments/environments';
import { GolfCourse } from '../models/golf-course';

@Injectable({
  providedIn: 'root'
})
export class GolfCourseServiceService {

  readonly golfLeaderboardApiUrl = environments.golfLeaderBoardAPI;

  constructor(private http: HttpClient) 
  {

  }

  public getGolfCourses(callback: (golfCourses: GolfCourse[]) => void): void {
    this.http.get<GolfCourse[]>(this.golfLeaderboardApiUrl + "/GolfCourses").
      subscribe((golfCourses: GolfCourse[]) => {
        callback(golfCourses);
      });
  }

  public getGolfCourseById(golfCourseId: string, callback: (golfCourse: GolfCourse) => void): void {
    this.http.get<GolfCourse>(this.golfLeaderboardApiUrl + "/GolfCourses/" + golfCourseId).
      subscribe((data) => {
        callback(data);
        console.log(data);
      });
  }
}

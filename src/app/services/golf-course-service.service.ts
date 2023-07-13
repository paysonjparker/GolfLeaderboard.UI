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

  public getGolfCourseById(id : string) {
    return this.http.get<GolfCourse>(this.golfLeaderboardApiUrl + "/GolfCourses/" + id);
  };

  public deleteGolfCourse(id: string, callback: () => void): void {
    this.http.delete(this.golfLeaderboardApiUrl + "/GolfCourses/" + id).
      subscribe((data) => {
        callback();
      });
  }
}

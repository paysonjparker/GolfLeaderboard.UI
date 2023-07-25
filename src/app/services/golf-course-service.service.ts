import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../enironments/environments';
import { GolfCourse } from '../models/golf-course';
import { Observable, catchError } from 'rxjs';
import { GolfCourseRequest } from '../models/golf-course-request';
import { Golfer } from '../models/golfer';

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

  public deleteGolfCourse(id: string): Observable<void> {
    return this.http.delete<void>(this.golfLeaderboardApiUrl + "/GolfCourses/" + id);
  }
  
  public updateGolfCourse(id: string, golfCourse: GolfCourseRequest): Observable<GolfCourse> {
    return this.http.put<GolfCourse>(this.golfLeaderboardApiUrl + "/GolfCourses/" + id, golfCourse);
  }

  public createGolfCourse(golfCourse: GolfCourseRequest, callback:() => void): void {
    this.http.post<GolfCourse>(this.golfLeaderboardApiUrl + "/GolfCourses", golfCourse).
      subscribe((data) => {
        callback();
      });
  }
}

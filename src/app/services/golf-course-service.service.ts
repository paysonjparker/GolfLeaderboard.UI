import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../enironments/environments';
import { GolfCourse } from '../models/golf-course';
import { Observable, catchError } from 'rxjs';

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
  
  public updateProduct(id: string, golfCourse: GolfCourse): Observable<GolfCourse> {
    return this.http.put<GolfCourse>(this.golfLeaderboardApiUrl + "/GolfCourses/" + id, golfCourse);
  }
}

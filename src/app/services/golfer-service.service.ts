import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Golfer } from '../models/golfer';
import { environments } from '../enironments/environments';
import { Observable } from 'rxjs';
import { GolferRequest } from '../models/golfer-request';

@Injectable({
  providedIn: 'root'
})
export class GolferServiceService {

  readonly golfLeaderboardApiUrl = environments.golfLeaderBoardAPI;

  constructor(private http: HttpClient) { }

  public getGolfers(callback: (golfers: Golfer[]) => void): void {
    this.http.get<Golfer[]>(this.golfLeaderboardApiUrl + "/Golfers").
      subscribe((golfers: Golfer[]) => {
        callback(golfers);
      });
  }

  public getGolferById(id : string) {
    return this.http.get<Golfer>(this.golfLeaderboardApiUrl + "/Golfers/" + id);
  };

  public deleteGolfer(id: string): Observable<void> {
    return this.http.delete<void>(this.golfLeaderboardApiUrl + "/Golfers/" + id);
  }
  
  public updateGolfer(id: string, golfer: GolferRequest): Observable<Golfer> {
    return this.http.put<Golfer>(this.golfLeaderboardApiUrl + "/Golfers/" + id, golfer);
  }

  public createGolfer(golfer: GolferRequest, callback:() => void): void {
    this.http.post<Golfer>(this.golfLeaderboardApiUrl + "/Golfers", golfer).
      subscribe((data) => {
        callback();
      });
  }
  
  public getAllMembers(homeCourseName : string) {
    return this.http.get<Golfer[]>(this.golfLeaderboardApiUrl + "/Golfers/members/" + homeCourseName);
  };
}

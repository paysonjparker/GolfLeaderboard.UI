import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Golfer } from '../models/golfer';
import { environments } from '../enironments/environments';

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
}

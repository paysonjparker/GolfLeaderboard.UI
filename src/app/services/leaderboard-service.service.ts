import { Injectable } from '@angular/core';
import { environments } from '../enironments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardServiceService {

  readonly golfLeaderboardApiUrl = environments.golfLeaderBoardAPI;

  constructor(private http: HttpClient) { }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../enironments/environments';
import { Score } from '../models/score';
import { Observable } from 'rxjs';
import { ScoreRequest } from '../models/score-request';

@Injectable({
  providedIn: 'root'
})
export class ScoreServiceService {

  readonly golfLeaderboardApiUrl = environments.golfLeaderBoardAPI;

  constructor(private http: HttpClient) { }

  public getScores(callback: (scores: Score[]) => void): void {
    this.http.get<Score[]>(this.golfLeaderboardApiUrl + "/Scores").
      subscribe((scores: Score[]) => {
        callback(scores);
      });
  }

  public getScoreById(id : string) {
    return this.http.get<Score>(this.golfLeaderboardApiUrl + "/Scores/" + id);
  };

  public deleteScore(id: string): Observable<void> {
    return this.http.delete<void>(this.golfLeaderboardApiUrl + "/Scores/" + id);
  }
  
  public updateScore(id: string, score: ScoreRequest): Observable<Score> {
    return this.http.put<Score>(this.golfLeaderboardApiUrl + "/Scores/" + id, score);
  }

  public createScore(score: ScoreRequest, callback:() => void): void {
    this.http.post<Score>(this.golfLeaderboardApiUrl + "/Scores", score).
      subscribe((data) => {
        callback();
      });
  }
}

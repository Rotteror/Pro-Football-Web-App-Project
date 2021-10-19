import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMatchList } from '../shared/interfaces/matchList';

const API_URL = environment.apiURL;
@Injectable()
export class MatchesService {

  constructor(private http: HttpClient) {

  }

  getAllMatchDays() {
    return this.http.get<any>(`${API_URL}/matches/all`, { withCredentials: true });
  };

  getMatchList(date: {}) {
    return this.http.post<IMatchList>(`${API_URL}/matches/date`, { date }, { withCredentials: true })
  }

  postMatches(data: {}) {
    return this.http.post<any>(`${API_URL}/matches/create`, data, { withCredentials: true });
  };

  postPredictions(authorId: any, predictions: {}, date: string) {
    return this.http.post<any>(`${API_URL}/matches/add-predictions`, { authorId, predictions, date }, { withCredentials: true })
  }
}

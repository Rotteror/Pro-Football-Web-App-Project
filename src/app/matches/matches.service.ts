import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiURL;
@Injectable()
export class MatchesService {

  constructor(private http: HttpClient) { 

  }

  getAllMatchDays() {
    return this.http.get<any>(`${API_URL}/matches/all`, { withCredentials: true });
  };

  postMatches(data: {}) {
    return this.http.post<any>(`${API_URL}/matches/create`, data, { withCredentials: true });
  };
}
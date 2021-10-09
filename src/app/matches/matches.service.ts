import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiURL;
@Injectable()
export class MatchesService {

  constructor(private http: HttpClient) { 

  }

  postMatches(data: {}) {
    return this.http.post<any>(`${API_URL}/matches/create`, data, { withCredentials: true });
  };
}

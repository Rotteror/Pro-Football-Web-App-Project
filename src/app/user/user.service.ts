import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { IUser } from '../shared/interfaces/user';


const API_URL = environment.apiURL;
@Injectable()
export class UserService {

  currentUser: IUser | undefined;

  get isLogged(): boolean {
    return this.currentUser !== undefined
  }

  constructor(private http: HttpClient) { }


  register(data: { username: string; email: string; password: string; fullName: string; address: string; }) {
    return this.http.post<IUser>(`${API_URL}/users/register`, data, { withCredentials: true }).pipe(
      tap((user) => this.currentUser = user)
    );
  };
}

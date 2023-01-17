import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private readonly apiUrl: string = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) {}

  getUsers(size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?results=${size}`);
  }
}

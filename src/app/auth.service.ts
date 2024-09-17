import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private apiURL = environment.apiURL
  
  constructor(private http: HttpClient) {}

  register( username: string, password: string): Observable<any> {
    return this.http.post( `${this.apiURL}/register`, { username, password } );
  }

  login( username: string, password: string): Observable<any> {
    return this.http.post( `${this.apiURL}/login`, { username, password } ).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
        return response;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
  
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public signIn(username: string, password: string) {
   return this.http
      .post("http://localhost:3000/sign-in", { username, password });
     
  }
}

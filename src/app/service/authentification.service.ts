import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Users } from "../models/model.user";
import { Observable } from "rxjs";
import { tap } from "rxjs/Operators";

@Injectable({
  providedIn: "root"
})
export class AuthentificationService {
  UsersUrl: string = "http://localhost:3000/userConnected";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users[]> {
    return this.http
      .get<Users[]>(this.UsersUrl)
      .pipe(tap(data => console.log(JSON.stringify(data))));
  }
  addUser() {}
}
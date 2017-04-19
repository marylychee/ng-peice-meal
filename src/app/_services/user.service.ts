import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/user.models';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  create(user: User) {
    return this.http.post('./api/users', user, this.jwt()).map((response: Response) => response.json());
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Header({ 'Authorization': 'Bearer ' + currentUser.token })
      return new RequestOptions({ headers: headers});
    }
  }
}

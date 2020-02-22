import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { BaseService } from './baseService.service';
import { Serializer } from '../app/serializers/base.serializer';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class UserService extends BaseService<User>{
    
  protected endpoint: string;

  constructor(protected http: HttpClient) {
    super(http);
    this.endpoint = 'users';
  }

  public getUsers(): Observable<User[] | User> {
    return this.getBase<User>();
  }

  public editUser(user: User): Observable<any> {
    return this.putBase<User>(user, user.id);
  }

  public addUser(user: User): Observable<any> {
    return this.http.post<User>(`${environment.apiAddress}/auth/signup`, user, { headers: this.headers, withCredentials: true });
  }

  public signIn(email: string, password: string): Observable<any> {
    return this.http.post<User>(`${environment.apiAddress}/auth/signin`, { email, password }, { withCredentials: true });
  }

  public deleteUser(id: string): Observable<any> {
    return this.deleteBase<User>(id);
  }

  public getUserById(id: number): Observable<User> {
    return this.getByIdBase(id);
  }
}
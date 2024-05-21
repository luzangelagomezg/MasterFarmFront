import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiurl = environment.apiUrl + 'api/';
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<IUser[]>(this.apiurl + 'User');
  }

  deleteUser(id: number){
    return this.http.delete(this.apiurl + 'User/'+id);
  }

  getUser(id: number){
    return this.http.get<IUser>(this.apiurl + 'User/'+id);
  }

  updateUser(user: IUser){
    return this.http.put(this.apiurl + 'User/'+user.id+'?userName='+user.userName+'&password='+user.password+'&farmerId='+user.farmerId, user);
  }

  createUser(user: IUser){
    return this.http.post(this.apiurl + 'User/'+user.userName+'/'+user.password+'/'+user.farmerId, '');
  }
}

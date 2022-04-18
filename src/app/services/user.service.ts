import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user'; 


@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  baseUrl=environment.baseUrl+"/userdb";

  constructor( private _http:HttpClient) { }

  //post request
  saveData(data:any):Observable<User[]>{
    return this._http.post<User[]>(this.baseUrl, data);
  }

  //get request
  getData():Observable<User[]>{
    return this._http.get<User[]>(this.baseUrl);
  }

  //delete request
  delete(id:number):Observable<User[]>{
    return this._http.delete<User[]>(this.baseUrl+"/"+id);
  }

  //update request
  update(id:number,data:any):Observable<User[]>{
    return this._http.put<User[]>(this.baseUrl+"/"+id, data);
  }
  
}

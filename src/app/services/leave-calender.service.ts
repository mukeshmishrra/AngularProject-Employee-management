import { Injectable } from '@angular/core';
import { LeaveCalenderModel } from '../models/leave-calender-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveCalenderService {

  
 
  base_url = environment.baseUrl+"/userdata"
  constructor(private _http:HttpClient) { }

  
  //getting all  request
 public getAllData(): Observable<LeaveCalenderModel[]>{
    return this._http.get<LeaveCalenderModel[]>(this.base_url);
  }

  //delete request  
  delete(id:number): Observable<LeaveCalenderModel[]>{
    return this._http.delete<LeaveCalenderModel[]>(this.base_url +"/"+ id);  
  }

  //create(POST) Request
  saveData(data:any): Observable<LeaveCalenderModel[]>{
    return this._http.post<LeaveCalenderModel[]>(this.base_url, data);
  }

  //update (PUT) request
  update(id:number, item:any): Observable<LeaveCalenderModel[]>{
    return this._http.put<LeaveCalenderModel[]>(this.base_url+"/"+id,item);
    
  }

  

}

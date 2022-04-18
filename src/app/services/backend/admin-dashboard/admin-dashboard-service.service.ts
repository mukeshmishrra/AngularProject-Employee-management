import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AdminDashboardModel } from 'src/app/models/backend/admin-dashboard/admin-dashboard-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardServiceService {

  constructor(private http : HttpClient ) { }

  
  base_url = environment.baseUrl+"/admin-dashboard";

  //GET REQUEST
  getAlluser(): Observable<AdminDashboardModel[]> {
    return this.http.get<AdminDashboardModel[]>(this.base_url);
  }


  //POST REQUEST
  createuser(res:any): Observable<AdminDashboardModel[]>{
   
    let test:any[] = res;
    console.log("check me "+test);
    return this.http.post<AdminDashboardModel[]>(this.base_url, res);
  }

  //UPDATE REQUEST
  updateuser(id:number, user:any):Observable<AdminDashboardModel[]>{
    return this.http.put<AdminDashboardModel[]>(this.base_url+"/"+id, user)
  }


  //DELETE REQUEST
  deleteuser(users:any): Observable<AdminDashboardModel[]> {
    return this.http.delete<AdminDashboardModel[]>(this.base_url+"/"+users.id);
  }

  //GET DATA BY ID
  getbyid(users:any): Observable<AdminDashboardModel[]>{
    return this.http.get<AdminDashboardModel[]>(this.base_url+"/"+users.id);
  }

}

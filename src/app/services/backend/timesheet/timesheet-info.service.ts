import { Injectable } from '@angular/core';
import { TimesheetInfo } from 'src/app/models/backend/timesheet-backend/timesheet-info';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimesheetInfoService {

 base_url = environment.baseUrl+"/timesheet-backend";
  
 constructor(private http:HttpClient) { }
  //GET REQUEST
      getAllData():Observable<TimesheetInfo[]>{
         return this.http.get<TimesheetInfo[]>(this.base_url);
      }

      //POST REQUEST
      createUser(data:any):Observable<TimesheetInfo[]>{
        return this.http.post<TimesheetInfo[]>(this.base_url,data);
      }


        //DELETE REQUEST
        deleteUser(user:any):Observable<TimesheetInfo[]>{
          return this.http.delete<TimesheetInfo[]>(this.base_url+"/"+user.id)
        }

        //UPDATE REQUEST
        update(id:number, data:any):Observable<TimesheetInfo[]>{
          return this.http.put<TimesheetInfo[]>(this.base_url+"/"+id, data);

        }

}

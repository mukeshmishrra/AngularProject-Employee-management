import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LeaveModel } from 'src/app/components/backend/leave-applied-emp-list-view/leave-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  
  

  //base_url="http://localhost:3000/apply-leave";
    base_url=environment.baseUrl+"/apply-leave";

  constructor(private http:HttpClient) {

   }


    // POST REQUEST 
    postData(data:any):Observable<LeaveModel[]> {
      return this.http.post<LeaveModel[]>(this.base_url,data).pipe(map((res:any)=>{
        return res;
      }))
    }

    // GET REQUEST
    getData():Observable<LeaveModel[]> {
      return this.http.get<LeaveModel[]>(this.base_url).pipe(map((res:any)=>{
        return res;
      }))
    }

    // DELETE REQUEST
    deleteData(id:number):Observable<LeaveModel[]> {
      return this.http.delete<LeaveModel>(this.base_url+"/"+id)
      .pipe(map((res:any)=>{
    return res;
      }))
    }

    // PUT REQUEST
    putData(data:any,id:number){
      return this.http.put(this.base_url+"/"+id , data ).pipe(map((res:any)=>{
        return res;
      }))
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, of, retry ,  Observable, BehaviorSubject} from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginModule } from '../models/login-module';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  [x: string]: any;



  
  //for login user
  LoginUser(token:any){
    localStorage.setItem("token", token)
    return true;
  }

  //to check user is logged in or not
  isLoggedIn(){
    let token = localStorage.getItem("token");
    
    if(token==undefined || token==='' || token ==null){
      return false;
    }else{
      return true;
    }
  }


  //logout the user
  logout(){
    localStorage.removeItem("token");
    return true;
  }

  //get token 
  getToken(){
    return localStorage.getItem("token");
  }

  //url = "http://localhost:3000/"
  //generate token 
  //userdata --> username and password  from the form
  // generateToken(userdata:any){
  //   return this.http.post(`${this.url}/token`, userdata);
  // }



  constructor(private http:HttpClient) { }
 
    base_url= environment.baseUrl +"/login_modules";

  getUserByEmail(email:string){
    return this.http.get<any[]>(`${this.base_url}?emailid=${email}`);
  }
  

  //LOGIN CHECK
  loginChecker(){
    return this.http.get<LoginModule[]>(this.base_url);
  }


  // POST REQUEST
  postData(data:any):Observable<LoginModule[]>{
    return this.http.post<LoginModule[]>(this.base_url,data).pipe(map((res:any)=>{
      return res;
   }))
  }

  //GET REQUEST
  getData():Observable<LoginModule[]>{
    return this.http.get<LoginModule[]>(this.base_url).pipe(map((res:any)=>{
      return res;
    }))
  }


  //DELETE REQUEST
  deleteData(id:number):Observable<LoginModule[]>{
    return this.http.delete<LoginModule[]>(this.base_url+"/"+id)
    .pipe(map((res:any)=>{
    return res;
    }))
  }
  
  //UPDATE REQUEST
  putData(data:any,id:number):Observable<LoginModule[]>{
    return this.http.put<LoginModule[]>(this.base_url+"/"+id , data ).pipe(map((res:any)=>{
      return res;
    }))
  }

}

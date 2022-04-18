import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public LoginForm! : FormGroup;
  
  //Handling form submission
  submitForm = false;

  //handling login failure message to user 
  failed_message:boolean=false;

  //handling login sucess message to user
  success_message:boolean=false;

  //password visibility setup
  public showPassword: boolean = false;

  
  constructor(
      public FB:FormBuilder,
      private routes:Router, 
      private http:HttpClient, 
      private apiservice: UserAuthService
    ) { }

  ngOnInit(): void {

    localStorage.removeItem("user");

  

    this.LoginForm = this.FB.group({
      emailid : ['',[Validators.required,Validators.email]],
      password :['',Validators.required]
    })
  }



  onSubmit(){
    this.submitForm = true
    if(this.LoginForm.invalid){
      return ;
    }else{
      this.apiservice.loginChecker().subscribe(
        (res)=>{  
          const user = res.find((check:any)=>{
            return check.emailid === this.LoginForm.value.emailid && check.password === this.LoginForm.value.password ; 
          });

          if(user){
            this.apiservice.LoginUser(user.emailid)

             localStorage.setItem("username", user.Name);
            
            // localStorage.setItem("emailid",this.LoginForm.value.emailid);
            // localStorage.setItem("password",this.LoginForm.value.password);
            // localStorage.setItem("IsloggedIn", "true");
           

            this.success_message=true;
            setTimeout(() => {
              this.success_message=false;
              this.LoginForm.reset();
              //redirect to dashboard
              //this.routes.navigate(['/registered/user/view']); 
              this.routes.navigate(['/']); 
            }, 3000);
            

        }else{
            this.failed_message = true;
         setTimeout(() => {
              this.failed_message=false;
         }, 3000);
        }

        },
        (error)=>{
          alert("something went wrong!!")
        }
      );


  }
}

public togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}

  get f(){
   return this.LoginForm.controls
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModule } from 'src/app/models/login-module';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Observable } from 'rxjs';
import { uniqueEmailValidator } from 'src/app/unique-email-validator.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //creating user varaible with restriting type LoginModule[]
  user!:LoginModule[];

  //registration complete success message handling 
  success_message:boolean=false;
  
  nonWhitespaceRegExp: RegExp = new RegExp("\\S");

  nameValidator:RegExp= new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");


  //password visibility setup
  public showPassword: boolean = false;

  public signupForm! : FormGroup ;
  submit = false;
  studentEmailcheck:any = [];
  constructor(public formBuild : FormBuilder,
          private apis:UserAuthService,
          private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuild.group({
      Name:['',Validators.compose([Validators.required,Validators.pattern(this.nameValidator), Validators.minLength(2)])],
      lastname:[null,[Validators.minLength(2),Validators.pattern(this.nameValidator)]],
      emailid:['',
             [Validators.required, Validators.email], //sync validators
             uniqueEmailValidator(this.apis)   //async validator - duplicate email entry protector
      ],
      password:['',[Validators.required,Validators.minLength(7), Validators.pattern(this.nonWhitespaceRegExp)]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$")  ]],
      designation:['',[Validators.required, Validators.pattern(this.nonWhitespaceRegExp)]]
     })
   
  }

  onSubmit(data:any){
    this.submit = true
    if(this.signupForm.valid){
     this.apis.postData(data).subscribe(
        (res)=>{
              this.success_message = true;
              this.signupForm.reset();
              this.submit=false;

          setTimeout(() => {
            this.success_message= false;
            this.router.navigate(['/login'])  
          }, 3000);

          
          return res;
        },
        (error)=>{
          alert("something went wrong");
        }
     );
    }
  }

    getData(){
     this.apis.getData().subscribe(
       (res)=>{
          return res;
       },
       (error)=>{
         alert("something went wrong! please try again lator");
       }
     );
    }

        
    public togglePasswordVisibility(): void {
      this.showPassword = !this.showPassword;
    }

    get f(){
      return this.signupForm.controls;
    }   
}

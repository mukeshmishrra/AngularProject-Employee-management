import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user!:User[];

  //success msg handling
  success_message:boolean=false;


  constructor(private formBuilder:FormBuilder,private router:Router,private user_service: UserService) { }
  public userForm!:FormGroup;

  
  nonWhitespaceValidator: RegExp = new RegExp("\\S");
  nameValidator:RegExp= new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      fname:['',[Validators.required,Validators.maxLength(15),Validators.minLength(3),Validators.pattern(this.nameValidator)]],
      lname:['',[Validators.maxLength(15),Validators.minLength(3), Validators.pattern(this.nameValidator)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
      role:['',[Validators.required,Validators.maxLength(30), Validators.pattern(this.nonWhitespaceValidator), Validators.pattern(this.nameValidator)]],
      designation:['',[Validators.required,Validators.maxLength(30),Validators.minLength(5), Validators.pattern(this.nonWhitespaceValidator), Validators.pattern(this.nameValidator)]],
      doj:['',Validators.required],
    })

  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.userForm.controls[controlName].hasError(errorName);
  }

  userFormdata(){
    if(this.userForm.valid){
      //console.log(this.userForm.value);
      this.user_service.saveData(this.userForm.value).subscribe(
        (res)=>{
         this.success_message = true;
          
          setTimeout(() => {
            this.success_message=false;
            this.router.navigate(['/user/view']);
          }, 3000);
         
        },
        (error)=>{
            alert("server not found. try again lator !")
        }
      );
      
    }
  }


  
  view(){
    
  }


}

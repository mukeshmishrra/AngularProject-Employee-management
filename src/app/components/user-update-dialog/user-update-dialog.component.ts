import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-update-dialog',
  templateUrl: './user-update-dialog.component.html',
  styleUrls: ['./user-update-dialog.component.css']
})
export class UserUpdateDialogComponent implements OnInit {


  user!: User[];
  
  //Validators regex codes for triming the whitespaces and validating for name
  nonWhitespaceValidator: RegExp = new RegExp("\\S");
  nameValidator:RegExp= new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");

  //seccess message handling
  success_message:boolean=false;

  public usermodaldataForm!:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private user_service: UserService,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) public dataFetch:any, 
    private dataRef:MatDialogRef<UserUpdateDialogComponent>

    ) { }

  ngOnInit(): void {
    this.usermodaldataForm = this.formBuilder.group({
      fname:['',[Validators.required,Validators.pattern(this.nameValidator)]],
      lname:['',[Validators.maxLength(15),Validators.minLength(3), Validators.pattern(this.nameValidator)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
      role:['',[Validators.required,Validators.maxLength(30),Validators.minLength(5), Validators.pattern(this.nameValidator)]],
      designation:['',[Validators.required,Validators.maxLength(30),Validators.minLength(5), Validators.pattern(this.nameValidator)]],
      doj:['',Validators.required],

    })

     //fetch selected user data into the edit form
      //console.log(this.dataFetch);
      if(this.dataFetch){
        //data fetch into the form
        this.usermodaldataForm.controls['fname'].setValue(this.dataFetch.fname);
        this.usermodaldataForm.controls['lname'].setValue(this.dataFetch.lname);
        this.usermodaldataForm.controls['email'].setValue(this.dataFetch.email);
        this.usermodaldataForm.controls['password'].setValue(this.dataFetch.password);
        this.usermodaldataForm.controls['role'].setValue(this.dataFetch.role);
        this.usermodaldataForm.controls['designation'].setValue(this.dataFetch.designation);
        this.usermodaldataForm.controls['doj'].setValue(this.dataFetch.doj);
      }
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.usermodaldataForm.controls[controlName].hasError(errorName);
  }

  updateUserData(){
      //console.log(this.usermodaldataForm.value)
      if(this.usermodaldataForm.valid){
        //console.log("working perfect");
        //console.log(this.usermodaldataForm.value);

        this.user_service.update(this.dataFetch.id, this.usermodaldataForm.value).subscribe(
          (res)=>{
              //success message 
              this.success_message=true;
              setTimeout(() => {
                this.success_message = false;
                 //redirect on view 
                this.usermodaldataForm.reset();
                this.dataRef.close();
           }, 3000)
  
          },
          (error)=>{
              alert("something went wrong!")
          }
        );

      }


  }

}

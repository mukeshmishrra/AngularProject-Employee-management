import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder,FormControl,FormGroup,ValidationErrors,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { uniqueEmailValidator } from 'src/app/unique-email-validator.directive';

@Component({
  selector: 'app-registeration-user-edit-dialog',
  templateUrl: './registeration-user-edit-dialog.component.html',
  styleUrls: ['./registeration-user-edit-dialog.component.css']
})
export class RegisterationUserEditDialogComponent implements OnInit {

  public editForm! : FormGroup ;
  submit = false;
  emailValidationApi!   :any;
  success_message:boolean=false;
  
  nonWhitespaceRegExp: RegExp = new RegExp("\\S");

  nameValidator:RegExp= new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");


  constructor(
    private formBuild : FormBuilder,
    @Inject(MAT_DIALOG_DATA)public editData:any,
    private dialogref :MatDialogRef<RegisterationUserEditDialogComponent> ,
    private services:UserAuthService,
    private https:HttpClient
  ) { }

  ngOnInit(): void {

    this.editForm = this.formBuild.group({
      Name:['',Validators.compose([Validators.required,Validators.pattern(this.nameValidator), Validators.minLength(2)])],
      lastname:[null,[Validators.minLength(2),Validators.pattern(this.nameValidator)]],
      emailid:['',
             [Validators.required, Validators.email] //sync validators
            // uniqueEmailValidator(this.services)   //async validator - duplicate email entry protector
      ],
      password:['',[Validators.required,Validators.minLength(7), Validators.pattern(this.nonWhitespaceRegExp)]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10), Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$")  ]],
      designation:['',[Validators.required, Validators.pattern(this.nonWhitespaceRegExp)]]
     })

     if(this.editData){
      this.editForm.controls['Name'].setValue(this.editData.Name);
      this.editForm.controls['lastname'].setValue(this.editData.lastname);
      this.editForm.controls['password'].setValue(this.editData.password);
      this.editForm.controls['emailid'].setValue(this.editData.emailid);
      this.editForm.controls['mobile'].setValue(this.editData.mobile);
      this.editForm.controls['designation'].setValue(this.editData.designation);
    }
  }

  get f(){
    return this.editForm.controls;
  }

  updateData(){
    
    if(this.editForm.valid){
      console.log(this.editForm.value);
    this.services.putData(this.editForm.value,this.editData.id).subscribe({
      next:(res:any)=>{

        //update success message handling
        this.success_message = true;
        setTimeout(() => {  
          this.success_message = false;
          this.editForm.reset();
          this.dialogref.close();     
        }, 3000);
     
      },error:(res:any)=>{
        alert (`something error occured : ${res}`);
      }
    })

       console.log(this.editForm.value);
    }
  }
  closeDialog(){
    this.dialogref.close();
  }

}

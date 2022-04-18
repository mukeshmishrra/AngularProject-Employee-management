import { Component, OnInit,Inject } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LeaveService } from 'src/app/services/backend/leave.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompareDatesEnd, NameValidates } from './EndDtaeValidateDirectives';
import {  Router} from '@angular/router';


@Component({
  selector: 'app-leave-apply-form',
  templateUrl: './leave-apply-form.component.html',
  styleUrls: ['./leave-apply-form.component.css']
})
export class LeaveApplyFormComponent implements OnInit {

    submit            = false;
    content           = "apply";
    actionBtn:string  = "save";
    fromDateRef!      :any;
    submission!       :any;
    applyLeave!       :FormGroup;
    public  date      = new Date() ;

    success_message_add:boolean=false;
    success_message_update:boolean=false;

    //name Validators
    onlyStringValidators:RegExp = new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");

    //whitespace validators
    nonWhitespaceRegExp: RegExp = new RegExp("\\S");

  constructor(
    private formbuild:FormBuilder,private api:LeaveService,
    @Inject(MAT_DIALOG_DATA) public editdata: any,
    private dialogRef : MatDialogRef<LeaveApplyFormComponent>,
    public Route:Router
  ) { }

  ngOnInit(): void {
    this.applyLeave = this.formbuild.group({
      username  :['',[Validators.required, Validators.minLength(2), Validators.pattern(this.onlyStringValidators)]],
      fromDate : ['',Validators.required],
      toDate   :['',[Validators.required,CompareDatesEnd]],
      reason:['',Validators.compose([
        Validators.required,
        Validators.pattern(this.onlyStringValidators),
        Validators.maxLength(30)
      ])],
      status:['',Validators.required],
    }
     )

      
  if(this.editdata){
    this.content    = "Edit";
    this.actionBtn  = "update";
    this.applyLeave.controls['username'].setValue(this.editdata.username),
    this.applyLeave.controls['fromDate'].setValue(this.editdata.fromDate),
    this.applyLeave.controls['toDate'].setValue(this.editdata.toDate),
    this.applyLeave.controls['reason'].setValue(this.editdata.reason),
    this.applyLeave.controls['status'].setValue(this.editdata.status)
  }
  }


    saveData(val:any){
      this.submit = true;

        if(!this.editdata && this.applyLeave.valid  && this.applyLeave.controls['fromDate'].value <= this.applyLeave.controls['toDate'].value ){
         
        //  console.log(val)
         

          this.api.postData(val).subscribe({
            next:(res:any)=>{
              
              this.success_message_add=true;
              setTimeout(() => {
                this.success_message_add=false;
                this.applyLeave.reset();
                this.dialogRef.close();
                this.submit= false;
  
                this.Route.navigate(['/leave-apply/view']);
              }, 3000);
              return res;
            }
          })
        
      }else{
        this.updateData();
      }

    }

    // edited data saving
    updateData(){
      this.submit = true;
      if(this.editdata && this.applyLeave.valid  && this.applyLeave.controls['fromDate'].value <= this.applyLeave.controls['toDate'].value ){
      this.api.putData(this.applyLeave.value,this.editdata.id).subscribe({
        next:(res:any)=>{
         //update success message handling 
         this.success_message_update=true;
         setTimeout(() => {
            this.success_message_update=false;
            this.applyLeave.reset();
            this.dialogRef.close();
            this.submit = false;

         }, 3000);
         
         
        },error:()=>{
          alert('something went wrong try sometime later')
        }
      })}
    }

    // close 
    onClose(){
      this.dialogRef.close();
    }
    // validation purpose
    get f(){
      return this.applyLeave.controls;
    }
    // validate for date purpose
    get dates(){
      return this.applyLeave.get('toDate');
    }


}

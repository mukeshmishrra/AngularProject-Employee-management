import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveCalenderService } from 'src/app/services/leave-calender.service';
import { LeaveCalenderModel } from 'src/app/models/leave-calender-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-leave-calender-update-dialog',
  templateUrl: './leave-calender-update-dialog.component.html',
  styleUrls: ['./leave-calender-update-dialog.component.css']
})
export class LeaveCalenderUpdateDialogComponent implements OnInit {

  leave!:LeaveCalenderModel;
  getId!:number;    //for gettig id during upadate record it will be needed

  //only string or character excepting
  nameValidator:RegExp = new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");
  nonWhitespaceValidator:RegExp = new RegExp("\\s");
  
  //success message
  success_message:boolean = false;
  public leaveCalenderModalForm!:FormGroup;

  constructor(
        private formBuilder:FormBuilder,
        private _service: LeaveCalenderService,
        @Inject(MAT_DIALOG_DATA) public dataFetch:any, 
        private _route:Router,
        private dataRef:MatDialogRef<LeaveCalenderUpdateDialogComponent> ) { }

  ngOnInit(): void {
    this.leaveCalenderModalForm = this.formBuilder.group({
      year:['',[Validators.required,Validators.maxLength(4),Validators.minLength(4)]],
      date:['',Validators.required],
      reason:['',[Validators.required, Validators.pattern(this.nameValidator), Validators.maxLength(60)]],
      type:['',Validators.required]
    })

    //console.log(this.dataFetch)

      if(this.dataFetch){
        //hanif style id taking for data update
          this.getId = this.dataFetch.id;
          this.leaveCalenderModalForm.controls['year'].setValue(this.dataFetch.year);
          this.leaveCalenderModalForm.controls['date'].setValue(this.dataFetch.date);
          this.leaveCalenderModalForm.controls['reason'].setValue(this.dataFetch.reason);
          this.leaveCalenderModalForm.controls['type'].setValue(this.dataFetch.type); 
      }

  }

  updateUserData(){
    //upodate form submit
    //console.log(this.leaveCalenderModalForm.value)
    if(this.leaveCalenderModalForm.valid){
        //logic
        //form update -service call

        this._service.update(this.getId, this.leaveCalenderModalForm.value).subscribe(
          (result)=>{
              //success message handling
              this.success_message=true; 
              setTimeout(() => {
               this.success_message=false;
              //redirect on view 
              this.leaveCalenderModalForm.reset();
              this.dataRef.close();
              
              }, 3000);
             
           
          },

          (error)=>{
            alert("Something went wrong!!")
          }
        );

    }


  }



  public hasError = (controlName: string, errorName: string) =>{
    return this.leaveCalenderModalForm.controls[controlName].hasError(errorName);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LeaveCalenderModel } from 'src/app/models/leave-calender-model';
import { LeaveCalenderService  } from 'src/app/services/leave-calender.service'


@Component({
  selector: 'app-leave-calender-create',
  templateUrl: './leave-calender-create.component.html',
  styleUrls: ['./leave-calender-create.component.css']
})
export class LeaveCalenderCreateComponent implements OnInit {

  leave!:LeaveCalenderModel[];
  public leaveCalenderForm!: FormGroup;
  //only string or character excepting
  nameValidator:RegExp = new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");
  nonWhitespaceValidator:RegExp = new RegExp("\\s");

  //handling form sumistion success messsage
  success_message:boolean=false;
  
  constructor(private formBuilder:FormBuilder, private _service:LeaveCalenderService,private router:Router) { }

  ngOnInit(): void {

    this.leaveCalenderForm = this.formBuilder.group({
      year:['',[Validators.required,Validators.maxLength(4),Validators.minLength(4)]],
      date:['',Validators.required],
      reason:['',[Validators.required, Validators.pattern(this.nameValidator), Validators.maxLength(60)]],
      type:['',Validators.required]
    })

  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.leaveCalenderForm.controls[controlName].hasError(errorName);
  }

  leaveCalender(){
    //console.log(this.leaveCalenderForm.value);
    if(this.leaveCalenderForm.valid){
      this._service.saveData(this.leaveCalenderForm.value).subscribe(
        (result)=>{
          //success message display
          this.success_message=true;
          setTimeout(() => {
            this.leaveCalenderForm.reset();
            this.router.navigate(['/leave-calender/view']);   
          }, 3000);
          //console.log("create form data added successfully");
         
        },
        (error)=>{
            alert("server not available");
        }
      );
    }

  }
}
import { Component,Inject, OnInit } from '@angular/core';
import { TimesheetInfo } from 'src/app/models/backend/timesheet-backend/timesheet-info';
import { TimesheetInfoService } from 'src/app/services/backend/timesheet/timesheet-info.service';
import { FormGroup,Validators,NgForm,FormControl,FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 

@Component({
  selector: 'app-timesheet-info-update',
  templateUrl: './timesheet-info-update.component.html',
  styleUrls: ['./timesheet-info-update.component.css']
})
export class TimesheetInfoUpdateComponent implements OnInit {
  
  
  minDate!: Date;
  maxDate!: Date;
  employeeform!:FormGroup;
  employeeModelObj: TimesheetInfo = new TimesheetInfo();

  alluser !:TimesheetInfo[];

  success_message:boolean=false;
  
  userobj={
    date    :'',
    project :'',
    username    :'',
    description :'',
    no_of_hrs    :'',
  }

  nonWhitespaceRegExp: RegExp = new RegExp("\\S");

  constructor(
    private fb : FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef:MatDialogRef<TimesheetInfoUpdateComponent>,
    private route:Router,
    private router:ActivatedRoute,
    private _service:TimesheetInfoService)
     {
    
     }


  ngOnInit(): void {

    this.employeeform = this.fb.group({
      date    : ['',Validators.required,],
      project : ['',Validators.required],
      username    : ['',[Validators.required, Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]],
      description : ['',[Validators.required, Validators.pattern(this.nonWhitespaceRegExp)] ],
      no_of_hrs    : ['',Validators.required],  
  })

      //data get --> selected id
      //console.log(this.editData);  //done
      if(this.editData){
        this.userobj = this.editData;
        
      }
  }

  updateuser(){
    if(this.employeeform.valid){
      this._service.update(this.editData.id, this.editData).subscribe(
        (res)=>{
            //alert("record updated successfully")
            //display success message 
            this.success_message=true;
            setTimeout(() => {
              this.success_message = false;
              this.employeeform.reset();
              this.dialogRef.close();
         }, 3000)
       
        },
        (error)=>{
          alert("something went wrong!!")
        }
      );
    }

  }

}
